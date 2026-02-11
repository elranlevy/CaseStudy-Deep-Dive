import svgPaths from './svg-6er71w85ab';

/* ── Persona avatars ── */
import imgPersonaDavid from 'figma:asset/5d3def7ca464ae5365be191398199d7010963edb.png';
import imgPersonaAmit from 'figma:asset/d9f497c1c12284df2c1dcb7e42ec96b3ad9e90a3.png';
import imgPersonaMick from 'figma:asset/3e75e43b1469fc669a142c7cb0cb35379ce87e61.png';
import imgPersonaGabriel from 'figma:asset/ea720abd5b92c264c19b062a6eb646cfb048d657.png';

/* ── Case study images ── */
import imgImage195 from 'figma:asset/135037eee94c070be011542ce34df21d09e0887c.png';
import imgImage196 from 'figma:asset/d2bbf953c2e0dff1f47983ab05675e22222adadc.png';
import imgStep4 from 'figma:asset/e528a6e576ff61dfdedceda779b402b8cad6f7a3.png';
import imgImage190 from 'figma:asset/5f1af89856aef65d1b868e8219fddf2446fec50b.png';
import imgImage189 from 'figma:asset/e2ace24a2f436bfdff66fee0efc67986b23bea69.png';
import imgImage193 from 'figma:asset/daf1651f8cbfbc84a76190121c487237936e8e2c.png';
import imgBoardWithCactusAndPhone15313006711 from 'figma:asset/1283a766b980685a64313cdeb5ba880f6d1b751a.png';
import whyStandardVideo from '@/assets/why-standard-video.mp4';
import whyProVideo from '@/assets/why-pro-video.mp4';

/* ── Discovery & Promoted feature images ── */
import imgDiscovery212 from 'figma:asset/5891221db0f506e2ed13854c9b561b0eb94c1c45.png';
import imgDiscovery213 from 'figma:asset/46afff3de4b74b1fcd9fb6e6c6e34dc0511a1347.png';
import imgPromoted214 from 'figma:asset/2abdc6c0f0e1dc734eb659df7608c23f65d0828f.png';
import imgPromoted215 from 'figma:asset/590fcf0486ea5c0624f74a9ad643a26091276ee4.png';

/* ── A/B test chart ── */
import imgAbChart from '@/assets/monday-ab-chart.png';


import {
  Section,
  SectionTitle,
  InfoBoxGrid,
  PersonaCardGrid,
  HypothesisBlock,
  InsightBlock,
  CaseStudyImage,
  FullBleedImage,
  QuoteBanner,
  ImageWithQuote,
  CaseStudyHero,
  CaseStudyBody,
  ImageGrid,
  LazyVideo,
} from '@/app/components/case-study/CaseStudyPrimitives';

/* ── Monday.com Logo (SVG) ──────────────────────────────── */
function MondayLogo() {
  return (
    <svg
      className="w-full h-auto"
      fill="none"
      viewBox="0 0 335.374 69.7297"
    >
      <path d={svgPaths.p3fb55a00} fill="#FB275D" />
      <path d={svgPaths.p2c590700} fill="#FFCC00" />
      <path d={svgPaths.pfa68400} fill="#00CA72" />
      <path
        clipRule="evenodd"
        d={svgPaths.p26892b00}
        fill="black"
        fillRule="evenodd"
      />
    </svg>
  );
}

/* ============================================================
   MONDAY.COM CASE STUDY — Responsive Rewrite
   ============================================================ */

export default function CaseStutyMondayConent() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <CaseStudyHero
        logo={<MondayLogo />}
        title="Designing confidence at the moment of commitment,"
        subtitle="when users are ready - but afraid to choose wrong."
        heroImage={imgBoardWithCactusAndPhone15313006711}
        heroImageAlt="monday.com board with phone"
      />

      <CaseStudyBody>
      {/* ── 2. The Challenge ────────────────────────────── */}
      <Section>
        <SectionTitle title="The Challenge" className="!mb-4 md:!mb-6">
          <p className="mb-1">
            The end of a free trial is not a neutral state — it&rsquo;s a moment
            of commitment under uncertainty.
          </p>
          <p>What we saw:</p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Strong engagement during the trial',
            'Sharp drop-off at plan selection',
            'Repeated hesitation between Standard and Pro',
            'Users leaving instead of choosing "wrong"',
          ]}
        />

        <div className="mt-[var(--space-10)] md:mt-[var(--space-14)] flex flex-col gap-1 type-body">
          <p>This wasn&rsquo;t about pricing sensitivity or feature gaps.</p>
          <p>It was about decision confidence.</p>
          <p>They were asking:</p>
    </div>

        <div className="mt-4">
          <InfoBoxGrid
            items={[
              'Which plan fits how we actually work?',
              'What if we outgrow this next month?',
              'Am I locking us into the wrong choice?',
            ]}
          />
      </div>

        <p className="mt-[var(--space-12)] md:mt-[var(--space-16)] type-h2 font-[var(--weight-light)] text-text-primary">
          The challenge was to design a moment that helps users commit without
          regret.
        </p>
      </Section>

      {/* ── 3. Personas ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="Choosing the Right Plan Shouldn't Feel Risky">
          <p>
            After the trial ends, users struggle to understand which tier fits
            their real needs. Each plan supports different workflows, but unclear
            comparisons and hidden limitations make upgrading feel uncertain and
            stressful.
          </p>
        </SectionTitle>

        <PersonaCardGrid
          personas={[
            {
              name: 'David Hope',
              role: 'Team Lead',
              image: imgPersonaDavid,
              quote:
                "Once the trial ended, it wasn't clear which plan actually fit my team's needs. Every tier sounded similar, but the limitations only appeared too late.",
            },
            {
              name: 'Amit Sharon',
              role: 'Operations Manager',
              image: imgPersonaAmit,
              quote:
                'Each plan supports a different workflow, but comparing them felt overwhelming. I was afraid of choosing the wrong tier and blocking my team.',
            },
            {
              name: 'Mick moshes',
              role: 'Startup Founder',
              image: imgPersonaMick,
              quote:
                "Upgrading felt risky. I needed clarity on what I'd gain immediately versus what I'd outgrow in a few months.",
            },
            {
              name: 'Gabriel dd',
              role: 'Project Manager',
              image: imgPersonaGabriel,
              quote:
                "I didn't mind paying, but I needed confidence. It was hard to understand which features were essential for my day-to-day work.",
            },
          ]}
        />
      </Section>

      {/* ── 4. Approach ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="How I Approached the Problem" className="!mb-4 md:!mb-6">
          <p>
            Designing for Decision Anxiety, Not Conversion Metrics. Rather than
            optimizing for click-through or upsell pressure, I focused on:
          </p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Where users paused',
            'Where they hovered without acting',
            'Where they exited the flow entirely',
          ]}
        />

        <div className="mt-[var(--space-12)] md:mt-[var(--space-16)]">
          <InsightBlock label="Key insight:">
            <p className="type-insight-title mb-[var(--space-4)]">
              Abandonment wasn&rsquo;t rejection — it was avoidance.
            </p>
            <p>
              When the perceived cost of a wrong decision felt higher than the
              value of continuing, users chose to leave.
            </p>
            <p className="mt-2">So the problem to solve became:</p>
            <p>
              How do we help users feel safe choosing, even with incomplete
              information?
            </p>
          </InsightBlock>
    </div>
      </Section>

      {/* ── 5. Making Choice Feel Safe ──────────────────── */}
      <Section>
        <SectionTitle title="Making Choice Feel Safe" className="!mb-4 md:!mb-6">
          <p>
            Design Principle: &ldquo;Lower the risk of choosing — not the
            price.&rdquo;
          </p>
          <p>
            Instead of persuasion or incentives, the strategy focused on:
          </p>
        </SectionTitle>

        <InfoBoxGrid
          items={[
            'Clarity over urgency',
            'Context over feature volume',
            'Reversibility over pressure',
          ]}
        />

        <p className="mt-[var(--space-8)] type-body">
          This meant working entirely within existing constraints:
        </p>

        <div className="mt-4">
          <InfoBoxGrid
            items={[
              'No new plans',
              'No pricing changes',
              'No promotional mechanics',
            ]}
          />
    </div>

        <p className="mt-[var(--space-6)] type-body">
          Only clearer decision support.
        </p>
      </Section>

      {/* ── 6. Design Process ───────────────────────────── */}
      <Section>
        <SectionTitle title="Design Process">
          <p>
            Users struggled to choose the right plan after the trial ended. Plan
            names alone (&ldquo;Standard&rdquo;, &ldquo;Pro&rdquo;) didn&rsquo;t
            map clearly to real usage, creating uncertainty, hesitation, and
            downgrade regret.
          </p>
          <p className="mt-2">
            This solution reframes plan selection around actual behavior, not
            abstract feature lists.
          </p>
        </SectionTitle>

        <div className="flex flex-col gap-[var(--space-6)] md:gap-[var(--space-8)]">
          <HypothesisBlock
            number={1}
            title="If users see a plan recommendation based on their own activity, they will feel more confident selecting a plan."
            bullets={[
              'Anchors the decision in personal data',
              'Reduces anxiety at a high-stakes conversion moment',
              'Shifts the product from seller → advisor',
            ]}
          >
            <p>
              Instead of forcing users to self-diagnose their needs, the
              experience analyzes trial usage and surfaces a clear recommendation
              (&ldquo;Based on your activity during the trial&rdquo;). This
              reduces cognitive load and replaces guesswork with reassurance.
            </p>
            <p className="mt-2">
              The &ldquo;Recommended for you&rdquo; label acts as a trust
              signal, guiding users without removing choice.
            </p>
          </HypothesisBlock>

          <HypothesisBlock
            number={2}
            title="If users can visually compare how their usage maps to each plan, they are more likely to understand the value difference."
            bullets={[
              'Makes plan limitations visible before purchase',
              'Prevents accidental under-selection',
              'Turns feature gating into a transparent system, not a surprise',
            ]}
          >
            <p>
              The usage breakdown (&ldquo;Board views&rdquo;, &ldquo;Advanced
              views&rdquo;, &ldquo;Dashboards &amp; workload&rdquo;) translates
              abstract plans into concrete behaviors. Color-coded progress bars
              and plan badges (&ldquo;Standard&rdquo;, &ldquo;Partial&rdquo;,
              &ldquo;Pro&rdquo;) help users instantly see alignment gaps.
            </p>
          </HypothesisBlock>

          <HypothesisBlock
            number={3}
            title="If the recommended plan highlights benefits — not just features — users will perceive higher value and convert faster."
            bullets={[
              'Reframes pricing as value reinforcement',
              'Leverages sunk usage and momentum',
              'Aligns product language with user goals, not internal taxonomy',
            ]}
          >
            <p>
              The Pro plan doesn&rsquo;t just list what&rsquo;s included; it
              explains why it matters (&ldquo;team visibility&rdquo;,
              &ldquo;capacity planning&rdquo;). This connects features to
              outcomes users already experienced during the trial, reinforcing
              that upgrading is a continuation — not a risk.
            </p>
          </HypothesisBlock>
      </div>
      </Section>

      {/* ── 7. Outcome ──────────────────────────────────── */}
      <Section>
        <SectionTitle title="Outcome">
          <p>
            This solution turns plan selection into a guided, data-driven
            decision. By grounding recommendations in real usage, visualizing
            fit, and emphasizing outcomes, users can confidently choose the right
            plan — while the product increases conversion and reduces churn from
            misaligned upgrades.
          </p>
        </SectionTitle>
      </Section>

      {/* ── 8. A/B Test ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="A/B Test: Pro Recommendation Experience">
          <p>
            I&rsquo;ve tested two upgrade experiences — a generic recommendation
            vs. a usage-based personalized recommendation — to measure impact on
            Pro conversion. Results showed the usage-driven experience increased
            trust and led to higher upgrade rates.
          </p>
        </SectionTitle>

        {/* Variant descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-6)] md:gap-[var(--space-8)]">
          <div>
            <h3 className="type-h3 mb-[var(--space-2)]">Variant A</h3>
            <p className="type-body-info">
          Pattern: Recommendation + Feature explanation + Why banner
              <br />
              Mental model: &ldquo;Trust us — Pro is better for you.&rdquo;
        </p>
      </div>
          <div>
            <h3 className="type-h3 mb-[var(--space-2)]">Variant B</h3>
            <p className="type-body-info">
          Pattern: Recommendation + Usage proof + Recommendation
              <br />
              Mental model: &ldquo;Here&rsquo;s evidence — Pro fits how you
              work.&rdquo;
        </p>
      </div>
        </div>

        {/* Variant images */}
        <div className="mt-[var(--space-6)] md:mt-[var(--space-8)]">
          <ImageGrid images={[imgImage190, imgImage189]} columns={2} alt="A/B test variant" />
    </div>

        {/* Results section */}
        <div className="mt-[var(--space-12)] md:mt-[var(--space-16)]">
          <SectionTitle title="Usage-Driven Recommendations Increased Pro Conversions by 35%">
            <p>
              We tested two upgrade experiences — a generic recommendation vs. a
              usage-based personalized recommendation — to measure impact on Pro
              conversion. The usage-driven experience increased conversion from
              4.0% to 5.4%, delivering a 35% relative uplift and higher user
              trust in the upgrade recommendation.
            </p>
          </SectionTitle>
      </div>

        {/* A/B test chart — Mixpanel style */}
        <div className="mt-[var(--space-8)]">
          <CaseStudyImage
            src={imgAbChart}
            alt="A/B test conversion trend chart — Variant A vs Variant B daily cumulative conversion rate"
            className="rounded-lg"
          />
        </div>

        {/* Step 4 / final visual */}
        <div className="mt-[var(--space-8)] bg-[var(--color-gray-600)] rounded-xl p-[var(--space-4)] md:p-[var(--space-8)]">
          <CaseStudyImage
            src={imgStep4}
            alt="A/B test result step 4"
            className="rounded-lg"
          />
        </div>
      </Section>

      {/* ── 9. Visual Guidance ──────────────────────────── */}
      <section
        className="w-full py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)] bg-surface-secondary"
      >
        {/* Title at standard width */}
        <div className="max-w-[var(--content-max-w)] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--content-px-lg)]">
          <SectionTitle title="Helping Users Choose the Right Plan with Visual Guidance">
            <p>
              During the trial end flow, we saw that many users reached the
              pricing screen but struggled to confidently choose a tier. While the
              table showed features and limits, it required high cognitive effort
              to understand the real differences and how each plan fit their
              team&rsquo;s needs. This created hesitation and slowed
              decision-making at a critical conversion moment.
            </p>
          </SectionTitle>
        </div>

        {/* Image at 40% wider container */}
        <div className="max-w-[1720px] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--space-12)]">
          <CaseStudyImage
            src={imgImage195}
            alt="Plan selection interface"
            className="rounded-lg"
          />
        </div>

        {/* Explanatory text */}
        <div className="max-w-[var(--content-max-w)] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--content-px-lg)] mt-[var(--space-8)] md:mt-[var(--space-12)]">
          <div className="type-body">
            <p>
              To reduce friction, we introduced short explainer videos directly in
              the decision flow. The videos visually walk through how each tier
              supports different team sizes, workflows, and scale scenarios. By
              turning abstract feature lists into real usage stories, users can
              quickly understand which plan fits them best, feel more confident in
              their choice, and move forward faster.
            </p>
          </div>
        </div>

        {/* Plan comparison image — wider, cropped 20% from edges */}
        <div className="max-w-[1720px] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--space-12)] mt-[var(--space-8)]">
          <div className="overflow-hidden rounded-lg">
            <img
              src={imgImage196}
              alt="Plan comparison flow"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover scale-[1.25]"
            />
          </div>
        </div>

        {/* Why Standard / Why Pro boxes — under plan comparison image */}
        <div className="max-w-[var(--content-max-w)] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--content-px-lg)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)] md:gap-[var(--space-6)]">
            <div className="bg-[var(--color-gray-400)] rounded-[var(--radius-2xl)] overflow-hidden flex items-center justify-center">
              <LazyVideo
                src={whyStandardVideo}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[var(--color-gray-400)] rounded-[var(--radius-2xl)] overflow-hidden flex items-center justify-center">
              <LazyVideo
                src={whyProVideo}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Promoting Discovery ─────────────────────── */}
      <Section>
        <SectionTitle title="Promoting Discovery Through Value, Not Just Access">
          <p>
            This approach encourages users to try new features by connecting them
            to real, existing behaviors &mdash; not by simply placing them behind a
            paywall. Instead of saying &ldquo;you can&rsquo;t use this&rdquo; it
            shows why this matters for how you already work.
          </p>
          <p>
            By highlighting how a feature improves something users already do
            (like managing dates &rarr; managing time strategy) you create
            curiosity, relevance, and a natural upgrade motivation.
          </p>
          <p>
            The goal isn&rsquo;t pressure &mdash; it&rsquo;s helping users
            recognize, &ldquo;This would actually make my workflow better.&rdquo;
          </p>
        </SectionTitle>
      </Section>

      {/* Discovery images — full-width, stacked */}
      <div className="w-full">
        <FullBleedImage
          src={imgDiscovery212}
          alt="Feature discovery through value — overview"
        />
        <FullBleedImage
          src={imgDiscovery213}
          alt="Feature discovery through value — detail"
        />
      </div>

      <Section>
        <SectionTitle title="Promoted Features That Match How You Already Work">
          <p>
            I designed feature promotion to feel contextual and helpful &mdash;
            not interruptive. By surfacing locked capabilities exactly where users
            naturally need them, the product both highlights premium value and
            educates users on better ways to work.
          </p>
          <p>
            This approach turns feature discovery into a learning moment. Instead
            of pushing upgrades aggressively, it visually emphasizes advanced
            tools (like formulas, timeline, and automation) at the point of
            intent &mdash; making the upgrade feel like a natural next step, not a
            forced decision.
          </p>
        </SectionTitle>
      </Section>

      {/* Promoted features images — full-width, stacked */}
      <div className="w-full">
        <FullBleedImage
          src={imgPromoted214}
          alt="Promoted features matching existing workflow — overview"
        />
        <FullBleedImage
          src={imgPromoted215}
          alt="Promoted features matching existing workflow — detail"
        />
      </div>

      {/* ── 11. Outcome Quote ──────────────────────────── */}
      <QuoteBanner bg="bg-surface-secondary" className="type-display text-center text-text-primary !pb-6 md:!pb-10">
        The feature upgrade experience shifted from being a limitation message
        to a value-driven moment. By highlighting features in context and tying
        them to real user workflows, the upgrade path became clearer, more
        relevant, and more motivating.
      </QuoteBanner>

      {/* ── 12. Final Quote ─────────────────────────────── */}
      <ImageWithQuote
        src={imgImage193}
        alt="monday.com closing"
        preQuote={`"Good monetization UX doesn't push users to pay.`}
        quote='It removes the fear of saying yes״'
        textColorClass="text-text-primary"
      />
      </CaseStudyBody>
    </>
  );
}
