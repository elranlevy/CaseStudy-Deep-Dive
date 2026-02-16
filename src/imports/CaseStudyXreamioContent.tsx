import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Server,
  BarChart3,
  Gauge,
  LayoutDashboard,
  Eye,
  Workflow,
  Layers,
  Bell,
  Zap,
  Grid3X3,
  Activity,
  Shield,
  AlertTriangle,
  MonitorCheck,
  Link2,
  PanelRightOpen,
  Lightbulb,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgImage175 from 'figma:asset/8283c758f682797739df887f6aa3e29caa08732e.png';
import imgImage172 from 'figma:asset/d39fb3cca29d3b2153e74727f2bd2167584b2b3c.png';
import imgImage174 from 'figma:asset/dc4843ec408a4532c53cdacb5ed2533eecd0dc2e.png';
import imgImage176 from 'figma:asset/d4d58b02892ddfba3736780450879b582c47390e.png';
import imgClusterStatus from 'figma:asset/1310cf6034e7996a8a437beaf595a9e75ee70205.png';
import imgHealthStatus from '@/assets/xtreamio-health-status.png';
import imgProtectionDialog from '@/assets/xtremio-protection-dialog.png';
import imgImage178 from 'figma:asset/d7831a442bc44faf1090c9e711599d69abfabc41.png';
import imgImage177 from 'figma:asset/84697da8fef42b33bbdcddc2442ef98a82019325.png';

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

/* ================================================================
   XTREAMIO - "Technical Precision"
   ──────────────────────────────────────────────────────────────
   Unique personality:
   · Contained dark card for Key Insight (NOT full-width band)
   · Compact numbered approach list (NOT grid cards)
   · Each approach step has rich description
   · Screenshots elevated as the star - maximum visual space
   · Results as minimal two-column layout on white
   · Context as dense enterprise narrative
   · Mental states model for admin workflows
   · Dark closing band with pattern
   ================================================================ */
export default function CaseStudyXreamioContent({ onNextStudy }: { onNextStudy?: () => void }) {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-tertiary)' }}>XtremIO</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6" style={{ color: 'var(--text-primary)' }}>
              Designing enterprise storage management systems
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base md:text-lg font-light italic max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
              When losing context means losing control
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 pt-8 text-left" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { label: 'Role', value: 'Product Designer' },
                { label: 'Team', value: 'PM · Engineering · Enterprise Stakeholders' },
                { label: 'Scope', value: 'Storage monitoring · System management · Admin workflows' },
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
        <div className="max-w-4xl mx-auto px-6 md:px-12 pb-4">
          <img src={imgImage175} alt="XtremIO storage management dashboard" className="w-full h-auto rounded-xl" loading="eager" decoding="async" />
        </div>
      </Reveal>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          CONTEXT - Dense enterprise narrative
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>Context</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center leading-snug" style={{ color: 'var(--text-primary)' }}>
              XtremIO operates in deeply interconnected enterprise environments.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-1.5 text-center mb-10">
              <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-secondary)' }}>Systems are complex.</p>
              <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-secondary)' }}>Infrastructure logic is dense.</p>
              <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-secondary)' }}>Small changes cascade.</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: <Activity className="w-5 h-5" strokeWidth={1.4} />, label: 'Health' },
                { icon: <BarChart3 className="w-5 h-5" strokeWidth={1.4} />, label: 'Performance' },
                { icon: <Server className="w-5 h-5" strokeWidth={1.4} />, label: 'Capacity' },
                { icon: <Link2 className="w-5 h-5" strokeWidth={1.4} />, label: 'Connectivity' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3 p-4 rounded-xl" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-xs md:text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-sm md:text-base font-light text-center mb-3" style={{ color: 'var(--text-secondary)' }}>
              Administrators monitor all of these - at once.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="pl-8 md:pl-12 max-w-2xl mx-auto mt-8" style={{ borderLeft: '3px solid var(--text-primary)' }}>
              <p className="text-sm md:text-base font-light mb-2" style={{ color: 'var(--text-secondary)' }}>
                The challenge wasn&rsquo;t showing data.
              </p>
              <p className="text-lg md:text-xl font-normal italic leading-snug" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                It was keeping users grounded inside complexity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE PROBLEM - Mental states model
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>The Problem</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                'Low tolerance for inefficiency',
                'High sensitivity to system failures',
                'Zero room for ambiguity',
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-4 py-2.5 rounded-full text-xs md:text-sm font-light"
                  style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Mental states */}
          <Reveal delay={0.15}>
            <p className="text-sm md:text-base font-light text-center mb-6" style={{ color: 'var(--text-secondary)' }}>
              Backup administrators operate in shifting mental states:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { stage: 'Maintenance', mood: 'Calm and proactive', color: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.2)' },
              { stage: 'Overview', mood: 'Alert and cautious', color: 'rgba(234,179,8,0.08)', borderColor: 'rgba(234,179,8,0.2)' },
              { stage: 'Crisis', mood: 'Urgent and overloaded', color: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.2)' },
            ].map((item, i) => (
              <Reveal key={i} delay={0.2 + i * 0.08}>
                <div
                  className="rounded-xl p-6 text-center h-full"
                  style={{ backgroundColor: item.color, border: `1px solid ${item.borderColor}` }}
                >
                  <p className="text-xs uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>{item.stage} stage</p>
                  <p className="text-sm md:text-base font-light italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>{item.mood}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="rounded-xl p-6 md:p-8 text-center" style={{ backgroundColor: 'var(--surface-secondary)' }}>
              <p className="text-xs uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--text-tertiary)' }}>During crisis moments</p>
              <div className="flex flex-col gap-1">
                <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>Time is critical.</p>
                <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>Mistakes are costly.</p>
                <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>Friction increases stress instantly.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 text-center">
              <p className="text-sm md:text-base font-light mb-2" style={{ color: 'var(--text-secondary)' }}>
                The interface needed to simplify without oversimplifying.
              </p>
              <p className="text-base md:text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                Technical users value clarity and control - not decoration.
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
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <LayoutDashboard className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
                  <Eye className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
                  <Workflow className="w-5 h-5" strokeWidth={1.5} style={{ color: 'var(--text-tertiary)' }} />
                  <span className="text-[10px] uppercase tracking-[0.2em] ml-2" style={{ color: 'var(--text-tertiary)' }}>Ownership</span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="text-xl md:text-2xl font-semibold mb-6 leading-snug" style={{ color: 'var(--text-primary)' }}>
                  My Ownership
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-col gap-3">
                  {[
                    'Designed monitoring dashboards and admin workflows',
                    'Translated infrastructure metrics into clear visual hierarchies',
                    'Reduced friction in system management tasks',
                    'Standardized interaction logic across tools',
                    'Collaborated directly with engineering-heavy stakeholders',
                    'Simplified protection setup flows',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                      <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Key Insight - contained dark card (unique to XtremIO) */}
            <div className="flex items-center">
              <Reveal delay={0.15}>
                <div
                  className="rounded-2xl px-8 py-14 md:px-10 md:py-16 text-center w-full"
                  style={{ backgroundColor: 'var(--color-gray-900)' }}
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: 'rgba(255,255,255,0.35)' }}>Key Insight</p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-white mb-3">
                    Great monitoring UX doesn&rsquo;t simplify systems.
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight italic" style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.75)' }}>
                    It makes them understandable under pressure.
                  </p>
                  <div className="flex justify-center my-6">
                    <div className="w-8 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
                  </div>
                  <p className="text-sm font-light max-w-xs mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Efficiency and information hierarchy drive adoption. Decision confidence is a product feature.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN PRINCIPLES - From ideation insights
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>Design Principles</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
              From ideation insights:
            </p>
          </Reveal>

          <div className="flex flex-col gap-0">
            {[
              { icon: <Eye className="w-4 h-4" strokeWidth={1.4} />, text: 'Show only what\u2019s needed, when needed' },
              { icon: <Zap className="w-4 h-4" strokeWidth={1.4} />, text: 'Automate the minimum required decisions' },
              { icon: <MonitorCheck className="w-4 h-4" strokeWidth={1.4} />, text: 'Speak the administrator\u2019s language' },
              { icon: <Lightbulb className="w-4 h-4" strokeWidth={1.4} />, text: 'Guide, but let users decide' },
              { icon: <Shield className="w-4 h-4" strokeWidth={1.4} />, text: 'Keep systems optimistic \u2014 not alarming' },
            ].map((item, i, arr) => (
              <Reveal key={i} delay={0.15 + i * 0.06}>
                <div
                  className="flex items-center gap-4 py-4"
                  style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : undefined }}
                >
                  <div style={{ color: 'var(--text-tertiary)' }}>{item.icon}</div>
                  <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="mt-10 text-center">
              <p className="text-sm md:text-base font-light mb-2" style={{ color: 'var(--text-secondary)' }}>
                The goal was not visual simplification.
              </p>
              <p className="text-base md:text-lg font-normal italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                It was cognitive simplification.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          FROM COMPLEX TO CLEAR - Flow comparison
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              From a Complex Setup to a Clear, Guided Flow
            </h2>
            <p className="text-sm font-light leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
              The legacy protection flow required users to move through multiple disconnected steps, forcing them to make low-level technical decisions early in the process. This created a long, error-prone path with high cognitive load, especially for first-time or time-constrained users.
            </p>
          </Reveal>

          {/* BEFORE - Legacy flow */}
          <Reveal delay={0.1}>
            <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Before</p>
            <div className="rounded-xl p-6 md:p-8 mb-8" style={{ backgroundColor: 'var(--surface-secondary)' }}>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {['Select VM\u2019s', 'Select sites', 'Create consistency group', 'Add Resources'].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3">
                    <span className="px-3 py-1.5 rounded-md text-xs font-light whitespace-nowrap" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', backgroundColor: 'white' }}>{step}</span>
                    {i < arr.length - 1 && <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>→</span>}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-3">
                {['Replication Settings', 'RPO Settings', 'Snapshot frequency'].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3">
                    <span className="px-3 py-1.5 rounded-md text-xs font-light whitespace-nowrap" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', backgroundColor: 'white' }}>{step}</span>
                    {i < arr.length - 1 && <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>→</span>}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-3">
                {['Consolidation settings', 'Protection settings'].map((step, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3">
                    <span className="px-3 py-1.5 rounded-md text-xs font-light whitespace-nowrap" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', backgroundColor: 'white' }}>{step}</span>
                    <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>→</span>
                  </div>
                ))}
                <span className="px-4 py-1.5 rounded-md text-xs font-medium text-white whitespace-nowrap" style={{ backgroundColor: '#22b8cf' }}>Done!</span>
              </div>
              <p className="text-[10px] mt-4 italic" style={{ color: 'var(--text-tertiary)' }}>9 steps · high cognitive load · error-prone</p>
            </div>
          </Reveal>

          {/* Transition */}
          <Reveal delay={0.2}>
            <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              In the redesigned flow, the process is reduced to its core decisions. Users start by selecting the virtual machines, choose an existing policy, and complete the setup in a single, linear path. Advanced configuration is available when needed, without blocking progress.
            </p>
          </Reveal>

          {/* AFTER - Redesigned flow */}
          <Reveal delay={0.25}>
            <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>After</p>
            <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: 'var(--surface-secondary)' }}>
              <div className="flex items-start gap-3 md:gap-4">
                <span className="px-3 py-1.5 rounded-md text-xs font-light whitespace-nowrap" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', backgroundColor: 'white' }}>Select VM&rsquo;s</span>
                <span className="text-xs pt-1.5" style={{ color: 'var(--text-tertiary)' }}>→</span>
                <div className="flex flex-col items-center">
                  <span className="px-3 py-1.5 rounded-md text-xs font-light whitespace-nowrap" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', backgroundColor: 'white' }}>Select Policy</span>
                  <div className="w-px h-5 mt-2" style={{ backgroundColor: 'var(--border-subtle)' }} />
                  <span className="px-3 py-1.5 rounded-md text-[11px] font-light mt-1" style={{ border: '1px dashed var(--border-subtle)', color: 'var(--text-tertiary)' }}>Advanced</span>
                </div>
                <span className="text-xs pt-1.5" style={{ color: 'var(--text-tertiary)' }}>→</span>
                <span className="px-4 py-1.5 rounded-md text-xs font-medium text-white whitespace-nowrap" style={{ backgroundColor: '#22b8cf' }}>Done!</span>
              </div>
              <p className="text-[10px] mt-4 italic" style={{ color: 'var(--text-tertiary)' }}>3 steps · clear path · optional depth</p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE APPROACH - Compact numbered list with descriptions
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 md:pb-18 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>The Approach</h2>
          </Reveal>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[15px] md:left-[19px] top-4 bottom-4 w-px" style={{ backgroundColor: 'var(--border-subtle)' }} />

            {[
              {
                num: '01',
                title: 'Simplify Data Hierarchy in Dashboards',
                desc: 'The dashboard was reorganized into three mega-tabs: Health, Performance, and Capacity. Each tab surfaces critical signals first. High-level indicators appear immediately; deep details are accessible on demand.',
                points: ['Reduces cognitive load', 'Supports faster scanning', 'Enables quick escalation decisions'],
              },
              {
                num: '02',
                title: 'Improve Visibility of System Status & Alerts',
                desc: 'Cluster connectivity was redesigned into clear visual states: Connected (green, solid), Unknown (neutral, dashed), Disconnected (red, broken), Initializing (active without false alarm). Instead of interpreting logs, administrators understand status instantly.',
                points: null,
              },
              {
                num: '03',
                title: 'Reduce Steps in Frequent Admin Actions',
                desc: 'The legacy protection flow forced low-level configuration decisions too early. The redesigned flow starts with selecting virtual machines, applies existing policy, and completes setup in a linear path. Advanced configuration surfaces only when needed.',
                points: ['Setup time reduced', 'Errors minimized', 'Confidence increased'],
              },
              {
                num: '04',
                title: 'Preserve Context with Master-Detail Views',
                desc: 'We introduced a master-detail interaction pattern: the overview remains visible while selecting an item reveals a detailed side panel. Monitoring → investigation without navigation loss. This preserves orientation - critical in enterprise environments.',
                points: null,
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-6 md:gap-8 mb-8">
                  <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs md:text-sm font-semibold" style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}>
                    {step.num}
                  </div>
                  <div className="pt-0.5 flex-1">
                    <p className="text-base md:text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</p>
                    <p className="text-sm md:text-base font-light leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                    {step.points && (
                      <div className="flex flex-wrap gap-2">
                        {step.points.map((point, j) => (
                          <span key={j} className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-light" style={{ backgroundColor: 'var(--surface-secondary)', color: 'var(--text-primary)' }}>
                            {point}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <p className="text-center text-sm font-medium mt-4" style={{ color: 'var(--text-primary)' }}>
              Losing context means losing control.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-10 lg:w-[150%] lg:ml-[-25%]">
              <img
                src={imgProtectionDialog}
                alt="One-click protection simplifies a complex process into a single, confident action"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN VISUALS - Screenshots elevated as the star
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12 lg:px-16">
        {/* Dashboard Overview */}
        <div className="max-w-4xl mx-auto mb-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Design Output</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 leading-snug" style={{ color: 'var(--text-primary)' }}>
              Dashboard Overview with Mega Tabs (Health / Performance / Capacity) - Information at the Right Level
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-light leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              The dashboard is organized around three high-level mega tabs: Health, Performance, and Capacity. Each tab surfaces the most critical information for that domain, allowing administrators to quickly understand system status without digging through multiple screens.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <img src={imgImage174} alt="Health monitoring" className="w-full h-auto rounded-xl mt-8" loading="lazy" decoding="async" />
          </Reveal>
        </div>

        <div className="max-w-[1400px] mx-auto space-y-4">
          <Reveal delay={0.18}>
            <div className="max-w-4xl mx-auto my-8">
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                This structure reduces cognitive load by grouping related metrics into a single, focused view. Instead of scanning scattered data points, users can assess system health, performance trends, or capacity risks at a glance and then drill down only when needed.
              </p>
              <img src={imgImage175} alt="XtremIO storage management dashboard" className="w-full h-auto rounded-xl mt-8" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-4xl mx-auto my-8">
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                By presenting high-level signals first and detailed insights second, the mega tabs support fast decision-making during routine monitoring and high-pressure situations alike - helping backup administrators stay in control and act with confidence.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="max-w-4xl mx-auto">
              <img src={imgImage176} alt="Capacity monitoring" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          {/* Cluster Connectivity section */}
        </div>
      </section>

      <VerticalDivider />

      <section className="pb-8 md:pb-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto space-y-4">
          <Reveal delay={0.3}>
            <div className="max-w-4xl mx-auto mt-8 mb-12">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-snug" style={{ color: 'var(--text-primary)' }}>
                Cluster Connectivity - Clear Status at a Glance
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                The cluster connectivity component provides an immediate, visual understanding of the relationship between the XMS and the cluster. By using consistent icons, colors, and connection lines, administrators can instantly identify the current state without interpreting logs or alerts.
              </p>
            </div>
          </Reveal>
          {/* Two-column: text descriptions left, Health Status image right */}
          <Reveal delay={0.33}>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[0.55fr_1.45fr] gap-4 md:gap-6">
                {/* Left: State descriptions */}
                <div className="flex flex-col gap-5 py-1">
                  {[
                    {
                      title: 'Connected',
                      desc: 'Both systems are communicating normally. The solid connection line and green indicators confirm that the cluster is healthy and fully operational.',
                    },
                    {
                      title: 'Disconnected',
                      desc: 'Communication between the XMS and the cluster is interrupted. The broken connection line and red indicator clearly signal an issue that requires attention.',
                    },
                    {
                      title: 'Unknown',
                      desc: 'The system cannot determine the cluster\u2019s status. Neutral colors and a dashed connection indicate uncertainty, while contextual hints provide guidance without creating false alarms.',
                    },
                    {
                      title: 'Initializing',
                      desc: 'The cluster is in the process of establishing a connection. The active state is visually communicated without triggering unnecessary concern.',
                    },
                  ].map((state, i) => (
                    <div key={i}>
                      <p className="text-base md:text-lg font-semibold mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>
                        {state.title}
                      </p>
                      <p className="text-xs font-light leading-[1.75] tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                        {state.desc}
                      </p>
                      {i < 3 && <div className="w-48 h-px mt-4" style={{ backgroundColor: 'var(--border-subtle)' }} />}
                    </div>
                  ))}
                </div>

                {/* Right: Health Status image */}
                <div className="flex items-start justify-center">
                  <img src={imgHealthStatus} alt="Cluster connectivity health status states" className="w-[70%] h-auto rounded-xl" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="max-w-4xl mx-auto my-8 rounded-lg px-8 py-6" style={{ backgroundColor: '#f5f5f5' }}>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                This approach reduces ambiguity during monitoring and crisis moments, allowing backup administrators to quickly understand what&rsquo;s happening, why it matters, and when action is required.
              </p>
            </div>
          </Reveal>
          {/* Master-Detail View section */}
        </div>
      </section>

      <VerticalDivider />

      <section className="pb-8 md:pb-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto space-y-4">
          <Reveal delay={0.38}>
            <div className="max-w-4xl mx-auto mt-8 mb-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-snug" style={{ color: 'var(--text-primary)' }}>
                Master-Detail View - From Overview to Action
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                The Data Protection overview provides a high-level snapshot of system health, compliance, and active sessions. Selecting an item in the topology instantly reveals detailed information in the side panel, allowing administrators to move from monitoring to investigation without leaving the page.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="max-w-4xl mx-auto">
              <img src={imgImage178} alt="Master-detail view - Data Protection overview with topology and side panel" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
            </div>
          </Reveal>
          <Reveal delay={0.42}>
            <div className="max-w-4xl mx-auto my-8">
              <p className="text-sm font-light leading-relaxed italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
                This master-detail approach keeps the main context visible while surfacing relevant details on demand - reducing navigation, preserving orientation, and enabling faster, more confident decision-making.
              </p>
            </div>
          </Reveal>

          {/* Impact mini-cards */}
          <Reveal delay={0.45}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Impact</h3>
              <p className="text-sm font-light mb-6" style={{ color: 'var(--text-secondary)' }}>
                This is how fund operations should feel: clear, visible, and grounded.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Faster scanning', 'Safer decision-making', 'Reduced operational risk'].map((item, i) => (
                  <div key={i} className="rounded-xl px-5 py-4 text-sm font-light" style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          RESULTS - Minimal two-column on white
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>Results</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12" style={{ color: 'var(--text-primary)' }}>
              Measurable impact on enterprise operations
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {[
              { label: 'Task Efficiency', desc: 'Improved task efficiency for system administrators' },
              { label: 'Monitoring', desc: 'Reduced friction in monitoring workflows' },
              { label: 'Decision Speed', desc: 'Faster scanning and safer decision-making' },
              { label: 'Consistency', desc: 'More consistent enterprise UI patterns across tools' },
              { label: 'Operational Risk', desc: 'Reduced operational risk' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4" style={{ borderLeft: '2px solid var(--text-primary)', paddingLeft: '16px' }}>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>{item.label}</p>
                    <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

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
            <p className="text-sm md:text-base font-light mb-2" style={{ color: 'var(--text-secondary)' }}>XtremIO transformed from:</p>
            <p className="text-lg md:text-xl font-light mb-6" style={{ color: 'var(--text-secondary)' }}>
              Dense infrastructure dashboards → Grounded system awareness
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
              Great monitoring UX doesn&rsquo;t simplify systems.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-normal italic text-white mt-5" style={{ fontFamily: 'var(--font-serif)' }}>
              It makes them understandable under pressure.
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
              FundGuard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </button>
        </div>
      </section>
    </div>
  );
}
