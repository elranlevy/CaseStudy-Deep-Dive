import { type ReactNode, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Banknote,
  Timer,
  Swords,
  CreditCard,
  Rocket,
  MessageCircle,
  RefreshCw,
  ScanLine,
  Users,
  MousePointerClick,
  Quote,
  CheckCircle2,
  Zap,
  Search,
  AlertTriangle,
  Eye,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgScreenShot20200904At203224 from 'figma:asset/b24a6933276b23eb0257405e8532b066b7ce6c41.png';
import imgBitmap1 from 'figma:asset/c3824c9df36afda5547813207b149b8b1f2c0248.png';
import imgBitmap2 from 'figma:asset/0548238f64a99fe660038d78665a891c1c8a0417.png';
import imgBitmap3 from 'figma:asset/51a18d2e75a4fe5fd22aa2d222679fcd88d11c6a.png';
import imgBitmap4 from 'figma:asset/80fd31eb4604684192b81bec32bafaa092c0e83e.png';
import imgImage174 from 'figma:asset/9aa95d8eb0fd0ce4be192c55fe7cabe0274d4291.png';
import imgImage173 from 'figma:asset/7be02b18252a40ad2435780687ae53709599c1e2.png';
import imgImage172 from 'figma:asset/9bfc7cf59ce8da8ea8af1a307dd1b205b59fe454.png';
import imgImage192 from 'figma:asset/8392e06806bcf1377ff0e200b52a3c374ccd9fe0.png';

import seamlessMotion1 from '@/assets/seamless-motion-1.mp4';
import seamlessMotion2 from '@/assets/seamless-motion-2.mp4';
import seamlessMotion3 from '@/assets/seamless-motion-3.mp4';
import seamlessMotion4 from '@/assets/seamless-motion-4.mp4';

import bitFlow1 from '@/assets/bit-flow-1.png';
import bitFlow2 from '@/assets/bit-flow-2.png';
import bitFlow3 from '@/assets/bit-flow-3.png';
import imgSketchFlow from '@/assets/bit-sketch-flow.png';
import imgGuerrillaSketch from '@/assets/bit-guerrilla-sketch.png';
import imgGuerrillaTest from '@/assets/bit-guerrilla-test.png';
import imgGuerrillaRelease from '@/assets/bit-guerrilla-release.png';
import imgFlowScreen1 from '@/assets/bit-flow-screen-1.png';
import imgFlowScreen2 from '@/assets/bit-flow-screen-2.png';
import imgFlowScreen3 from '@/assets/bit-flow-screen-3.png';
import imgFlowScreen4 from '@/assets/bit-flow-screen-4.png';
import imgFlowScreen5 from '@/assets/bit-flow-screen-5.png';
import imgFlowScreen6 from '@/assets/bit-flow-screen-6.png';
import imgAnnotatedFlow1 from '@/assets/bit-annotated-flow-1.png';
import imgAnnotatedFlow2 from '@/assets/bit-annotated-flow-2.png';
import imgAnnotatedFlow3 from '@/assets/bit-annotated-flow-3.png';

import { LazyVideo } from '@/app/components/case-study/CaseStudyPrimitives';

/* ── Scroll-triggered reveal ─────────────────────────────────── */
function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
}

/* ── Vertical divider ────────────────────────────────────────── */
function VerticalDivider() {
  return (
    <div className="flex justify-center py-8 md:py-10">
      <div className="w-px h-12 md:h-16" style={{ backgroundColor: 'var(--text-primary)' }} />
    </div>
  );
}

/* ── Mobile screen carousel ──────────────────────────────────── */
function MobileCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (idx: number, dir: number) => {
      setDirection(dir);
      setCurrent(idx);
    },
    [],
  );

  const next = useCallback(() => {
    goTo((current + 1) % images.length, 1);
  }, [current, images.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length, -1);
  }, [current, images.length, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % images.length, 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [current, images.length, goTo]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="relative mb-10">
      <div className="relative w-full max-w-xs mx-auto aspect-[208/440] overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Bit flow screen ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            loading="lazy"
            decoding="async"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
        style={{ backgroundColor: 'rgba(255,255,255,0.7)', color: 'var(--text-primary)' }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
        style={{ backgroundColor: 'rgba(255,255,255,0.7)', color: 'var(--text-primary)' }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
      </button>

      <div className="flex justify-center gap-2 mt-5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: i === current ? 'var(--text-primary)' : 'var(--border-subtle)',
              transform: i === current ? 'scale(1.3)' : 'scale(1)',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ================================================================
   BIT - "The Visual-Led Mobile"
   ──────────────────────────────────────────────────────────────
   Unique personality:
   · Dark gradient Key Insight (navy→slate)
   · Context as high-stress narrative with user quotes
   · Bold challenge framing
   · Vertical timeline approach with detailed descriptions
   · Seamless Motion as major visual moment
   · Design Philosophy section
   · Dark closing band with pattern
   ================================================================ */
export default function CaseStudyBitContent({ onNextStudy }: { onNextStudy?: () => void }) {
  return (
    <div style={{ backgroundColor: 'var(--surface-primary)' }}>
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-tertiary)' }}>Bit</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6" style={{ color: 'var(--text-primary)' }}>
              Designing consumer fintech at national scale
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base md:text-lg font-light italic max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              When speed and trust are non-negotiable
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 pt-8 text-left" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { label: 'Role', value: 'Senior UX Specialist' },
                { label: 'Team', value: 'PM · Engineering · Growth · Marketing' },
                { label: 'Scope', value: 'Core payment flows · Activation · Engagement' },
                { label: 'Scale', value: '#1 tier-2 P2P payment app · 2M+ users' },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>{m.label}</p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-4">
          <img src={imgScreenShot20200904At203224} alt="Bit app screens" className="w-full h-auto rounded-xl" loading="eager" decoding="async" />
        </div>
      </Reveal>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          CONTEXT - High-stress narrative with user quotes
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>Context</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center leading-snug" style={{ color: 'var(--text-primary)' }}>
              Bit operates at massive consumer scale.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-2 max-w-lg mx-auto text-center mb-10">
              {[
                'Small UX issues directly impact usage',
                'Friction reduces repeat behavior',
                'Confusion destroys trust instantly',
              ].map((line, i) => (
                <p key={i} className="text-sm md:text-base font-light" style={{ color: 'var(--text-secondary)' }}>{line}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="text-center mb-10">
              <p className="text-base md:text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                Sending money is not a neutral action.
              </p>
              <p className="text-lg md:text-xl font-normal italic mt-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                It is high-stress.
              </p>
            </div>
          </Reveal>

          {/* User quotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              "I was always worried about making a mistake and sending money to the wrong place.",
              "Between passwords, codes, and approvals, the process was confusing.",
              "Transferring money wasn't convenient, so I avoided it unless I had to.",
            ].map((quote, i) => (
              <Reveal key={i} delay={0.25 + i * 0.08}>
                <div className="rounded-xl p-5 md:p-6 h-full flex flex-col" style={{ border: '1px solid var(--border-subtle)' }}>
                  <Quote className="w-4 h-4 mb-3 flex-shrink-0" strokeWidth={1.4} style={{ color: 'var(--text-tertiary)' }} />
                  <p className="text-xs md:text-sm font-light italic leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="pl-8 md:pl-12 max-w-2xl mx-auto" style={{ borderLeft: '3px solid var(--text-primary)' }}>
              <p className="text-lg md:text-xl font-normal italic leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                Trust and speed weren&rsquo;t features.
              </p>
              <p className="mt-2 text-lg md:text-xl font-normal italic leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                They were survival conditions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE PROBLEM - Bold challenge framing
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>The Problem</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Bit needed:</p>
                <div className="flex flex-col gap-2.5 mb-8">
                  {[
                    'Extreme simplicity to drive viral adoption',
                    'Low cognitive load for everyday use',
                    'Transfers that feel instant',
                    'Zero tolerance for ambiguity',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                      <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.1}>
                <p className="text-xs uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--text-tertiary)' }}>But payment flows are:</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Legally complex', 'Technically constrained', 'High-risk', 'Emotionally sensitive'].map((item, i) => (
                    <span key={i} className="px-4 py-2 rounded-full text-xs md:text-sm font-light" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  One unclear state = loss of trust.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <p className="text-lg md:text-xl font-normal italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                Compress a complex financial transaction into a flow that feels obvious and safe.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          MY OWNERSHIP
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
              {[
                { icon: <CreditCard className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Payments' },
                { icon: <Rocket className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Activation' },
                { icon: <MessageCircle className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Clarity' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10" style={{ color: 'var(--text-primary)' }}>My Ownership</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 max-w-xl mx-auto">
              {[
                'Designed core transfer and payment flows',
                'Optimized activation and first-use experience',
                'Improved clarity around transaction states',
                'Partnered with Growth on engagement experiments',
                'Worked closely with Engineering on performance and edge cases',
                'Reduced friction through micro-decisions',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                  <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          MAKING A COMPLEX FLOW FEEL SIMPLE
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Making a Complex Flow Feel Simple
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Design Principle</p>
              <p className="text-sm md:text-base font-light italic mb-1" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                &ldquo;One decision per screen.&rdquo;
              </p>
              <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                I intentionally stripped each step down to a single mental action:
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Left - Steps */}
            <div className="flex flex-col gap-0">
              {[
                {
                  num: '1',
                  title: 'Who am I paying?',
                  desc: 'Choose the person you want to send money to. Double-check the name to avoid mistakes.',
                },
                {
                  num: '2',
                  title: 'How much am I sending?',
                  desc: 'Enter the amount you want to transfer. You\u2019ll see the total before it\u2019s sent.',
                },
                {
                  num: '3',
                  title: 'Why (optional, social context)?',
                  desc: 'Add a short note to explain the payment. It helps keep things clear and personal.',
                },
                {
                  num: '4',
                  title: 'Confirm with full clarity',
                  desc: 'Review the details one last time. When everything looks right, send with confidence.',
                },
              ].map((step, i, arr) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <div className="py-5" style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : undefined }}>
                    <p className="text-base md:text-lg font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                      {step.num}. {step.title}
                    </p>
                    <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right - Sketch flow image */}
            <Reveal delay={0.2}>
              <div className="flex items-center">
                <img
                  src={imgSketchFlow}
                  alt="Payment flow sketch - Select Person → Enter Total → Skip/Add Note → Send Now"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <p className="text-sm font-light mt-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Each screen removes noise and answers only the question users have at that moment.
              <br />
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                Lean design wasn&rsquo;t a style choice - it was a usability strategy.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          KEY INSIGHT - Dark gradient band
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-36 px-6 md:px-12"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-10" style={{ color: 'rgba(255,255,255,0.35)' }}>Key Insight</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base md:text-lg font-light mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Users don&rsquo;t think in &ldquo;financial steps.&rdquo; They think in:
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8">
              Person → Amount → Confirmation
            </p>
            <p className="text-sm font-light italic mb-10" style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.5)' }}>
              That insight became the backbone of the flow.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex justify-center mb-8">
              <div className="w-10 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-3">
              In payments, speed builds trust.
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight italic" style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.8)' }}>
              Uncertainty destroys it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE APPROACH - Vertical timeline
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>The Approach</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
              Four connected improvements
            </h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[15px] md:left-[19px] top-4 bottom-4 w-px" style={{ backgroundColor: 'var(--border-subtle)' }} />

            {[
              {
                num: '01',
                title: 'Reduce Cognitive Load in Transfer Flows',
                desc: 'One decision per screen. Instead of multi-field forms, I structured the flow around single mental actions: Who am I paying? How much? Why (optional)? Confirm with full clarity. Lean design wasn\'t a style choice - it was a usability strategy.',
              },
              {
                num: '02',
                title: 'Clarify Transaction States',
                desc: 'High-frequency payments require state transparency: clear loading indicators, explicit success confirmation, no ambiguous "pending" confusion, and visible feedback loops. We designed transaction clarity as a trust mechanism - not a UI detail.',
              },
              {
                num: '03',
                title: 'Improve First-Use Activation',
                desc: 'Instead of heavy onboarding: Intent → Selection → Completion. Progressive disclosure, context retention, and immediate reward after first transfer. Make the first successful transfer feel effortless - because first success drives repeat usage.',
              },
              {
                num: '04',
                title: 'Optimize Micro-Interactions',
                desc: 'Subtle animated transitions, responsive feedback, and visual continuity between steps. From first tap to final confirmation, the flow felt continuous - not fragmented. Speed mattered more than polish. Decisions were made quickly - but never blindly.',
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-6 md:gap-8" style={{ marginBottom: '16px' }}>
                  <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs md:text-sm font-semibold" style={{ backgroundColor: 'var(--step-circle-bg)', color: 'white' }}>
                    {step.num}
                  </div>
                  <div className="pt-0.5 flex-1">
                    <p className="text-base md:text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{step.title}</p>
                    <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN PHILOSOPHY - Rapid iteration cycle
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Design Philosophy in Action */}
          <div className="max-w-3xl mx-auto mb-12">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>Design Philosophy in Action</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm md:text-base font-light text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
                Instead of heavy upfront research, I focused on rapid signal reading:
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: <Eye className="w-5 h-5" strokeWidth={1.4} />, label: 'Where users hesitate' },
                  { icon: <AlertTriangle className="w-5 h-5" strokeWidth={1.4} />, label: 'Where errors occur' },
                  { icon: <MessageCircle className="w-5 h-5" strokeWidth={1.4} />, label: 'Where support spikes' },
                  { icon: <Search className="w-5 h-5" strokeWidth={1.4} />, label: 'Where abandonment happens' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-3 p-4 rounded-xl" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                    <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                    <p className="text-xs md:text-sm font-light leading-snug" style={{ color: 'var(--text-secondary)' }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="text-center">
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  Aggressively reduce friction. Simplify without dumbing down.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Process cycle label */}
          <Reveal delay={0.05}>
            <div className="hidden md:flex justify-center items-center gap-4 mb-8">
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
              <p className="text-lg font-light italic px-3" style={{ color: 'var(--text-tertiary)' }}>
                Sketch → test → iterate → release - repeat
              </p>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
            </div>
          </Reveal>

          {/* Process cycle: Sketch → Test → Release */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { img: imgGuerrillaSketch, step: '1', label: 'Sketch, Test', sub: '(Guerrilla Style)' },
              { img: imgGuerrillaTest, step: '2', label: 'Gather Insights', sub: 'Fix Issues' },
              { img: imgGuerrillaRelease, step: '3', label: 'Release Version', sub: '' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-full overflow-hidden rounded-xl mb-4 aspect-[9/16]" style={{ border: '1px solid var(--border-subtle)' }}>
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{ backgroundColor: 'var(--step-circle-bg)', color: 'white' }}>
                      {item.step}
                    </span>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                  </div>
                  {item.sub && (
                    <p className="text-xs font-light" style={{ color: 'var(--text-tertiary)' }}>{item.sub}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          PAYMENT FLOW SCREENS - Carousel
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="rounded-xl p-8 md:p-10 mb-12" style={{ backgroundColor: 'var(--surface-secondary)' }}>
              <p className="text-xs uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>Key insight:</p>
              <p className="text-xl md:text-2xl font-medium leading-snug mb-4" style={{ color: 'var(--text-primary)' }}>
                Lean design wasn&rsquo;t a style choice - it was a usability strategy.
              </p>
              <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                This insight became the backbone of the flow.
              </p>
            </div>
          </Reveal>

          <MobileCarousel images={[imgFlowScreen1, imgFlowScreen2, imgFlowScreen3, imgFlowScreen4, imgFlowScreen5, imgFlowScreen6]} />
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          ANNOTATED FLOW - Step-by-step breakdown
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>Flow Breakdown</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>
              Intent → Selection
            </h2>
            <p className="text-sm font-light text-center mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              The flow begins with transfer intent, then narrows focus to recipient selection, using progressive disclosure to maintain context and minimize cognitive load.
            </p>
          </Reveal>
        </div>
        <div className="max-w-6xl mx-auto space-y-5">
          <Reveal delay={0.1}>
            <img src={imgAnnotatedFlow1} alt="Intent → Selection: recipient and contact flow" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
          <Reveal delay={0.15}>
            <img src={imgAnnotatedFlow2} alt="Amount entry and transfer reason" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
          <Reveal delay={0.2}>
            <img src={imgAnnotatedFlow3} alt="Password confirmation and transfer summary" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          SEAMLESS MOTION - Elevated visual moment
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12" style={{ backgroundColor: 'var(--surface-secondary)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Micro-Interactions</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Seamless Motion</h2>
            <p className="text-sm md:text-base font-light mb-12 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Subtle animated transitions guide users through the payment flow, creating a smooth, intuitive experience from start to finish.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[seamlessMotion1, seamlessMotion2, seamlessMotion3, seamlessMotion4].map((src, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="overflow-hidden shadow-lg">
                  <LazyVideo src={src} className="w-full h-auto block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          RESULTS - Stat cards + editorial close
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>Results</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>Impact at national consumer scale</h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { metric: '2M+', desc: 'users on the #1 tier-2 P2P payment app' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Improved activation and repeat usage' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Reduced confusion around transaction status' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Increased clarity in high-frequency payment actions' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-xl p-8 md:p-10 text-center h-full flex flex-col items-center justify-center" style={{ border: '1px solid var(--border-subtle)' }}>
                  {item.metric ? (
                    <p className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{item.metric}</p>
                  ) : (
                    <div className="mb-3" style={{ color: 'var(--text-tertiary)' }}>{item.icon}</div>
                  )}
                  <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="pl-8 md:pl-12 max-w-2xl mx-auto" style={{ borderLeft: '3px solid var(--text-primary)' }}>
              <p className="text-sm font-light mb-1" style={{ color: 'var(--text-secondary)' }}>More importantly:</p>
              <p className="text-base md:text-lg font-normal italic leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                Transfers felt instant. Users stopped double-checking. Trust increased.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLOSING - Dark band with pattern
          ═══════════════════════════════════════════════════════ */}
      {/* OUTCOME heading - above dark band */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-tertiary)' }}>Outcome</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light mb-2" style={{ color: 'var(--text-secondary)' }}>Bit transformed money transfer from:</p>
            <p className="text-lg md:text-xl font-light mb-6" style={{ color: 'var(--text-secondary)' }}>
              A stressful financial action → A natural, everyday behavior
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex justify-center my-6">
              <div className="w-10 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 text-white overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl lg:text-3xl font-normal italic text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              Great product design isn&rsquo;t about adding features.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-normal italic text-white mt-5" style={{ fontFamily: 'var(--font-serif)' }}>
              It&rsquo;s about removing everything users don&rsquo;t need.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-40 pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div />
          <button onClick={onNextStudy} className="text-right group cursor-pointer">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Next Case Study</p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300" style={{ color: 'var(--text-primary)' }}>
              Bluevine <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </button>
        </div>
      </section>
    </div>
  );
}
