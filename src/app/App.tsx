import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import { FundguardCaseStudy } from '@/app/components/FundguardCaseStudy';
import { MondayCaseStudy } from '@/app/components/MondayCaseStudy';

type Page = 'home' | 'fundguard' | 'monday';

const BASE = import.meta.env.BASE_URL;

function pageFromPath(pathname: string): Page {
  const path = pathname.replace(BASE, '').replace(/^\/|\/$/g, '');
  if (path === 'fundguard') return 'fundguard';
  if (path === 'monday') return 'monday';
  return 'home';
}

export function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const [currentPage, setCurrentPage] = useState<Page>(() =>
    pageFromPath(window.location.pathname),
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: 'Elran Levy — Deep Dives',
      fundguard: 'FundGuard Deep Dive — Elran Levy',
      monday: 'Monday.com Deep Dive — Elran Levy',
    };
    const descriptions: Record<Page, string> = {
      home: 'Two in-depth case study deep dives: FundGuard and Monday.com.',
      fundguard:
        'A deep dive case study on FundGuard: context, decisions, and outcomes.',
      monday:
        'A deep dive case study on Monday.com: context, decisions, and outcomes.',
    };
    document.title = titles[currentPage];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', descriptions[currentPage]);
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    const url = page === 'home' ? BASE : `${BASE}${page}`;
    window.history.pushState({ page }, '', url);
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.history.replaceState(
      { page: currentPage },
      '',
      window.location.pathname,
    );
    const handlePopState = (event: PopStateEvent) => {
      setCurrentPage(
        event.state?.page ?? pageFromPath(window.location.pathname),
      );
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ================================================================
     HOME PAGE
     ================================================================ */
  const renderHomePage = () => (
    <>
      {/* Editorial Hero — left-aligned, tighter reading column */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-24 lg:pb-28 px-6 md:px-12 lg:px-16">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.25em] font-medium"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Elran Levy
          </p>
          <h1
            className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extralight leading-none"
            style={{
              color: 'var(--text-primary)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Deep Dives
          </h1>
          <p
            className="mt-6 text-base md:text-lg font-light leading-relaxed max-w-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Each case study breaks down context, constraints, key decisions,
            and measurable impact.
          </p>
          <p
            className="mt-4 text-[11px] font-light tracking-wide"
            style={{ color: 'var(--text-tertiary)', opacity: 0.7 }}
          >
            Last updated Feb 2026
          </p>
        </motion.div>
      </section>

      {/* Case Study Index */}
      <section className="pb-32 md:pb-44 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* FundGuard */}
          <motion.a
            href={`${BASE}fundguard`}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('fundguard');
            }}
            className="group block rounded-lg p-7 md:p-9 border transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm cursor-pointer"
            style={{ borderColor: 'var(--border-subtle)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.18em] font-medium"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Fintech&ensp;·&ensp;B2B&ensp;·&ensp;Platform
            </p>
            <h2
              className="mt-4 text-xl md:text-2xl font-extralight leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              FundGuard
            </h2>
            <p
              className="mt-2 text-sm font-light leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              A deep dive into problem framing, key decisions, and measurable
              outcomes.
            </p>
            <div className="mt-6">
              <span
                className="inline-flex items-center gap-2 text-[13px] font-medium group-hover:gap-3 transition-all duration-300"
                style={{ color: 'var(--text-primary)' }}
              >
                Read case study
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </motion.a>

          {/* Monday.com */}
          <motion.a
            href={`${BASE}monday`}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('monday');
            }}
            className="group block rounded-lg p-7 md:p-9 border transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm cursor-pointer"
            style={{ borderColor: 'var(--border-subtle)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.18em] font-medium"
              style={{ color: 'var(--text-tertiary)' }}
            >
              SaaS&ensp;·&ensp;UX Strategy&ensp;·&ensp;Execution
            </p>
            <h2
              className="mt-4 text-xl md:text-2xl font-extralight leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Monday.com
            </h2>
            <p
              className="mt-2 text-sm font-light leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              A deep dive into strategy, UX decisions, and execution details.
            </p>
            <div className="mt-6">
              <span
                className="inline-flex items-center gap-2 text-[13px] font-medium group-hover:gap-3 transition-all duration-300"
                style={{ color: 'var(--text-primary)' }}
              >
                Read case study
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="pt-6 md:pt-10 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 text-white"
        style={{ backgroundColor: 'var(--color-gray-900)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="mt-16 pt-8 flex items-center justify-center"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <p
              className="text-xs font-light"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Copyright 2025 © Elran Levy
            </p>
          </div>
        </div>
      </footer>
    </>
  );

  /* ================================================================
     PAGE ROUTER
     ================================================================ */
  const renderPageContent = () => {
    switch (currentPage) {
      case 'fundguard':
        return (
          <FundguardCaseStudy
            onBack={() => navigateTo('home')}
            onNext={() => navigateTo('monday')}
          />
        );
      case 'monday':
        return (
          <MondayCaseStudy
            onBack={() => navigateTo('home')}
            onNext={() => navigateTo('fundguard')}
          />
        );
      default:
        return renderHomePage();
    }
  };

  /* ================================================================
     RENDER
     ================================================================ */
  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: 'var(--surface-primary)' }}
    >
      {/* Minimal editorial header — home page only */}
      {currentPage === 'home' && (
        <motion.header
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md px-6 md:px-12 lg:px-16 transition-colors duration-300"
          style={{
            backgroundColor: darkMode
              ? 'rgba(15,20,25,0.9)'
              : 'rgba(255,255,255,0.9)',
            borderBottom: `1px solid ${darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="max-w-7xl mx-auto py-5 flex items-center justify-between">
            <button
              onClick={() => {
                navigateTo('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[13px] md:text-sm tracking-[0.25em] uppercase font-light"
              style={{ color: 'var(--text-primary)' }}
            >
              elran levy
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:opacity-50 transition-opacity duration-300"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4" strokeWidth={1.5} />
              ) : (
                <Moon className="w-4 h-4" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </motion.header>
      )}

      {renderPageContent()}
    </div>
  );
}
