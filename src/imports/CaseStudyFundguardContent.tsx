import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Layers,
  Timer,
  GitBranch,
  AlertTriangle,
  Network,
  Eye,
  ShieldCheck,
  BrainCircuit,
  Target,
  BarChart3,
  Sparkles,
  Workflow,
  CheckCircle2,
  Quote,
  Lightbulb,
  GripVertical,
  ArrowDownRight,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgHeroDashboard from '@/assets/fg-hierarchy-view.png';
import imgTableBefore from '@/assets/fg-table-before.png';
import imgHierarchyCanvas from '@/assets/fg-hierarchy-canvas.png';
import imgFlow1 from '@/assets/fg-flow-1.png';
import imgFlow2 from '@/assets/fg-flow-2.png';
import imgFlow3 from '@/assets/fg-flow-3.png';
import imgFlow4 from '@/assets/fg-flow-4.png';
import imgFlow5 from '@/assets/fg-flow-5.png';


/* ── Scroll-triggered reveal ─────────────────────────────────── */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
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

/* ================================================================
   FUNDGUARD - "The Deep Enterprise"
   ──────────────────────────────────────────────────────────────
   Unique personality:
   · Left-aligned editorial pull-quotes
   · Serif blockquote Key Insight with accent border
   · Hypothesis-driven design framing
   · Vertical timeline approach
   · Canvas-based solution showcase
   · User quotes as editorial testimony
   · Outlined stat cards on white
   ================================================================ */
export default function CaseStudyFundguardContent({ onNextStudy }: { onNextStudy?: () => void }) {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: 'var(--text-tertiary)' }}
            >
              FundGuard
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Turning operational complexity into control
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="text-base md:text-lg font-light italic max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}
            >
              When experts need systems they can trust
            </p>
          </Reveal>

          {/* Metadata bar */}
          <Reveal delay={0.25}>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 pt-8 text-left"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              {[
                { label: 'Role', value: 'Head of Product Design' },
                { label: 'Team', value: 'PM · 6 Engineers · Data Science · Enterprise Operations' },
                { label: 'Scope', value: 'Core reconciliation & fund hierarchy workflows' },
                { label: 'Impact', value: '+30% automation adoption · 25% faster resolution · Reduced config errors' },
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

      {/* Hero image */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-4">
          <img src={imgHeroDashboard} alt="FundGuard reconciliation dashboard" className="w-full h-auto rounded-xl" loading="eager" decoding="async" />
        </div>
      </Reveal>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          CONTEXT - Editorial narrative with icon pills
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Context
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-8 text-center leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              Fund operations are living systems.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm md:text-base font-light leading-relaxed mb-10 text-center max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              They involve complex structures, time-based workflows, financial dependencies, and errors that silently propagate downstream. Yet the product represented this complexity through dense tables and fragmented dashboards.
            </p>
          </Reveal>

          {/* Complexity cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <Layers className="w-5 h-5" strokeWidth={1.4} />, label: 'Deep parent-child fund structures' },
              { icon: <Timer className="w-5 h-5" strokeWidth={1.4} />, label: 'Time-based workflows' },
              { icon: <GitBranch className="w-5 h-5" strokeWidth={1.4} />, label: 'Financial allocations & dependencies' },
              { icon: <AlertTriangle className="w-5 h-5" strokeWidth={1.4} />, label: 'Errors that propagate downstream' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="rounded-xl p-5 md:p-6 h-full flex flex-col items-center text-center gap-3"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-xs md:text-sm font-light leading-snug" style={{ color: 'var(--text-secondary)' }}>{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div
              className="pl-8 md:pl-12 max-w-2xl mx-auto"
              style={{ borderLeft: '3px solid var(--text-primary)' }}
            >
              <p
                className="text-lg md:text-xl font-normal italic leading-snug"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                Tables hide system logic.
              </p>
              <p className="mt-3 text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                Experts needed to reason about structure - not edit rows.
              </p>
            </div>
          </Reveal>

          {/* Annotated table screenshot from Figma */}
          <Reveal delay={0.3}>
            <div className="mt-14 mx-auto lg:w-[160%] lg:ml-[-30%]">
              <img
                src={imgTableBefore}
                alt="FundGuard legacy table - annotations showing high cognitive load, poor hierarchy visibility, scalability issues, and limited flexibility"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE CHALLENGE - Two-column editorial
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>
              The Challenge
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
            {/* Left - narrative */}
            <div className="md:col-span-3">
              <Reveal>
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-6 leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Enterprise users relied on manual reconciliation despite built-in automation.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-sm md:text-base font-light leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                  The system technically worked. But users did not trust it.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex flex-col gap-3">
                  {[
                    'AI outputs lacked transparency',
                    'Data density created cognitive overload',
                    'Fund relationships were abstract and row-based',
                    'System state was fragmented across screens',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                      <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right - key tension */}
            <div className="md:col-span-2">
              <Reveal delay={0.15}>
                <div
                  className="rounded-xl p-6 md:p-8"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>
                    Core tension
                  </p>
                  <p
                    className="text-lg md:text-xl font-medium leading-snug italic"
                    style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                  >
                    The problem wasn&rsquo;t functionality.
                  </p>
                  <p
                    className="text-lg md:text-xl font-medium leading-snug italic mt-2"
                    style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                  >
                    It was orientation and confidence.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          WHAT USERS TOLD US - Editorial testimony cards
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-10 text-center" style={{ color: 'var(--text-tertiary)' }}>
              What Users Told Us
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "I'm always worried that one wrong configuration will move funds incorrectly, and it's hard to trace mistakes after they happen.",
                role: 'Finance Manager',
              },
              {
                quote: "The system technically works, but everyday actions take too many steps.",
                role: 'Senior Accountant',
              },
              {
                quote: "Updating fund data feels risky - I only find errors after reports are generated.",
                role: 'Accountant',
              },
              {
                quote: "Managing multiple funds feels fragmented. I constantly jump between screens.",
                role: 'Operations Lead',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="rounded-xl p-6 md:p-8 h-full flex flex-col"
                  style={{ border: '1px solid var(--border-subtle)' }}
                >
                  <Quote className="w-5 h-5 mb-4 flex-shrink-0" strokeWidth={1.4} style={{ color: 'var(--text-tertiary)' }} />
                  <p
                    className="text-sm md:text-base font-light italic leading-relaxed flex-1"
                    style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="text-xs uppercase tracking-wider mt-5" style={{ color: 'var(--text-tertiary)' }}>
                    - {item.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Insight pull-quote */}
          <Reveal delay={0.35}>
            <div className="mt-12 text-center">
              <p
                className="text-base md:text-lg font-light italic max-w-xl mx-auto"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}
              >
                Experts don&rsquo;t need more power. They need clarity they can rely on.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          KEY INSIGHT - Serif blockquote with left accent border
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Key Insight
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="pl-8 md:pl-12"
              style={{ borderLeft: '3px solid var(--text-primary)' }}
            >
              <p
                className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.25] mb-3"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                Users manually verified automated results - even when accuracy was high.
              </p>
              <p
                className="text-lg md:text-xl font-normal leading-snug italic mt-4"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                Not because automation failed.
              </p>
              <p
                className="text-lg md:text-xl font-normal leading-snug italic"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                Because system logic was invisible.
              </p>
              <p className="mt-6 text-sm md:text-base font-light" style={{ color: 'var(--text-secondary)' }}>
                The core barrier was trust in system state.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HYPOTHESIS-DRIVEN DESIGN - Unique editorial framing
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-10 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Hypothesis-Driven Design
            </p>
          </Reveal>

          {/* Hypothesis 1 */}
          <Reveal delay={0.05}>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}
                >
                  H1
                </div>
                <p className="text-sm md:text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                  Users struggle to understand fund relationships when configuration is row-based.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
                {/* Problem */}
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Problem</p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      'Connections split across "Feeding To" and "Accepting From"',
                      'Relationships exist across multiple rows',
                      'Users must mentally reconstruct structure',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                        <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hypothesis */}
                <div
                  className="rounded-xl p-6"
                  style={{ border: '1px solid var(--border-subtle)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Hypothesis</p>
                  <p
                    className="text-sm md:text-base font-light italic leading-relaxed"
                    style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                  >
                    If fund relationships are visualized as a connected hierarchy instead of separated rows, users understand system structure faster and make fewer configuration mistakes.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Hypothesis 2 */}
          <Reveal delay={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}
                >
                  H2
                </div>
                <p className="text-sm md:text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                  Users lack confidence because they cannot validate full system state in one place.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
                {/* Problem */}
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Problem</p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      'Status, allocation %, class, and direction spread across inputs',
                      'No single source-of-truth view',
                      'Downstream impact unclear',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                        <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hypothesis */}
                <div
                  className="rounded-xl p-6"
                  style={{ border: '1px solid var(--border-subtle)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Hypothesis</p>
                  <p
                    className="text-sm md:text-base font-light italic leading-relaxed"
                    style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                  >
                    If users can see all funds, states, and allocations in one visual system map, they configure connections with higher confidence and fewer errors.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN PRINCIPLE - Centered editorial statement
          ═══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: 'var(--text-tertiary)' }}>
              Design Principle
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              Expose structure before interaction.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Network className="w-5 h-5" strokeWidth={1.4} />, label: 'Relationships are spatial, not abstract' },
              { icon: <Eye className="w-5 h-5" strokeWidth={1.4} />, label: 'Identity, type, and status visible immediately' },
              { icon: <Lightbulb className="w-5 h-5" strokeWidth={1.4} />, label: 'System logic visible before editing' },
              { icon: <GripVertical className="w-5 h-5" strokeWidth={1.4} />, label: 'Drag-and-drop mirrors mental models' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex flex-col items-center text-center gap-3 p-4">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-xs md:text-sm font-light leading-snug" style={{ color: 'var(--text-secondary)' }}>{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p
              className="text-base md:text-lg font-light italic"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}
            >
              The goal wasn&rsquo;t speed. It was confidence.
            </p>
          </Reveal>
        </div>

        {/* Hierarchy View - Canvas-Based */}
        <Reveal delay={0.35}>
          <div
            className="max-w-5xl mx-auto mt-16 rounded-2xl p-8 md:p-12"
            style={{ backgroundColor: 'var(--surface-secondary)' }}
          >
            <p className="text-sm md:text-base font-normal mb-1" style={{ color: 'var(--text-secondary)' }}>
              Hierarchy View (Canvas-Based)
            </p>
            <h3
              className="text-xl md:text-2xl font-semibold mb-4 leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              A visual, intuitive way to build fund hierarchies
            </h3>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              This new hierarchy view replaces the legacy table-based structure with a canvas-driven, drag-and-drop experience. Funds are represented as nodes, and their relationships are shown visually, making complex structures easy to understand and manage.
            </p>
            <div className="rounded-xl overflow-hidden">
              <img
                src={imgHierarchyCanvas}
                alt="Canvas-based fund hierarchy view - nodes represent funds, connections show allocations"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN FLOW - Annotated canvas walkthrough
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Design Flow
            </p>
            <p
              className="text-sm md:text-base font-light text-center mb-12"
              style={{ color: 'var(--text-secondary)' }}
            >
              Explore structure before interaction
            </p>
          </Reveal>

          <div className="flex flex-col gap-8">
            {[
              { src: imgFlow1, alt: 'Design flow - canvas hierarchy initial state' },
              { src: imgFlow2, alt: 'Design flow - configuring fund connections' },
              { src: imgFlow3, alt: 'Design flow - validating relationships and allocations' },
              { src: imgFlow4, alt: 'Design flow - system state overview' },
              { src: imgFlow5, alt: 'Design flow - final hierarchy with outcome' },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE SOLUTION - Vertical timeline with editorial framing
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>
              The Solution
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
              Four connected system improvements
            </h2>
          </Reveal>

          <div className="relative">
            {/* Connecting vertical line */}
            <div
              className="absolute left-[15px] md:left-[19px] top-4 bottom-4 w-px"
              style={{ backgroundColor: 'var(--border-subtle)' }}
            />

            {[
              {
                num: '01',
                title: 'Canvas-Based Fund Hierarchy',
                desc: 'A visual, drag-and-drop hierarchy replaced the legacy table structure. Funds represented as nodes, allocations displayed directly on connections, status visible at a glance.',
                cta: 'From editing rows → to understanding structure.',
              },
              {
                num: '02',
                title: 'Guided Reconciliation Workflow',
                desc: 'Replaced dashboard-heavy navigation with structured progression: clear checkpoints, visible state transitions, context-aware actions, reduced tab switching.',
                cta: null,
              },
              {
                num: '03',
                title: 'Intelligent Exception Handling',
                desc: 'Risk-based prioritization with financial impact surfaced first. Contextual resolution tools reduced cognitive overload.',
                cta: null,
              },
              {
                num: '04',
                title: 'Explainable AI',
                desc: 'Confidence indicators, traceable reasoning paths, audit trail visibility, and clear anomaly signals. Automation became inspectable - not opaque.',
                cta: null,
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-6 md:gap-8 mb-12 last:mb-0">
                  {/* Timeline node */}
                  <div
                    className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs md:text-sm font-semibold"
                    style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}
                  >
                    {step.num}
                  </div>
                  {/* Content */}
                  <div className="pt-0.5 flex-1">
                    <p className="text-base md:text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {step.title}
                    </p>
                    <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {step.desc}
                    </p>
                    {step.cta && (
                      <p
                        className="mt-3 text-sm font-light italic"
                        style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                      >
                        {step.cta}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          RESULTS - Outlined stat cards on white
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Results
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
              Measurable impact across the platform
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { metric: '+30%', desc: 'increase in automation adoption' },
              { metric: '25%', desc: 'faster exception resolution' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Reduction in reconciliation-related support tickets' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Fewer configuration errors' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Increased enterprise expansion into advanced modules' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="rounded-xl p-8 md:p-10 text-center h-full flex flex-col items-center justify-center"
                  style={{ border: '1px solid var(--border-subtle)' }}
                >
                  {item.metric ? (
                    <p className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                      {item.metric}
                    </p>
                  ) : (
                    <div className="mb-3" style={{ color: 'var(--text-tertiary)' }}>{item.icon}</div>
                  )}
                  <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Most importantly */}
          <Reveal delay={0.4}>
            <div
              className="pl-8 md:pl-12 max-w-2xl mx-auto"
              style={{ borderLeft: '3px solid var(--text-primary)' }}
            >
              <p
                className="text-base md:text-lg font-normal italic leading-relaxed"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                Most importantly: Users stopped manually validating every automated result.
              </p>
              <p
                className="text-base md:text-lg font-semibold mt-2"
                style={{ color: 'var(--text-primary)' }}
              >
                They trusted the system state.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLOSING - Dark band with subtle pattern
          ═══════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 text-white overflow-hidden"
        style={{ backgroundColor: 'var(--color-gray-900)' }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="flex justify-center mb-8">
              <div className="w-10 h-px bg-white/20" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.3] mb-2 text-white"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Enterprise UX succeeds when users stop fighting the interface
            </p>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.3] italic text-white/80"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              and start reasoning about the system.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex justify-center mt-10">
              <div className="w-10 h-px bg-white/20" />
            </div>
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
              monday.com
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </button>
        </div>
      </section>
    </div>
  );
}
