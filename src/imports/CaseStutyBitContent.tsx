/* ── Persona avatars ── */
import imgPersonaDani from 'figma:asset/1834af465fc6a1757c85adbed939b96d92d5b68e.png';
import imgPersonaAmit from 'figma:asset/462a3f7c752fa8795315a41818d0229186cdaead.png';
import imgPersonaShany from 'figma:asset/796ed3c17dc7adfedd3c0a8a6741bfae46dc9430.png';
import imgPersonaMicky from 'figma:asset/b979cabd30e9689f8d6286a99626df6bb7dd145c.png';
import imgScreenshot20260117At1652451 from 'figma:asset/e64a0ae7bc9796ddca28213c8a05731694f94819.png';
import imgBitmap1 from 'figma:asset/c3824c9df36afda5547813207b149b8b1f2c0248.png';
import imgBitmap2 from 'figma:asset/0548238f64a99fe660038d78665a891c1c8a0417.png';
import imgBitmap3 from 'figma:asset/51a18d2e75a4fe5fd22aa2d222679fcd88d11c6a.png';
import imgBitmap4 from 'figma:asset/80fd31eb4604684192b81bec32bafaa092c0e83e.png';
import imgBitmap5 from 'figma:asset/f322bc6139a79b875d3c0752bda13b57284d98aa.png';
import imgImage174 from 'figma:asset/9aa95d8eb0fd0ce4be192c55fe7cabe0274d4291.png';
import imgImage173 from 'figma:asset/7be02b18252a40ad2435780687ae53709599c1e2.png';
import imgImage172 from 'figma:asset/9bfc7cf59ce8da8ea8af1a307dd1b205b59fe454.png';
import imgScreenShot20200904At203224 from 'figma:asset/b24a6933276b23eb0257405e8532b066b7ce6c41.png';
import imgBitLogo1 from 'figma:asset/e81ee1f6e773b46358e217a1f5e22e680551ec1b.png';

import imgIterationProcess from '@/assets/iteration-process.png';
import imgBitmapError from 'figma:asset/d64d9e6af51f72d9f1297db95e44b0dda9243473.png';
import imgImage192 from 'figma:asset/8392e06806bcf1377ff0e200b52a3c374ccd9fe0.png';

import seamlessMotion1 from '@/assets/seamless-motion-1.mp4';
import seamlessMotion2 from '@/assets/seamless-motion-2.mp4';
import seamlessMotion3 from '@/assets/seamless-motion-3.mp4';
import seamlessMotion4 from '@/assets/seamless-motion-4.mp4';

import {
  Section,
  SectionTitle,
  InfoBoxGrid,
  PersonaCardGrid,
  InsightBlock,
  CaseStudyImage,
  QuoteBanner,
  ImageWithQuote,
  CaseStudyHero,
  CaseStudyBody,
  SkillCardGrid,
  ImageGrid,
  ImageCarousel,
  LazyVideo,
} from '@/app/components/case-study/CaseStudyPrimitives';

/* ── Bit Logo (image-based) ─────────────────────────────── */
function BitLogo() {
  return <img src={imgBitLogo1} alt="Bit" className="w-1/2 h-auto object-contain mx-auto" />;
}

/* ============================================================
   BIT CASE STUDY — Responsive Rewrite
   ============================================================ */
export default function CaseStutyBitContent() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <CaseStudyHero
        logo={<BitLogo />}
        title="Making money transfer feel effortless,"
        subtitle="when speed and trust are non-negotiable."
        heroImage={imgScreenShot20200904At203224}
        heroImageAlt="Bit app screens"
        heroImageClassName="w-full max-w-[1720px] flex items-center"
      />

      <CaseStudyBody>
      {/* ── 2. The Challenge ────────────────────────────── */}
      <Section>
        <SectionTitle title="The Challenge" className="!mb-5 md:!mb-7">
          <p>Sending money is a high-stress action:</p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Users fear mistakes',
            'Flows are legally and technically complex',
            'One wrong step = loss of trust',
          ]}
        />

        <p className="mt-[var(--space-8)] type-body">
          At the same time, Bit needed:
        </p>

        <div className="mt-[var(--space-4)]">
          <InfoBoxGrid
            items={[
              'Extreme simplicity to drive viral adoption',
              'Speed — transfers had to feel instant',
              'Low cognitive load for everyday use',
            ]}
          />
        </div>

        <p className="mt-[var(--space-10)] md:mt-[var(--space-14)] type-h2 font-[var(--weight-light)] text-text-primary">
          The challenge was to compress a complex financial transaction into a
          flow that feels obvious and safe.
        </p>

        <p className="mt-[var(--space-4)] type-body">
          Sending money is a high-stress action:
        </p>

        <div className="mt-[var(--space-4)]">
          <InfoBoxGrid
            items={[
              'Extreme simplicity to drive viral adoption',
              'Speed — transfers had to feel instant',
              'Low cognitive load for everyday use',
            ]}
          />
        </div>
      </Section>

      {/* ── 3. Personas ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="Reducing Friction Through Micro-Decisions" className="!mb-6 md:!mb-8">
          <p>Reading User Pain Points (Fast &amp; Continuously)</p>
          <p className="mt-2">
            Instead of over-researching upfront, I focused on rapid signal
            reading:
          </p>
        </SectionTitle>

        <PersonaCardGrid
          personas={[
            {
              name: 'Dani Danon',
              role: '',
              image: imgPersonaDani,
              quote:
                'I was always worried about making a mistake and sending money to the wrong place',
            },
            {
              name: 'Amit Sharon',
              role: '',
              image: imgPersonaAmit,
              quote:
                'Between passwords, codes, and approvals, the process was confusing.',
            },
            {
              name: 'Shany refael',
              role: '',
              image: imgPersonaShany,
              quote:
                "Transferring money wasn't convenient, so I usually avoided it unless I really had to",
            },
            {
              name: 'Micky din',
              role: '',
              image: imgPersonaMicky,
              quote:
                'I had to log in every time, and it felt like too many steps just to move money.',
            },
          ]}
        />
      </Section>

      {/* ── 4. Approach ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="How I Approached the Problem?" className="!mb-6 md:!mb-8">
          <p>Reading User Pain Points (Fast &amp; Continuously)</p>
          <p className="mt-2">
            Instead of over-researching upfront, I focused on rapid signal
            reading:
          </p>
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-3)] md:gap-[var(--space-4)] auto-rows-fr">
          {[
            'Where they abandon',
            'Where users hesitate',
            'Where they make errors',
            'Which steps trigger questions or support tickets',
          ].map((item, i) => (
            <div
              key={i}
              className="bg-surface-secondary px-[var(--card-px)] py-[var(--space-5)] md:px-[var(--card-px-md)] md:py-[var(--space-6)] flex items-center"
            >
              <p className="type-body-info">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[var(--space-8)]">
          <InsightBlock label="Key insight:">
            <p className="type-insight-title mb-[var(--space-4)]">
              Users don&rsquo;t think in &ldquo;financial steps&rdquo; - they
              think in people &rarr; amount &rarr; confirmation.
            </p>
            <p>This insight became the backbone of the flow.</p>
          </InsightBlock>
        </div>
      </Section>

      {/* ── 5. Making a Complex Flow Feel Simple ────────── */}
      <Section bg="bg-surface-secondary">
        <SectionTitle title="Making a Complex Flow Feel Simple">
          <p>Design Principle</p>
          <p>&ldquo;One decision per screen.&rdquo;</p>
          <p className="mt-2">
            I intentionally stripped each step down to a single mental action:
          </p>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-6)] md:gap-[var(--space-8)]">
          {/* Steps column */}
          <div className="flex flex-col gap-[var(--space-6)]">
            {/* Step 1 */}
            <div className="pb-[var(--space-6)] border-b border-[var(--border-subtle)]">
              <h4 className="type-h3 mb-[var(--space-2)]">
                1. Who am I paying?
              </h4>
              <p className="type-body-info">
                Choose the person you want to send money to. Double-check the name to avoid mistakes.
              </p>
            </div>
            {/* Step 2 */}
            <div className="pb-[var(--space-6)] border-b border-[var(--border-subtle)]">
              <h4 className="type-h3 mb-[var(--space-2)]">
                2. How much am I sending?
              </h4>
              <p className="type-body-info">
                Enter the amount you want to transfer. You&rsquo;ll see the total before it&rsquo;s sent.
              </p>
            </div>
            {/* Step 3 */}
            <div className="pb-[var(--space-6)] border-b border-[var(--border-subtle)]">
              <h4 className="type-h3 mb-[var(--space-2)]">
                3. Why (optional, social context)?
              </h4>
              <p className="type-body-info">
                Add a short note to explain the payment. It helps keep things clear and personal.
              </p>
            </div>
            {/* Step 4 */}
            <div>
              <h4 className="type-h3 mb-[var(--space-2)]">
                4. Confirm with full clarity
              </h4>
              <p className="type-body-info">
                Review the details one last time. When everything looks right, send with confidence.
              </p>
            </div>
          </div>

          {/* Sketch image */}
          <div className="bg-[var(--color-gray-400)] rounded-[var(--radius-2xl)] overflow-hidden">
            <img
              src={imgScreenshot20260117At1652451}
              alt="Flow sketch"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-[var(--space-8)] type-body">
          <p>
            Each screen removes noise and answers only the question users have
            at that moment.
          </p>
          <p className="mt-[var(--space-2)]">
            Lean design wasn&rsquo;t a style choice &mdash; it was a usability
            strategy.
          </p>
        </div>
      </Section>

      {/* ── 6. Iteration Process ────────────────────────── */}
      <Section>
        <InsightBlock label="Key insight:">
          <p className="type-insight-title mb-[var(--space-4)]">
            Lean design wasn&rsquo;t a style choice - it was a usability
            strategy.
          </p>
          <p>
            Speed mattered more than polish &mdash; decisions were made quickly,
            but never blindly.
          </p>
          <p>This insight became the backbone of the flow.</p>
        </InsightBlock>

        <div className="mt-[var(--space-8)]">
          <img
            src={imgIterationProcess}
            alt="Iteration process: Sketch, Test, Gather insights, Release"
            loading="lazy"
            decoding="async"
            className="w-[150%] max-w-none h-auto relative left-1/2 -translate-x-1/2"
          />
        </div>
      </Section>

      {/* ── 7. Error States ─────────────────────────────── */}
      <Section>
        <InsightBlock label="Key insight:">
          <p className="type-insight-title mb-[var(--space-4)]">
            Lean design wasn&rsquo;t a style choice - it was a usability
            strategy.
          </p>
          <p>This insight became the backbone of the flow.</p>
        </InsightBlock>
      </Section>

      {/* Phone mockups — slideshow carousel */}
      <div className="max-w-[var(--content-max-w)] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--space-12)] pb-[var(--space-12)] md:pb-[var(--space-16)]">
        <ImageCarousel
          images={[
            imgBitmap1,
            imgBitmap2,
            imgBitmapError,
            imgBitmap3,
            imgBitmap4,
            imgBitmap5,
          ]}
          alt="App screen mockup"
          autoPlayMs={4000}
        />
      </div>

      {/* ── 8. Intent → Selection ───────────────────────── */}
      <Section bg="bg-surface-secondary">
        <SectionTitle title="Intent → Selection">
          <p>
            The flow begins with transfer intent, then narrows focus to
            recipient selection, using progressive disclosure to maintain
            context and minimize cognitive load.
          </p>
        </SectionTitle>
      </Section>

      <div className="w-full bg-surface-secondary pb-[var(--space-12)] md:pb-[var(--space-16)]">
        <div className="max-w-[1331px] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--space-12)]">
          <div className="aspect-[4/3] flex items-center justify-center">
            <img src={imgImage172} alt="Intent to selection flow" loading="lazy" decoding="async" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>

      {/* ── 9. App Screenshots ──────────────────────────── */}
      <div className="w-full py-[var(--space-12)] md:py-[var(--space-16)]">
        <div className="max-w-[1331px] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--space-12)]">
          <div className="aspect-[4/3] flex items-center justify-center">
            <img src={imgImage173} alt="Bit app flow overview" loading="lazy" decoding="async" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>

      <div className="w-full bg-surface-secondary py-[var(--space-12)] md:py-[var(--space-16)]">
        <div className="max-w-[1331px] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--space-12)]">
          <div className="aspect-[4/3] flex items-center justify-center">
            <img src={imgImage174} alt="Bit app detailed screens" loading="lazy" decoding="async" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>

      {/* ── 10. Seamless Motion ─────────────────────────── */}
      <Section>
        <SectionTitle title="Seamless Motion">
          <p>
            The interaction begins with a subtle cue, guides the user through
            responsive animated transitions, and ends with clear feedback,
            creating a smooth, intuitive flow from start to finish.
          </p>
        </SectionTitle>
      </Section>

      <div className="max-w-[1331px] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--space-12)] pb-[var(--space-12)] md:pb-[var(--space-16)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[50px]">
          {[seamlessMotion1, seamlessMotion2, seamlessMotion3, seamlessMotion4].map((src, i) => (
            <div
              key={i}
              className="aspect-[223/493] overflow-hidden"
            >
              <LazyVideo
                src={src}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── 11. What This Case Demonstrates ─────────────── */}
      <Section>
        <SectionTitle title="What This Case Demonstrates About Me">
          <p>Reading User Pain Points (Fast &amp; Continuously)</p>
          <p className="mt-2">
            Instead of over-researching upfront, I focused on rapid signal
            reading:
          </p>
        </SectionTitle>

        <SkillCardGrid
          cards={[
            { label: 'First Take', title: 'I learn fast from real user behavior' },
            { label: 'First Take', title: 'I aggressively reduce friction' },
            { label: 'First Take', title: 'I design lean systems, not decorative screens' },
            {
              label: 'First Take',
              title: 'I simplify complex domains without dumbing them down',
            },
            {
              label: 'First Take',
              title: 'I test alternatives and move forward decisively',
            },
            { label: 'First Take', title: 'I make quick, confident decisions' },
          ]}
        />
      </Section>

      {/* ── 12. Outcome Quote ───────────────────────────── */}
      <QuoteBanner>
        BIT became the #1 tier-2 peer-to-peer payment app with 2 million users
        by focusing on simplicity. While competitors added complexity, I
        delivered a fast, intuitive transfer experience that drove adoption and
        everyday usage at scale.
      </QuoteBanner>

      {/* ── 13. Final Quote ─────────────────────────────── */}
      <ImageWithQuote
        src={imgImage192}
        alt="Bit closing"
        preQuote={`Great product design isn't about adding features — it's about removing everything users don't need. This project reinforced my belief that:`}
        quote='"The best financial UX feels invisible"'
      />
      </CaseStudyBody>
    </>
  );
}
