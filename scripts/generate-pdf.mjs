import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs/promises';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'ElranLevy-Portfolio.pdf');
const BASE_URL = 'http://localhost:5173/CaseStudy-Deep-Dive/';

const PAGES = [
  { name: 'Home' },
  { name: 'FundGuard', path: 'fundguard' },
  { name: 'Monday', path: 'monday' },
];

async function startDevServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn('npm', ['run', 'dev'], { cwd: ROOT, stdio: 'pipe', shell: true });
    let resolved = false;

    proc.stdout.on('data', (data) => {
      const text = data.toString();
      if (!resolved && text.includes('localhost')) {
        resolved = true;
        resolve(proc);
      }
    });

    proc.stderr.on('data', (data) => {
      const text = data.toString();
      if (!resolved && text.includes('localhost')) {
        resolved = true;
        resolve(proc);
      }
    });

    setTimeout(() => {
      if (!resolved) {
        resolved = true;
        resolve(proc);
      }
    }, 8000);
  });
}

async function waitForIdle(page, ms = 1500) {
  await page.evaluate((t) => new Promise((r) => setTimeout(r, t)), ms);
}

async function unlockScrollContainers(page) {
  await page.evaluate(() => {
    // CaseStudyLayout outer: h-dvh overflow-hidden → auto height, visible
    document.querySelectorAll('.h-dvh').forEach((el) => {
      el.style.height = 'auto';
      el.style.overflow = 'visible';
    });
    // Inner scroll container: h-full overflow-y-auto → auto height, visible
    document.querySelectorAll('.h-full.overflow-y-auto').forEach((el) => {
      el.style.height = 'auto';
      el.style.overflow = 'visible';
    });
  });
}

async function forceAllVisible(page) {
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach((el) => {
      const cs = window.getComputedStyle(el);
      el.style.animation = 'none';
      el.style.transition = 'none';
      if (parseFloat(cs.opacity) < 1) el.style.opacity = '1';
      if (cs.transform !== 'none' && cs.transform !== 'matrix(1, 0, 0, 1, 0, 0)') {
        el.style.transform = 'none';
      }
    });
  });
}

async function scrollToLoadAll(page) {
  await page.evaluate(async () => {
    const distance = 600;
    const delay = 150;
    const body = document.body;
    const totalHeight = body.scrollHeight;
    let scrolled = 0;
    while (scrolled < totalHeight) {
      window.scrollBy(0, distance);
      scrolled += distance;
      await new Promise((r) => setTimeout(r, delay));
    }
    window.scrollTo(0, 0);
  });
  await waitForIdle(page, 500);
}

async function capturePage(page, label, isCaseStudy = false) {
  console.log(`  Capturing: ${label}...`);
  await waitForIdle(page, 2000);

  if (isCaseStudy) {
    await unlockScrollContainers(page);
    await waitForIdle(page, 500);

    // Scroll inside the (now unlocked) page to trigger lazy images & whileInView
    await scrollToLoadAll(page);
  }

  await forceAllVisible(page);
  await waitForIdle(page, 500);

  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
  });

  console.log(`  ✓ ${label} captured (${(pdf.length / 1024).toFixed(0)} KB)`);
  return pdf;
}

async function main() {
  console.log('Starting dev server...');
  const devServer = await startDevServer();
  console.log('Dev server ready.\n');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const pdfBuffers = [];

  try {
    // 1) Capture Home page
    console.log('Loading site...');
    await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 });

    await forceAllVisible(page);
    pdfBuffers.push(await capturePage(page, 'Home', false));

    // 2) Capture each case study by clicking project cards
    for (const pg of PAGES.filter((p) => p.cardId)) {
      await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 });
      await waitForIdle(page, 1500);

      await forceAllVisible(page);

      const card = await page.$(`#${pg.cardId}`);
      if (card) {
        await card.scrollIntoView();
        await waitForIdle(page, 500);
        await card.click();
        await waitForIdle(page, 2500);

        pdfBuffers.push(await capturePage(page, pg.name, true));
      } else {
        console.log(`  ⚠ Card #${pg.cardId} not found, skipping ${pg.name}`);
      }
    }

    // 3) Merge all PDFs
    console.log('\nMerging PDFs...');
    const mergedPdf = await PDFDocument.create();

    for (const buf of pdfBuffers) {
      const doc = await PDFDocument.load(buf);
      const pages = await mergedPdf.copyPages(doc, doc.getPageIndices());
      pages.forEach((p) => mergedPdf.addPage(p));
    }

    const mergedBytes = await mergedPdf.save();
    await fs.writeFile(OUTPUT, mergedBytes);

    console.log(`\n✅ PDF saved: ${OUTPUT}`);
    console.log(`   Total pages: ${mergedPdf.getPageCount()}`);
    console.log(`   Size: ${(mergedBytes.length / 1024 / 1024).toFixed(1)} MB`);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
    devServer.kill();
  }
}

main();
