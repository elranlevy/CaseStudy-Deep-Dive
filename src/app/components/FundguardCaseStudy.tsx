import { type ReactNode } from 'react';
import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import { motion } from 'motion/react';
import imgHierarchyView from '@/assets/fg-hierarchy-view.png';
import imgWorkflowTableV1 from '@/assets/fg-workflow-table-v1.png';
import imgDashboardVariantB from '@/assets/fg-dashboard-variant-b.png';
import imgVariantBDetailed from '@/assets/fg-variant-b-detailed.png';
import {
  ArrowRight,
  Users,
  Monitor,
  Clock,
  AlertTriangle,
  CircleCheck,
  AlertCircle,
  Calendar,
  Landmark,
  Eye,
  Activity,
  Bell,
  Copy,
  LayoutDashboard,
  BellOff,
  Gauge,
  Timer,
  ListChecks,
  Wrench,
  Send,
  BarChart3,
  Table,
  MousePointerClick,
  MousePointer,
} from 'lucide-react';

interface FundguardCaseStudyProps {
  onBack: () => void;
  onNext: () => void;
}

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

function ScreenPlaceholder({
  label,
  aspect = '16/9',
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className="w-full rounded-lg overflow-hidden"
      style={{
        aspectRatio: aspect,
        backgroundColor: 'var(--surface-secondary)',
        border: '1px solid var(--border-subtle)',
      }}
    >
      <div className="w-full h-full flex items-center justify-center px-6">
        <p
          className="text-[11px] uppercase tracking-[0.15em] font-medium text-center"
          style={{ color: 'var(--text-tertiary)', opacity: 0.6 }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div
      className="my-16 md:my-20"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    />
  );
}

function Body({ children }: { children: ReactNode }) {
  return (
    <div
      className="text-sm md:text-base font-light leading-relaxed flex flex-col gap-4"
      style={{ color: 'var(--text-secondary)' }}
    >
      {children}
    </div>
  );
}

function IconRow({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-0.5 shrink-0"
        style={{ color: 'var(--text-tertiary)' }}
      >
        {icon}
      </span>
      <span>{children}</span>
    </div>
  );
}

const ICON_SIZE = 'w-4 h-4';
const ICON_STROKE = 1.5;

export function FundguardCaseStudy({
  onBack,
  onNext,
}: FundguardCaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <article className="pt-24 pb-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          {/* ── Hero ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.18em] font-medium"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Case Study&ensp;·&ensp;Fintech&ensp;·&ensp;B2B
            </p>
            <h1
              className="mt-3 text-3xl md:text-4xl font-extralight leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              FundGuard
            </h1>
            <p
              className="mt-5 text-sm md:text-base font-light leading-relaxed max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              Automating investment validation for State Street. Error rate
              went from 5% to 0.2%.
            </p>
          </motion.div>

          {/* ── State Street ──────────────────────────────────── */}
          <SectionDivider />
          <motion.section {...fade}>
            <h2
              className="text-lg md:text-xl font-normal"
              style={{ color: 'var(--text-primary)' }}
            >
              State Street
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="rounded-lg p-5 flex items-start gap-4"
                style={{ backgroundColor: 'var(--surface-secondary)' }}
              >
                <Users
                  className="w-5 h-5 shrink-0 mt-0.5"
                  strokeWidth={ICON_STROKE}
                  style={{ color: 'var(--text-tertiary)' }}
                />
                <div>
                  <p
                    className="text-lg font-extralight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    10,000
                  </p>
                  <p
                    className="text-sm font-light"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Accountants
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg p-5 flex items-start gap-4"
                style={{ backgroundColor: 'var(--surface-secondary)' }}
              >
                <Monitor
                  className="w-5 h-5 shrink-0 mt-0.5"
                  strokeWidth={ICON_STROKE}
                  style={{ color: 'var(--text-tertiary)' }}
                />
                <div>
                  <p
                    className="text-lg font-extralight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    ~10
                  </p>
                  <p
                    className="text-sm font-light"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Different systems
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg p-5 flex items-start gap-4"
                style={{ backgroundColor: 'var(--surface-secondary)' }}
              >
                <Clock
                  className="w-5 h-5 shrink-0 mt-0.5"
                  strokeWidth={ICON_STROKE}
                  style={{ color: 'var(--text-tertiary)' }}
                />
                <div>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Must validate before business day
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg p-5 flex items-start gap-4"
                style={{ backgroundColor: 'var(--surface-secondary)' }}
              >
                <AlertTriangle
                  className="w-5 h-5 shrink-0 mt-0.5"
                  strokeWidth={ICON_STROKE}
                  style={{ color: 'var(--text-tertiary)' }}
                />
                <div>
                  <p
                    className="text-lg font-extralight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    5%
                  </p>
                  <p
                    className="text-sm font-light"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Error rate in data accuracy
                  </p>
                </div>
              </div>
            </div>

            <Body>
              <p className="mt-6">
                Thousands of investment values — raw data to current value,
                single stocks to ETFs. All validated across multiple systems.
              </p>
              <p>
                That's the environment. High volume, tight deadlines, no
                room for bad data.
              </p>
            </Body>
          </motion.section>

          {/* ── FundGuard ─────────────────────────────────────── */}
          <SectionDivider />
          <motion.section {...fade}>
            <h2
              className="text-lg md:text-xl font-normal"
              style={{ color: 'var(--text-primary)' }}
            >
              FundGuard
            </h2>
            <Body>
              <p>
                FundGuard built a system to automate validation of each
                investment row.
              </p>
              <p>Error rate dropped from 5% to 0.2%.</p>
              <p>
                Gaps in investment values were now identified in real time
                — not after the fact.
              </p>
            </Body>
            <div className="mt-8">
              <img
                src={imgHierarchyView}
                alt="FundGuard Hierarchy View — fund structure with status indicators and family groupings"
                className="w-full rounded-lg"
                style={{ border: '1px solid var(--border-subtle)' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.section>

          {/* ── V1 ────────────────────────────────────────────── */}
          <SectionDivider />
          <motion.section {...fade}>
            <h2
              className="text-lg md:text-xl font-normal"
              style={{ color: 'var(--text-primary)' }}
            >
              V1
            </h2>
            <Body>
              <p>
                The first version presented workflows in a table. Each row
                showed:
              </p>
            </Body>
            <div
              className="mt-4 flex flex-col gap-3 text-sm md:text-base font-light leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              <IconRow
                icon={
                  <CircleCheck
                    className={ICON_SIZE}
                    strokeWidth={ICON_STROKE}
                  />
                }
              >
                Status
              </IconRow>
              <IconRow
                icon={
                  <AlertCircle
                    className={ICON_SIZE}
                    strokeWidth={ICON_STROKE}
                  />
                }
              >
                Issues / gaps
              </IconRow>
              <IconRow
                icon={
                  <Calendar className={ICON_SIZE} strokeWidth={ICON_STROKE} />
                }
              >
                Date and time to be sent
              </IconRow>
              <IconRow
                icon={
                  <Landmark className={ICON_SIZE} strokeWidth={ICON_STROKE} />
                }
              >
                Financial institution to report to
              </IconRow>
            </div>
            <Body>
              <p className="mt-6">
                It made sense. Accountants could see their workflows and act
                on them.
              </p>
              <p>
                But once teams started using it at scale, friction appeared.
              </p>
            </Body>
            <div className="mt-8">
              <img
                src={imgWorkflowTableV1}
                alt="V1 Workflow Dashboard — table with status, step name, fund group, completion conditions, and SLA times"
                className="w-full rounded-lg"
                style={{ border: '1px solid var(--border-subtle)' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.section>

          {/* ── Feedback Cycle ────────────────────────────────── */}
          <SectionDivider />
          <motion.section {...fade}>
            <h2
              className="text-lg md:text-xl font-normal"
              style={{ color: 'var(--text-primary)' }}
            >
              Feedback Cycle
            </h2>
            <p
              className="mt-4 text-[10px] uppercase tracking-[0.18em] font-medium"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Pain points
            </p>
            <div
              className="mt-4 flex flex-col gap-3.5 text-sm md:text-base font-light leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              <IconRow
                icon={
                  <Users className={ICON_SIZE} strokeWidth={ICON_STROKE} />
                }
              >
                Accountants work in groups — 10 per group, all on the same
                workflows.
              </IconRow>
              <IconRow
                icon={<Eye className={ICON_SIZE} strokeWidth={ICON_STROKE} />}
              >
                Asset managers needed a consolidated view of group progress,
                gaps, and bottlenecks. They didn't have it.
              </IconRow>
              <IconRow
                icon={
                  <Activity className={ICON_SIZE} strokeWidth={ICON_STROKE} />
                }
              >
                Data arrives as a continuous stream.
              </IconRow>
              <IconRow
                icon={
                  <Bell className={ICON_SIZE} strokeWidth={ICON_STROKE} />
                }
              >
                Every detected gap triggered a notification.
              </IconRow>
              <IconRow
                icon={
                  <Copy className={ICON_SIZE} strokeWidth={ICON_STROKE} />
                }
              >
                The same gap, detected from multiple streams, sent duplicate
                notifications.
              </IconRow>
            </div>
            <Body>
              <p className="mt-6">
                The system was doing its job. But the volume of noise made
                it hard to trust.
              </p>
            </Body>
            <div className="mt-8">
              <ScreenPlaceholder label="Notification flooding — before deduplication" />
            </div>
          </motion.section>

          {/* ── Hypotheses ────────────────────────────────────── */}
          <SectionDivider />
          <motion.section {...fade}>
            <h2
              className="text-lg md:text-xl font-normal"
              style={{ color: 'var(--text-primary)' }}
            >
              Hypotheses
            </h2>

            {/* H1 */}
            <div
              className="mt-8 rounded-lg p-6 md:p-8"
              style={{ backgroundColor: 'var(--surface-secondary)' }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.18em] font-medium"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Hypothesis 1
              </p>
              <p
                className="mt-3 text-sm md:text-base font-normal leading-relaxed"
                style={{ color: 'var(--text-primary)' }}
              >
                If accountants see grouped workflow status in one view,
                they'll spend less time switching between individual
                workflows.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span style={{ color: 'var(--text-tertiary)' }}>
                    Why it makes sense:
                  </span>{' '}
                  Groups of 10 work on the same workflows. Without a shared
                  view, each person checks individually.
                </p>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span style={{ color: 'var(--text-tertiary)' }}>
                    What could go wrong:
                  </span>{' '}
                  May hide individual workflow details some accountants need.
                </p>
              </div>
            </div>

            {/* H2 */}
            <div
              className="mt-4 rounded-lg p-6 md:p-8"
              style={{ backgroundColor: 'var(--surface-secondary)' }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.18em] font-medium"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Hypothesis 2
              </p>
              <p
                className="mt-3 text-sm md:text-base font-normal leading-relaxed"
                style={{ color: 'var(--text-primary)' }}
              >
                Asset managers who see real-time group progress and
                bottlenecks will make faster resource decisions.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span style={{ color: 'var(--text-tertiary)' }}>
                    Why it makes sense:
                  </span>{' '}
                  They currently piece together group status manually.
                </p>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span style={{ color: 'var(--text-tertiary)' }}>
                    What could go wrong:
                  </span>{' '}
                  If data streams lag, the real-time view is misleading.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ── Solution ──────────────────────────────────────── */}
          <SectionDivider />
          <motion.section {...fade}>
            <h2
              className="text-lg md:text-xl font-normal"
              style={{ color: 'var(--text-primary)' }}
            >
              Solution
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <span
                    className="text-xs font-medium"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    1
                  </span>
                </div>
                <div>
                  <p
                    className="text-sm md:text-base font-normal"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Dashboard with drill-down
                  </p>
                  <p
                    className="mt-1 text-sm font-light leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Asset managers get a consolidated view of all workflows.
                    Accountants can still drill into individual details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <span
                    className="text-xs font-medium"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    2
                  </span>
                </div>
                <div>
                  <p
                    className="text-sm md:text-base font-normal"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Aggregated notifications
                  </p>
                  <p
                    className="mt-1 text-sm font-light leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Duplicate gap alerts are merged. One gap, one notification.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <ScreenPlaceholder label="Dashboard — drill-down view" />
            </div>
          </motion.section>

          {/* ── AI Layer ──────────────────────────────────────── */}
          <SectionDivider />
          <motion.section {...fade}>
            <h2
              className="text-lg md:text-xl font-normal"
              style={{ color: 'var(--text-primary)' }}
            >
              AI Layer
            </h2>
            <Body>
              <p>
                The notification volume was still high. Deduplication helped,
                but accountants still had to decide what to act on first.
              </p>
              <p>So we added an AI layer.</p>
            </Body>

            <div
              className="mt-6 flex flex-col gap-3.5 text-sm md:text-base font-light leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              <IconRow
                icon={
                  <Gauge className={ICON_SIZE} strokeWidth={ICON_STROKE} />
                }
              >
                Assigns importance level — low to critical
              </IconRow>
              <IconRow
                icon={
                  <Timer className={ICON_SIZE} strokeWidth={ICON_STROKE} />
                }
              >
                Scans notifications within a set time period
              </IconRow>
              <IconRow
                icon={
                  <ListChecks
                    className={ICON_SIZE}
                    strokeWidth={ICON_STROKE}
                  />
                }
              >
                Creates a non-duplicated list of gaps
              </IconRow>
              <IconRow
                icon={
                  <Wrench className={ICON_SIZE} strokeWidth={ICON_STROKE} />
                }
              >
                Adds suggested fixes based on available data
              </IconRow>
              <IconRow
                icon={
                  <Send className={ICON_SIZE} strokeWidth={ICON_STROKE} />
                }
              >
                Sends results at the right time
              </IconRow>
            </div>

            <Body>
              <p className="mt-6">
                Instead of a flood of alerts, accountants got a filtered,
                prioritized list — with suggested next steps.
              </p>
            </Body>
            <div className="mt-8">
              <ScreenPlaceholder label="AI notification list — prioritized gaps with suggested fixes" />
            </div>
          </motion.section>

          {/* ── A/B Testing ───────────────────────────────────── */}
          <SectionDivider />
          <motion.section {...fade}>
            <h2
              className="text-lg md:text-xl font-normal"
              style={{ color: 'var(--text-primary)' }}
            >
              A/B Testing
            </h2>
            <Body>
              <p>
                We had one question: do users need specific operational
                details for each workflow, or is a summary enough?
              </p>
              <p>We built two variants to find out.</p>
            </Body>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="rounded-lg p-6 md:p-8"
                style={{ backgroundColor: 'var(--surface-secondary)' }}
              >
                <div className="flex items-center gap-3">
                  <BarChart3
                    className="w-4 h-4 shrink-0"
                    strokeWidth={ICON_STROKE}
                    style={{ color: 'var(--text-tertiary)' }}
                  />
                  <p
                    className="text-[10px] uppercase tracking-[0.18em] font-medium"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    Variant A — Lean Dashboard
                  </p>
                </div>
                <ul
                  className="mt-4 flex flex-col gap-2 text-sm font-light leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <li>Workflow infographics</li>
                  <li>Funds status</li>
                  <li>Tasks status</li>
                </ul>
              </div>

              <div
                className="rounded-lg p-6 md:p-8"
                style={{ backgroundColor: 'var(--surface-secondary)' }}
              >
                <div className="flex items-center gap-3">
                  <Table
                    className="w-4 h-4 shrink-0"
                    strokeWidth={ICON_STROKE}
                    style={{ color: 'var(--text-tertiary)' }}
                  />
                  <p
                    className="text-[10px] uppercase tracking-[0.18em] font-medium"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    Variant B — Detailed Dashboard
                  </p>
                </div>
                <ul
                  className="mt-4 flex flex-col gap-2 text-sm font-light leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <li>Delay</li>
                  <li>Transactions</li>
                  <li>Delayed funds list</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScreenPlaceholder label="Variant A — Lean dashboard" />
              <img
                src={imgVariantBDetailed}
                alt="Variant B — Detailed Dashboard with fund status, tasks, delay, transactions, and delayed funds per group"
                className="w-full rounded-lg"
                style={{ border: '1px solid var(--border-subtle)' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="mt-8">
              <p
                className="text-[10px] uppercase tracking-[0.18em] font-medium"
                style={{ color: 'var(--text-tertiary)' }}
              >
                KPIs measured
              </p>
              <div
                className="mt-3 flex flex-col gap-3 text-sm font-light leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                <IconRow
                  icon={
                    <MousePointerClick
                      className={ICON_SIZE}
                      strokeWidth={ICON_STROKE}
                    />
                  }
                >
                  Decrease in clicks to drill down
                </IconRow>
                <IconRow
                  icon={
                    <MousePointer
                      className={ICON_SIZE}
                      strokeWidth={ICON_STROKE}
                    />
                  }
                >
                  Increase in hovers on components
                </IconRow>
              </div>
            </div>
          </motion.section>

          {/* ── Results ───────────────────────────────────────── */}
          <SectionDivider />
          <motion.section {...fade}>
            <h2
              className="text-lg md:text-xl font-normal"
              style={{ color: 'var(--text-primary)' }}
            >
              Results
            </h2>
            <Body>
              <p>Variant B won.</p>
            </Body>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="rounded-lg p-6 md:p-8 flex items-start gap-4"
                style={{ backgroundColor: 'var(--surface-secondary)' }}
              >
                <MousePointerClick
                  className="w-5 h-5 shrink-0 mt-1"
                  strokeWidth={ICON_STROKE}
                  style={{ color: 'var(--text-tertiary)' }}
                />
                <div>
                  <p
                    className="text-3xl md:text-4xl font-extralight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    30%
                  </p>
                  <p
                    className="mt-1 text-sm font-light leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Fewer clicks to drill down.
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg p-6 md:p-8 flex items-start gap-4"
                style={{ backgroundColor: 'var(--surface-secondary)' }}
              >
                <MousePointer
                  className="w-5 h-5 shrink-0 mt-1"
                  strokeWidth={ICON_STROKE}
                  style={{ color: 'var(--text-tertiary)' }}
                />
                <div>
                  <p
                    className="text-3xl md:text-4xl font-extralight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    +40%
                  </p>
                  <p
                    className="mt-1 text-sm font-light leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    More hovers on components.
                  </p>
                </div>
              </div>
            </div>

            <Body>
              <p className="mt-8">
                Users didn't want a summary. They wanted the details upfront.
              </p>
            </Body>

            <div className="mt-8">
              <img
                src={imgDashboardVariantB}
                alt="Variant B Workflow Dashboard — group view with fund status rings, task counts, delay, and transaction metrics per fund group"
                className="w-full rounded-lg"
                style={{ border: '1px solid var(--border-subtle)' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.section>

          {/* ── Closing ───────────────────────────────────────── */}
          <SectionDivider />
          <motion.section {...fade}>
            <p
              className="text-sm md:text-base font-light leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              When accountants can trust the data in front of them, they
              stop checking. When they stop checking, they start acting.
              That's the difference structure makes.
            </p>
          </motion.section>

          {/* ── Next study ────────────────────────────────────── */}
          <div
            className="mt-20 pt-10"
            style={{ borderTop: '1px solid var(--border-subtle)' }}
          >
            <button
              onClick={onNext}
              className="group inline-flex items-center gap-2 text-[13px] font-medium hover:gap-3 transition-all duration-300 cursor-pointer"
              style={{ color: 'var(--text-primary)' }}
            >
              Next: Monday.com deep dive
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </article>
    </CaseStudyLayout>
  );
}
