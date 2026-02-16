import { type ReactNode, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  DollarSign,
  Users,
  ShieldCheck,
  BarChart3,
  Brain,
  FlaskConical,
  Layers,
  Target,
  TrendingUp,
  Quote,
  CheckCircle2,
  Zap,
  Eye,
  Workflow,
  LayoutDashboard,
  CreditCard,
  Clock,
  Activity,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgHero from 'figma:asset/88da6de6a1b666a471ee6930a733125a1b7e710e.png';
import imgImage184 from 'figma:asset/07a42507cb22cafb6d39b51c9254b4d2088abbb3.png';
import imgImage185 from 'figma:asset/0951004d47003d3e5824dd6b6ee4a2a692f1c14f.png';
import imgImage186 from 'figma:asset/37c8c497c64b1de3f237409d508123bfd7436060.png';
import imgImage187 from 'figma:asset/f3148055a59a7b55f2acac8549dd0c0e7c37cac9.png';
import imgDash216 from 'figma:asset/13fc9b9e5c9377cfe6a401b34f701652c82b98ec.png';
import imgDash217 from 'figma:asset/28aa4fa845afbbe3f48e5a21092fd68ea973afb8.png';
import imgDash218 from 'figma:asset/7a6b7e244b5fadc023b3ea45934532d38efdffb1.png';
import imgDash219 from 'figma:asset/f0d3902cc9f674d2fe46bfca159e4323568fd012.png';
import imgImage194 from 'figma:asset/3fa38104c924f2cbe993eee7323661a3891a0092.png';

import imgNative1 from '@/assets/bv-native-1.png';
import imgNative2 from '@/assets/bv-native-2.png';
import imgNative3 from '@/assets/bv-native-3.png';
import imgNative4 from '@/assets/bv-native-4.png';
import imgNative5 from '@/assets/bv-native-5.png';
import imgNative6 from '@/assets/bv-native-6.png';
import imgNative7 from '@/assets/bv-native-7.png';

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

/* ── Onboarding carousel ─────────────────────────────────────── */
function OnboardingCarousel({ images, variant = 'mobile' }: { images: string[]; variant?: 'mobile' | 'desktop' }) {
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

  // Auto-play every 4 seconds
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
      {/* Image container - fixed aspect ratio so all images are the same size */}
      <div className={`relative w-full mx-auto overflow-hidden rounded-xl ${variant === 'desktop' ? 'max-w-4xl aspect-[16/10]' : 'max-w-md aspect-[3/5]'}`}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Onboarding step ${current + 1}`}
            className="absolute inset-0 w-full h-full object-contain rounded-xl"
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

      {/* Chevron buttons */}
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

      {/* Dots */}
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

/* ── Dashboard carousel (landscape) ──────────────────────────── */
function DashboardCarousel({ images }: { images: string[] }) {
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

  // Auto-play every 4 seconds
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
      {/* Image container - fixed aspect ratio for consistent sizing */}
      <div className="relative w-full aspect-[16/11] overflow-hidden rounded-xl">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Dashboard view ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
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

      {/* Chevron buttons */}
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

      {/* Dots */}
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
   BLUEVINE - "The SMB Journey"
   ──────────────────────────────────────────────────────────────
   Unique personality:
   · Soft blue accent (#eef2ff / #4f46e5)
   · Context as risk narrative with user quotes
   · Problem as icon-labeled cards
   · Research insights as pill list
   · Approach as vertical timeline with detailed descriptions
   · Dashboard as command center showcase
   · Dark closing band with pattern
   ================================================================ */
export default function CaseStudyBluevineContent({ onNextStudy }: { onNextStudy?: () => void }) {
  return (
    <div style={{ backgroundColor: 'var(--surface-primary)' }}>
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-tertiary)' }}>BlueVine</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6" style={{ color: 'var(--text-primary)' }}>
              Driving monetization and activation in SMB fintech
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base md:text-lg font-light italic max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              Turning complex financial decisions into confident actions
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 pt-8 text-left" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { label: 'Role', value: 'Senior Product Designer' },
                { label: 'Team', value: 'PM · Engineering · Data' },
                { label: 'Scope', value: 'Registration, onboarding, plan selection, upgrade flows' },
                { label: 'Impact', value: '+7% reg-to-plan conversion · Increased activation · Reduced hesitation' },
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
        <div className="max-w-3xl mx-auto px-6 md:px-12 pb-4">
          <img src={imgHero} alt="BlueVine banking experience" className="w-full h-auto rounded-xl" loading="eager" decoding="async" />
        </div>
      </Reveal>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          CONTEXT - Risk narrative with user quotes
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Context
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center leading-snug" style={{ color: 'var(--text-primary)' }}>
              Small businesses don&rsquo;t experience banking as a feature set.
            </h2>
            <p className="text-lg md:text-xl font-normal italic text-center mb-10" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              They experience it as risk.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['Payroll', 'Suppliers', 'Inventory', 'Credit'].map((item, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full text-sm font-light" style={{ border: '1px solid #c7d2fe', color: 'var(--text-primary)' }}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-sm md:text-base font-light text-center mb-10" style={{ color: 'var(--text-secondary)' }}>
              Every financial action carries weight.
            </p>
          </Reveal>

          {/* User quotes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { quote: "Running payroll, paying suppliers, and managing cash flow felt like guessing.", role: null },
              { quote: "I wasn't looking for loans all the time - I wanted confidence.", role: null },
            ].map((item, i) => (
              <Reveal key={i} delay={0.25 + i * 0.08}>
                <div className="rounded-xl p-6 md:p-8 h-full flex flex-col" style={{ border: '1px solid var(--border-subtle)' }}>
                  <Quote className="w-5 h-5 mb-4 flex-shrink-0" strokeWidth={1.4} style={{ color: 'var(--text-tertiary)' }} />
                  <p className="text-sm md:text-base font-light italic leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="pl-8 md:pl-12 max-w-2xl mx-auto" style={{ borderLeft: '3px solid #4f46e5' }}>
              <p className="text-lg md:text-xl font-normal italic leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                The opportunity wasn&rsquo;t just monetization.
              </p>
              <p className="mt-2 text-lg md:text-xl font-normal italic leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                It was decision confidence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE PROBLEM - Cards + research insights
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>The Problem</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
              SMB users hesitated to upgrade due to unclear value differentiation.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light text-center mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Plans and features blurred together - especially for non-financial users.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-14">
            {[
              { icon: <DollarSign className="w-6 h-6" strokeWidth={1.3} />, label: 'Financial product complexity' },
              { icon: <Users className="w-6 h-6" strokeWidth={1.3} />, label: 'One-size messaging across personas' },
              { icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.3} />, label: 'High sensitivity around money' },
              { icon: <Workflow className="w-6 h-6" strokeWidth={1.3} />, label: 'Friction-heavy onboarding' },
              { icon: <Eye className="w-6 h-6" strokeWidth={1.3} />, label: 'Lack of predictable outcomes' },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="p-5 rounded-xl h-full flex flex-col items-center text-center gap-3" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <div style={{ color: 'var(--text-primary)' }}>{card.icon}</div>
                  <p className="text-xs md:text-sm font-light leading-snug" style={{ color: 'var(--text-secondary)' }}>{card.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Research insights */}
          <Reveal delay={0.3}>
            <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#eef2ff' }}>
              <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: '#6366f1' }}>Research Insights</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  'Speed equals survival',
                  'Uncertainty is more stressful than cost',
                  'Business context is missing',
                  'Decision confidence is a product feature',
                  'Owners want control, not more banking',
                ].map((item, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-light" style={{ border: '1px solid #c7d2fe', color: 'var(--text-primary)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 pl-8 md:pl-12 max-w-2xl mx-auto" style={{ borderLeft: '3px solid var(--text-primary)' }}>
              <p className="text-base md:text-lg font-normal italic leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                The hesitation wasn&rsquo;t about price.
              </p>
              <p className="mt-2 text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                It was about clarity before commitment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          MAIN INSIGHT - Soft blue-tinted band
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: '#eef2ff' }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: '#6366f1' }}>Main Insight</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3" style={{ color: 'var(--text-primary)' }}>
              Financial users require clarity
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              before commitment.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-sm md:text-base font-light" style={{ color: 'var(--text-secondary)' }}>
              Uncertainty blocks action.
            </p>
            <p className="mt-4 text-base md:text-lg font-light italic max-w-xl mx-auto" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              When users clearly understand what will happen next: they move faster, decide better, and rely on the product more.
            </p>
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
                { icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Monetization' },
                { icon: <Brain className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Decision Logic' },
                { icon: <FlaskConical className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Experiments' },
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
                'Led monetization and upgrade flow redesign',
                'Designed decision-based plan logic',
                'Partnered with Data for behavioral insights',
                'Translated SMB usage patterns into guided recommendations',
                'Operated within an experiment-driven squad',
                'Extended experience into onboarding and dashboard clarity',
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
          THE CHALLENGE - Editorial framing
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: 'var(--text-tertiary)' }}>The Challenge</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Designing lending and banking for BlueVine meant:
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <p className="text-base md:text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                Removing complexity from financially sensitive moments
              </p>
              <p className="text-base md:text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                Replacing uncertainty with clarity, speed, and predictability
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl font-normal italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              How do we make high-risk financial decisions feel controlled and safe?
            </p>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

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
                title: 'Simplify Plan Differentiation',
                desc: 'Instead of feature-heavy comparisons, we reframed plans around business size, cash flow patterns, credit usage behavior, and growth stage. Plans were translated into business outcomes - not financial jargon.',
              },
              {
                num: '02',
                title: 'Add Contextual Guidance During Selection',
                desc: 'We introduced decision-based logic: plan recommendations tied to user behavior, clear explanation of what changes after upgrade, and transparent benefits and limitations. Financial commitment became predictable - not abstract.',
              },
              {
                num: '03',
                title: 'Clarify Benefits Tied to Real Behavior',
                desc: 'Rather than listing "Advanced analytics" or "Credit flexibility", we showed: faster access to working capital, real-time cash visibility, reduced payment delays, and clear approval expectations.',
              },
              {
                num: '04',
                title: 'Reduce Onboarding Friction',
                desc: 'Financial onboarding often feels heavy and intimidating. We redesigned it to feel step-based and guided, with minimal manual input, transparent status, and fast completion (minutes, not days). Clarity replaced guesswork.',
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

          <Reveal delay={0.4}>
            <div className="mt-8 text-center">
              <p className="text-sm font-light italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
                Decision confidence is as important as approval itself.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          ONBOARDING JOURNEY
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.2em] mb-6 text-center" style={{ color: 'var(--text-tertiary)' }}>Onboarding Journey</p>
          </Reveal>
          <OnboardingCarousel images={[imgImage184, imgImage185, imgImage186, imgImage187]} variant="desktop" />
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          FROM ONBOARDING TO CONTROL - Dashboard showcase
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>From Onboarding to Control</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: 'var(--text-primary)' }}>
              The business&rsquo;s financial command center
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                'Immediate cash visibility',
                'Simple payment flows',
                'Credit access transparency',
                'Real-time analytics',
                'Clear action pathways',
              ].map((item, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full text-xs font-light" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm font-light italic text-center mb-10" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              Instead of navigating banking tools, users managed outcomes.
            </p>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto">
          <DashboardCarousel images={[imgDash216, imgDash217, imgDash218, imgDash219]} />
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          NATIVE EXPERIENCE - Mobile app carousel
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Native Experience</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Extending Full Control Into a Native Experience
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
              Designing a native mobile app to give business owners full financial control from anywhere. The experience allows users to manage cards, make payments, access credit, and deposit checks through a financial-grade mobile interface - turning banking from a place you go into a tool that moves with your business.
            </p>
          </Reveal>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
          {[imgNative3, imgNative1, imgNative2, imgNative4, imgNative5, imgNative6, imgNative7].map((src, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <img src={src} alt={`Native app screen ${i + 1}`} className="w-full h-auto rounded-xl" style={{ border: '8px solid #f5f5f5' }} loading="lazy" decoding="async" />
            </Reveal>
          ))}
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          EXPERIMENTATION & VALIDATION
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: 'var(--text-tertiary)' }}>Experimentation &amp; Validation</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Operating inside a growth squad, we:
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-3 max-w-md mx-auto text-left">
              {[
                'Tested simplified plan messaging',
                'Validated decision-based logic',
                'Reduced hesitation points',
                'Measured upgrade friction',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: '#4f46e5' }} />
                  <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 text-sm font-light italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              The improved experience drove measurable product adoption and engagement.
            </p>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          RESULTS - Bordered metric cards
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>Results</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
              Measurable impact on monetization
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { metric: '+7%', desc: 'improvement in registration-to-plan conversion' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Increased product adoption and engagement' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Reduced hesitation during plan selection' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Improved upgrade clarity' },
              { metric: null, icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Shift from reactive banking → proactive financial control' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-xl p-8 md:p-10 text-center h-full flex flex-col items-center justify-center" style={{ border: '1px solid #c7d2fe' }}>
                  {item.metric ? (
                    <p className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3" style={{ color: '#4f46e5' }}>{item.metric}</p>
                  ) : (
                    <div className="mb-3" style={{ color: '#4f46e5' }}>{item.icon}</div>
                  )}
                  <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="pl-8 md:pl-12 max-w-2xl mx-auto" style={{ borderLeft: '3px solid #4f46e5' }}>
              <p className="text-base md:text-lg font-normal italic leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                The product shifted from a functional tool to a daily business essential.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLOSING - Dark band with pattern
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 text-white overflow-hidden" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 text-white/40">Outcome</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light text-white/70 mb-2">BlueVine transformed from:</p>
            <p className="text-lg md:text-xl font-light text-white/70 mb-1">A financial service</p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              → A confidence engine for small businesses
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex justify-center my-6">
              <div className="w-10 h-px bg-white/20" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg font-light text-white/70">
              When users clearly understand what will happen next,
            </p>
            <p className="text-lg md:text-xl font-normal italic mt-2 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              they move faster, decide better, and rely on the product more.
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
              Xtream IO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </button>
        </div>
      </section>
    </div>
  );
}
