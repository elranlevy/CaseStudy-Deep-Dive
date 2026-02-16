import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  LayoutGrid,
  Users,
  Zap,
  BarChart3,
  Brain,
  FlaskConical,
  Layers,
  SlidersHorizontal,
  Target,
  Repeat,
  Eye,
  Lightbulb,
  MessageSquare,
  TrendingUp,
  Quote,
  CheckCircle2,
  Sparkles,
  Lock,
  ArrowDownRight,
  Shield,
} from 'lucide-react';

import svgPaths from './svg-6er71w85ab';

/* ── Existing images ─────────────────────────────────────────── */
import imgBoardWithCactusAndPhone from 'figma:asset/1283a766b980685a64313cdeb5ba880f6d1b751a.png';
import imgImage195 from 'figma:asset/135037eee94c070be011542ce34df21d09e0887c.png';
import imgImage196 from 'figma:asset/d2bbf953c2e0dff1f47983ab05675e22222adadc.png';
import imgStep4 from 'figma:asset/e528a6e576ff61dfdedceda779b402b8cad6f7a3.png';
import imgImage190 from 'figma:asset/5f1af89856aef65d1b868e8219fddf2446fec50b.png';
import imgImage189 from 'figma:asset/e2ace24a2f436bfdff66fee0efc67986b23bea69.png';
import imgImage193 from 'figma:asset/daf1651f8cbfbc84a76190121c487237936e8e2c.png';
import imgDiscovery212 from 'figma:asset/5891221db0f506e2ed13854c9b561b0eb94c1c45.png';
import imgDiscovery213 from 'figma:asset/46afff3de4b74b1fcd9fb6e6c6e34dc0511a1347.png';
import imgPromoted214 from 'figma:asset/2abdc6c0f0e1dc734eb659df7608c23f65d0828f.png';
import imgPromoted215 from 'figma:asset/590fcf0486ea5c0624f74a9ad643a26091276ee4.png';
import imgAbChart from '@/assets/monday-ab-chart.png';
import imgDiscoveryValue1 from '@/assets/monday-discovery-value-1.png';
import imgDiscoveryValue2 from '@/assets/monday-discovery-value-2.png';
import imgPromotedMatch1 from '@/assets/monday-promoted-match-1.png';
import imgPromotedMatch2 from '@/assets/monday-promoted-match-2.png';
import whyStandardVideo from '@/assets/why-standard-video.mp4';
import whyProVideo from '@/assets/why-pro-video.mp4';

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

/* ── Lazy video ──────────────────────────────────────────────── */
function LazyVideo({ src, className = '' }: { src: string; className?: string }) {
  return <video src={src} autoPlay loop muted playsInline preload="metadata" className={className} />;
}

/* ── monday.com Logo (SVG) ───────────────────────────────────── */
function MondayLogo() {
  return (
    <svg className="w-full max-w-[180px] h-auto mx-auto" fill="none" viewBox="0 0 335.374 69.7297">
      <path d={svgPaths.p3fb55a00} fill="#FB275D" />
      <path d={svgPaths.p2c590700} fill="#FFCC00" />
      <path d={svgPaths.pfa68400} fill="#00CA72" />
      <path clipRule="evenodd" d={svgPaths.p26892b00} fill="black" fillRule="evenodd" />
    </svg>
  );
}

/* ================================================================
   MONDAY.COM - "The Growth Experiment"
   ──────────────────────────────────────────────────────────────
   Unique personality:
   · Warm cream Key Insight band
   · Hypothesis-driven design framing (3 hypotheses)
   · A/B Test section as the visual star
   · Feature Discovery as contextual value
   · Horizontal metric strip results
   · Dark closing band with pattern
   ================================================================ */
export default function CaseStudyMondayContent({ onNextStudy }: { onNextStudy?: () => void }) {
  return (
    <div style={{ backgroundColor: 'var(--surface-primary)' }}>
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] mb-6" style={{ color: 'var(--text-tertiary)' }}>monday.com</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6" style={{ color: 'var(--text-primary)' }}>
              Optimizing monetization and plan selection at scale
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base md:text-lg font-light italic max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              Designing confidence at the moment of commitment
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 pt-8 text-left" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { label: 'Role', value: 'Senior Product Designer' },
                { label: 'Team', value: 'Growth Squad (PM · Engineering · Data)' },
                { label: 'Scope', value: 'Registration, upgrade, plan selection' },
                { label: 'Impact', value: '+7% reg-to-plan conversion · 35% Pro uplift' },
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
          <img src={imgBoardWithCactusAndPhone} alt="monday.com board with phone" className="w-full h-auto rounded-xl" loading="eager" decoding="async" />
        </div>
      </Reveal>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          CONTEXT - Editorial narrative
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Context
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center leading-snug" style={{ color: 'var(--text-primary)' }}>
              Millions of users completed the trial.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-2 max-w-lg mx-auto text-center mb-10">
              {['Engagement was strong.', 'Usage was high.', 'But when the trial ended, conversion dropped sharply.'].map((line, i) => (
                <p key={i} className={`text-sm md:text-base font-light leading-relaxed ${i === 2 ? 'mt-2 font-medium' : ''}`} style={{ color: i === 2 ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                  {line}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                The pricing table was clear. The plans were defined. Yet users hesitated.
              </p>
            </div>
          </Reveal>

          {/* User quote */}
          <Reveal delay={0.25}>
            <div
              className="rounded-xl p-6 md:p-8 max-w-2xl mx-auto mb-10"
              style={{ border: '1px solid var(--border-subtle)' }}
            >
              <Quote className="w-5 h-5 mb-4" strokeWidth={1.4} style={{ color: 'var(--text-tertiary)' }} />
              <p
                className="text-sm md:text-base font-light italic leading-relaxed"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                &ldquo;Each plan supports a different workflow, but comparing them felt overwhelming. I was afraid of choosing the wrong tier.&rdquo;
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div
              className="pl-8 md:pl-12 max-w-2xl mx-auto"
              style={{ borderLeft: '3px solid var(--text-primary)' }}
            >
              <p
                className="text-lg md:text-xl font-normal italic leading-snug"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                This wasn&rsquo;t pricing sensitivity.
              </p>
              <p className="mt-2 text-lg md:text-xl font-normal italic leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                It was decision anxiety.
              </p>
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
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug" style={{ color: 'var(--text-primary)' }}>
                  The end of a free trial is not neutral.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-sm md:text-base font-light leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                  It is a moment of commitment under uncertainty.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-xs uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-tertiary)' }}>What we observed:</p>
                <div className="flex flex-col gap-2.5">
                  {[
                    'Sharp drop-off at plan selection',
                    'Repeated hesitation between Standard and Pro',
                    'Users leaving instead of choosing "wrong"',
                    'High engagement during trial, low confidence at upgrade',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                      <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-tertiary)' }}>Users weren&rsquo;t asking:</p>
                  <p className="text-sm md:text-base font-light italic mb-4" style={{ color: 'var(--text-secondary)' }}>
                    &ldquo;Is this worth the money?&rdquo;
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-tertiary)' }}>They were asking:</p>
                  <div className="flex flex-col gap-2">
                    {[
                      'Which plan fits how we actually work?',
                      'Am I locking us into the wrong choice?',
                      'What if we outgrow this next month?',
                    ].map((q, i) => (
                      <p key={i} className="text-sm font-light italic" style={{ color: 'var(--text-primary)' }}>{q}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right - key tension */}
            <div className="md:col-span-2">
              <Reveal delay={0.15}>
                <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>
                    Key insight
                  </p>
                  <p className="text-lg md:text-xl font-medium leading-snug italic mb-3" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                    Abandonment wasn&rsquo;t rejection - it was avoidance.
                  </p>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    When the perceived cost of a wrong decision felt higher than the value of continuing, users left.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          MY OWNERSHIP - Compact icon + list
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
              {[
                { icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Monetization' },
                { icon: <Brain className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Recommendation' },
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
                'Led end-to-end design of upgrade and monetization flows',
                'Designed logic-driven plan recommendation system',
                'Partnered with Data on behavioral segmentation',
                'Translated usage patterns into recommendation signals',
                'Ran controlled A/B experiments within the growth squad',
                'Designed contextual feature promotion surfaces',
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
          CORE INSIGHT - Warm cream band
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: 'var(--insight-bg)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: 'var(--text-tertiary)' }}>Core Insight</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3" style={{ color: 'var(--text-primary)' }}>
              Users didn&rsquo;t struggle with pricing.
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              They struggled with choosing the right plan.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-base md:text-lg font-light italic max-w-xl mx-auto" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              Good monetization UX doesn&rsquo;t push users to pay. It removes the fear of saying yes.
            </p>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          HYPOTHESIS-DRIVEN DESIGN - 3 Hypotheses
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
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0" style={{ backgroundColor: 'var(--step-circle-bg)', color: 'white' }}>
                  H1
                </div>
                <p className="text-sm md:text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                  If users see a plan recommendation based on their own activity, they feel more confident selecting a plan.
                </p>
              </div>
              <div className="ml-0 md:ml-11">
                <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    Instead of forcing self-diagnosis, we analyzed trial usage and surfaced: &ldquo;Recommended for you - based on your activity.&rdquo;
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      'Anchors decision in personal data',
                      'Reduces cognitive load',
                      'Shifts product from seller → advisor',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                        <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Hypothesis 2 */}
          <Reveal delay={0.1}>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0" style={{ backgroundColor: 'var(--step-circle-bg)', color: 'white' }}>
                  H2
                </div>
                <p className="text-sm md:text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                  If users can visually compare how their usage maps to each plan, they better understand value differences.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
                <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--text-tertiary)' }}>We introduced</p>
                  <div className="flex flex-col gap-2">
                    {[
                      'Usage breakdown (Boards, Views, Dashboards, Workload)',
                      'Color-coded alignment indicators',
                      'Clear visibility of plan gaps',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                        <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl p-6" style={{ border: '1px solid var(--border-subtle)' }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--text-tertiary)' }}>Result</p>
                  <p className="text-sm md:text-base font-light italic leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                    Fewer accidental under-selections and reduced downgrade regret.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Hypothesis 3 */}
          <Reveal delay={0.15}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0" style={{ backgroundColor: 'var(--step-circle-bg)', color: 'white' }}>
                  H3
                </div>
                <p className="text-sm md:text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                  If recommended plans highlight outcomes - not just features - users perceive higher value and convert faster.
                </p>
              </div>
              <div className="ml-0 md:ml-11">
                <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--text-tertiary)' }}>Instead of listing features, we framed benefits</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {['Team visibility', 'Capacity planning', 'Workflow scalability'].map((item, i) => (
                      <span key={i} className="px-4 py-2 rounded-full text-xs md:text-sm font-light" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-light italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
                    Upgrade felt like continuation - not escalation.
                  </p>
                </div>
              </div>
            </div>
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
                title: 'Reframe Plan Comparison',
                desc: 'Shift from abstract feature tables to use-case-driven clarity: how your team actually works.',
              },
              {
                num: '02',
                title: 'Personalized Plan Recommendations',
                desc: 'A logic-driven system analyzed real usage signals and surfaced recommended tier, usage justification, and visible alignment gaps. Decision support replaced guesswork.',
              },
              {
                num: '03',
                title: 'Simplify the Commitment Moment',
                desc: 'Reduced redundant comparison loops, overwhelming feature density, and clarified reversibility. Lower the risk of choosing - not the price.',
              },
              {
                num: '04',
                title: 'A/B Testing Value Framing',
                desc: 'Tested two upgrade experiences to validate that evidence-based messaging outperforms generic copy.',
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
          A/B TEST - The star of this study
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
              {[
                { icon: <Eye className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Variant A' },
                { icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Variant B' },
                { icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.3} />, label: 'Validation' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: 'var(--text-primary)' }}>A/B Test: Pro Recommendation</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm md:text-base font-light text-center mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We tested two upgrade experiences to validate evidence-based messaging.
            </p>
          </Reveal>

          {/* Variant cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {[
              { label: 'Variant A', model: '"Trust us - Pro is better for you."', pattern: 'Recommendation + Feature explanation + "Why" banner' },
              { label: 'Variant B', model: '"Here\'s evidence - Pro fits how you work."', pattern: 'Recommendation + Usage proof + Recommendation' },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{v.label}</p>
                  <p className="text-xs font-light mb-2" style={{ color: 'var(--text-secondary)' }}>{v.pattern}</p>
                  <p className="text-xs font-light italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-tertiary)' }}>Mental model: {v.model}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <Reveal delay={0.08}><img src={imgImage190} alt="Variant A" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
            <Reveal delay={0.16}><img src={imgImage189} alt="Variant B" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" /></Reveal>
          </div>

          <Reveal>
            <div className="mb-8 mt-4">
              <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-4" style={{ color: 'var(--text-primary)' }}>
                Usage-Driven Recommendations Increased Pro Conversions by 35%
              </h3>
              <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We tested two upgrade experiences - a generic recommendation vs. a usage-based personalized recommendation - to measure impact on Pro conversion. The usage-driven experience increased conversion from 4.0% to 5.4%, delivering a 35% relative uplift and higher user trust in the upgrade recommendation.
              </p>
            </div>
          </Reveal>
          <Reveal><img src={imgAbChart} alt="Conversion trend chart" className="w-full h-auto rounded-xl mb-5" loading="lazy" decoding="async" /></Reveal>
          <Reveal>
            <div className="rounded-xl overflow-hidden p-5 md:p-8" style={{ backgroundColor: 'var(--color-gray-600, #555)' }}>
              <img src={imgStep4} alt="A/B test result" className="w-full h-auto rounded-lg" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          {/* Validation */}
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-xl p-6 md:p-8" style={{ border: '1px solid var(--border-subtle)' }}>
              <p className="text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--text-tertiary)' }}>Validation</p>
              <div className="flex flex-col gap-2 mb-4">
                {[
                  'Conversion: 4.0% → 5.4%',
                  '35% relative uplift in Pro upgrades',
                  'Stronger cumulative daily conversion trend',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                    <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="pl-6 md:pl-8" style={{ borderLeft: '2px solid var(--text-primary)' }}>
                <p className="text-sm md:text-base font-normal italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                  Evidence builds confidence. Confidence drives commitment.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          PLAN SELECTION VISUALS
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-4 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: 'var(--text-primary)' }}>Visual Guidance for Plan Selection</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light text-center mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Short explainer videos turn abstract feature lists into real usage stories, helping users quickly understand which plan fits them best.
            </p>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="lg:w-[130%] lg:ml-[-15%] mb-5">
              <img src={imgImage195} alt="Plan selection interface" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
            </div>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-xl mb-5">
              <img src={imgImage196} alt="Plan comparison flow" className="w-full h-auto object-cover scale-[1.25]" loading="lazy" decoding="async" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.08}>
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <LazyVideo src={whyStandardVideo} className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <LazyVideo src={whyProVideo} className="w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          FEATURE DISCOVERY - Contextual value
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-4 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4" style={{ color: 'var(--text-primary)' }}>Promoting Discovery Through Value</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light text-center mb-6 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Instead of gating features behind friction, we surfaced premium capabilities contextually.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-3 max-w-lg mx-auto mb-10">
              {[
                { trigger: 'Timeline', outcome: 'show capacity planning' },
                { trigger: 'Automation', outcome: 'show workflow scale' },
                { trigger: 'Advanced views', outcome: 'show operational clarity' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="px-3 py-1.5 rounded-full text-xs font-light" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
                    {item.trigger}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
                  <span className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item.outcome}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-sm font-light italic text-center mb-10" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              This reframed locked features from restriction → opportunity. The upgrade became a natural next step.
            </p>
          </Reveal>
        </div>

      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DISCOVERY VALUE & PROMOTED FEATURES - Full-width layout
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-4 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="mx-auto space-y-5 mb-16">
          <Reveal>
            <img src={imgDiscoveryValue1} alt="Discovery through value — contextual feature surfacing" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
          <Reveal>
            <img src={imgDiscoveryValue2} alt="Discovery through value — premium feature overlay" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
        </div>

        <div className="mx-auto space-y-5">
          <Reveal>
            <img src={imgPromotedMatch1} alt="Promoted features matching user workflow" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
          <Reveal>
            <img src={imgPromotedMatch2} alt="Promoted features — full experience view" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
          </Reveal>
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
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
              Measurable impact across the funnel
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { metric: '+7%', desc: 'registration-to-plan conversion' },
              { metric: '35%', desc: 'relative uplift in Pro upgrades' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Increased plan clarity and decision speed' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Reduced downgrade regret' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Higher long-term plan alignment' },
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
              <p className="text-base md:text-lg font-normal italic leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                Most importantly: Users stopped hovering. They started choosing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OUTCOME - above dark band
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-tertiary)' }}>Outcome</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl font-light mb-6" style={{ color: 'var(--text-secondary)' }}>
              Feature comparison under pressure → Guided, usage-driven decision confidence
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex justify-center my-6">
              <div className="w-10 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
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
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl lg:text-3xl font-normal italic text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              The moment of commitment became safer.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-normal italic text-white mt-5" style={{ fontFamily: 'var(--font-serif)' }}>
              And when choosing feels safe - growth follows.
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
              Bit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </button>
        </div>
      </section>
    </div>
  );
}
