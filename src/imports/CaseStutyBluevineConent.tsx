/* ── Persona avatars ── */
import imgPersonaJason from 'figma:asset/f27516176db855022a449d2660e3b43e34d07bf8.png';
import imgPersonaEmily from 'figma:asset/b551caf1a50da17c794f41c2b771e5502c81c73e.png';
import imgPersonaOlivia from 'figma:asset/d0400c167c2b5599f72e19a01b70f51fb477fb65.png';
import imgPersonaDaniel from 'figma:asset/67b4aa35e2f440f63931e72e888327a387bbbe47.png';

/* ── Hero ── */
import imgChatGptImageFeb52026063301Pm1 from 'figma:asset/88da6de6a1b666a471ee6930a733125a1b7e710e.png';

/* ── Onboarding screens ── */
import imgImage184 from 'figma:asset/07a42507cb22cafb6d39b51c9254b4d2088abbb3.png';
import imgImage185 from 'figma:asset/0951004d47003d3e5824dd6b6ee4a2a692f1c14f.png';
import imgImage186 from 'figma:asset/37c8c497c64b1de3f237409d508123bfd7436060.png';
import imgImage187 from 'figma:asset/f3148055a59a7b55f2acac8549dd0c0e7c37cac9.png';
import imgImage188 from 'figma:asset/04f3980e2187e4fb278f0a8265c12d38813fc065.png';

/* ── Dashboard screens (new full-width images) ── */
import imgDash216 from 'figma:asset/13fc9b9e5c9377cfe6a401b34f701652c82b98ec.png';
import imgDash217 from 'figma:asset/28aa4fa845afbbe3f48e5a21092fd68ea973afb8.png';
import imgDash218 from 'figma:asset/7a6b7e244b5fadc023b3ea45934532d38efdffb1.png';
import imgDash219 from 'figma:asset/f0d3902cc9f674d2fe46bfca159e4323568fd012.png';

/* ── Mobile app screens ── */
import imgBitmap8 from 'figma:asset/a37a41cda8ef0c22ecb82a85fdcba7051dbf554a.png';
import imgBitmap9 from 'figma:asset/2805b683f16274606e9e32d658122138e42b2aee.png';
import imgBitmap10 from 'figma:asset/b52e381d1b22234a4c307574ab00c59247e781a6.png';
import imgBitmap11 from 'figma:asset/83e160d336cf76eea4aa1619a24dc7300a3a6c28.png';
import imgBitmap12 from 'figma:asset/53c05c1be4462113e764aa95fb7e33fcb398f036.png';
import imgBitmap13 from 'figma:asset/d959283b2c50d7097e3cd5768578fbf8db2e9c9a.png';
import imgBitmap14 from 'figma:asset/10de026a1d74bca1f10e8361c239adfb96149d5c.png';
import imgBitmap15 from 'figma:asset/0f1e3edf99b5e603e7f703697ff0be16c8a54f99.png';
import imgBitmap16 from 'figma:asset/5b9c9a4703745bbc2e0d08a2aabdd1350adcf0db.png';
import imgBitmap17 from 'figma:asset/90cf02f5ed4d1aa6db3603c7ceeda8b714cf8e54.png';
import imgBitmap18 from 'figma:asset/16d08698084d1f89eaa9380a2b77ecfc126e406f.png';
import imgBitmap19 from 'figma:asset/61927fc5c0ba765d0b0f702a42c55017c556c82b.png';

/* ── Design System ── */
import imgDesignSystem1 from 'figma:asset/1a677e3eb4dc173bbc95d4d11aea52db31f5e306.png';
import imgDesignSystem2 from 'figma:asset/533b4e1dcf537155dc3e0e4bbc8d68f2b6f1898e.png';

/* ── Footer ── */
import imgImage194 from 'figma:asset/3fa38104c924f2cbe993eee7323661a3891a0092.png';

import {
  Section,
  SectionTitle,
  PersonaCardGrid,
  InsightBlock,
  QuoteBanner,
  ImageWithQuote,
  CaseStudyHero,
  CaseStudyBody,
  ImageGrid,
  ImageCarousel,
} from '@/app/components/case-study/CaseStudyPrimitives';

/* ── Bluevine Logo (text placeholder) ── */
function BluevineLogo() {
  return (
    <p className="text-3xl md:text-4xl font-bold text-bluevine tracking-tight w-full text-center">
      bluevine
    </p>
  );
}

/* ============================================================
   BLUEVINE CASE STUDY — Responsive Rewrite
   ============================================================ */

export default function CaseStutyBluevineConent() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <CaseStudyHero
        logo={<BluevineLogo />}
        title="Redesigning lending and banking for Bluevine means turning complex, high-risk financial moments into fast, clear, and confidence-driven decisions for businesses."
        heroImage={imgChatGptImageFeb52026063301Pm1}
        heroImageAlt="Bluevine banking experience"
        heroImageClassName="w-full max-w-3xl lg:max-w-4xl flex items-center [&>img]:max-h-[40vh]"
      />

      <CaseStudyBody>
      {/* ── 2. The Challenge (body weight 400 — Figma exception) ── */}
      <Section>
        <SectionTitle title="The Challenge">
          <p>
            Designing a new lending and banking experience for Bluevine is about
            removing complexity from financially sensitive moments and replacing
            it with clarity, speed, and confidence. The goal is to transform
            traditionally heavy processes into simple, guided decisions that
            businesses can trust instantly&mdash;so managing money feels
            controlled, predictable, and effortlessly actionable.
          </p>
        </SectionTitle>
      </Section>

      {/* ── 3. Understanding Pain Points ────────────────── */}
      <Section>
        <SectionTitle
          title="Understanding the Real Financial Pain Behind Small Business Decisions"
          bodyClassName="type-body"
        >
          <p>
            Before designing solutions, I needed to deeply understand where
            business owners feel unsupported, stressed, or forced to make risky
            financial decisions. By uncovering these pain points, I could focus
            the experience on reducing uncertainty, increasing control, and
            building real financial confidence.
          </p>
        </SectionTitle>

        <PersonaCardGrid
          personas={[
            {
              name: 'Jason Miller',
              role: 'Owner, Neighborhood Auto Repair',
              image: imgPersonaJason,
              quote:
                'Running payroll, paying suppliers, and managing cash flow felt like guessing. Without real banking support, every month felt like I was one mistake away from falling behind.',
            },
            {
              name: 'Emily Carter',
              role: 'Founder, Boutique Marketing Studio',
              image: imgPersonaEmily,
              quote:
                'I had revenue coming in, but no guidance on how to manage it. I needed a bank that understood business timing - not just balances.',
            },
            {
              name: 'Olivia Bennett',
              role: 'Owner, Online Home Decor Store',
              image: imgPersonaOlivia,
              quote:
                "I wasn't looking for loans all the time - I wanted confidence. Tools, insights, and support that help me plan, not just react.",
            },
            {
              name: 'Daniel Brooks',
              role: 'Co-Owner, Local Food Distribution Company',
              image: imgPersonaDaniel,
              quote:
                'When inventory costs changed, I had nowhere to turn for fast financial help. Traditional banks were too slow for real business decisions.',
            },
          ]}
          nameClassName="type-label"
          roleClassName="type-h2 text-text-primary text-center"
        />
      </Section>

      {/* ── 4. Key Insights ─────────────────────────────── */}
      <Section>
        <SectionTitle title="Turning User Pain Into Product Direction" bodyClassName="type-body">
          <p>
            Before designing solutions, I needed to deeply understand where
            business owners feel unsupported, stressed, or forced to make risky
            financial decisions. By uncovering these pain points, I could focus
            the experience on reducing uncertainty, increasing control, and
            building real financial confidence.
          </p>
        </SectionTitle>

        <div className="flex flex-col gap-[var(--space-4)] md:gap-[var(--space-6)]">
          <InsightBlock label="Key insight 1:" labelClassName="type-caption" contentClassName="type-body-info">
            <p className="type-insight-title mb-2">
              Speed equals survival
            </p>
            <p>
              When cash flow decisions take days, businesses already lose
              opportunities or fall behind on obligations.
            </p>
          </InsightBlock>

          <InsightBlock label="Key insight 2:" labelClassName="type-caption" contentClassName="type-body-info">
            <p className="type-insight-title mb-2">
              Uncertainty is more stressful than cost
            </p>
            <p>
              Not knowing if or when funds will be available creates more
              anxiety than interest rates or fees.
            </p>
          </InsightBlock>

          <InsightBlock label="Key insight 3:" labelClassName="type-caption" contentClassName="type-body-info">
            <p className="type-insight-title mb-2">
              Business context is missing in traditional banking
            </p>
            <p>
              Small businesses need tools that understand revenue cycles,
              seasonality, and supplier timing.
            </p>
          </InsightBlock>

          <InsightBlock label="Key insight 4:" labelClassName="type-caption" contentClassName="type-body-info">
            <p className="type-insight-title mb-2">
              Decision confidence is a product feature
            </p>
            <p>
              Clear status, predictable outcomes, and transparent requirements
              matter as much as approval itself.
            </p>
          </InsightBlock>

          <InsightBlock label="Key insight 5:" labelClassName="type-caption" contentClassName="type-body-info">
            <p className="type-insight-title mb-2">
              Owners don&rsquo;t want &ldquo;more banking,&rdquo; they want
              control
            </p>
            <p>
              The goal isn&rsquo;t more features &mdash; it&rsquo;s fewer
              unknowns and faster, safer actions.
            </p>
          </InsightBlock>
        </div>
      </Section>

      {/* ── 5. Onboarding ─────────────────────────────────── */}
      <Section>
        <SectionTitle title="Fast, Frictionless Onboarding" bodyClassName="type-body">
          <p>
            Getting started should feel as simple as running your business. The
            onboarding process is designed to minimize steps, reduce manual
            input, and guide users clearly from signup to account
            readiness&mdash;so they can open an account in minutes, not days.
          </p>
        </SectionTitle>

        <ImageCarousel
          images={[imgImage184, imgImage185, imgImage186, imgImage187, imgImage188]}
          alt="Onboarding step"
          autoPlayMs={4000}
        />
      </Section>

      {/* ── 6. Dashboard ────────────────────────────────── */}
      <Section>
        <SectionTitle title="From Setup to Full Financial Control" bodyClassName="type-body">
          <p>
            Once onboarding is complete, the dashboard becomes the
            business&rsquo;s financial command center. Every critical action
            &mdash; cash visibility, payments, transfers, credit access, and
            reporting &mdash; is designed to be immediate, clear, and
            actionable. Instead of searching for information or waiting on
            support, business owners can monitor performance, move money, and
            make confident decisions in real time.
          </p>
        </SectionTitle>
      </Section>

      <div className="max-w-[1331px] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--space-12)] pb-[var(--space-12)] md:pb-[var(--space-16)]">
        <ImageCarousel
          images={[imgDash216, imgDash217, imgDash218, imgDash219]}
          alt="Dashboard screen"
          autoPlayMs={4000}
        />
      </div>

      {/* ── 7. Mobile App ───────────────────────────────── */}
      <Section>
        <SectionTitle title="Extending Full Control Into a Native Experience" bodyClassName="type-body">
          <p>
            I designed a native mobile app to give business owners full
            financial control from anywhere. The experience allows users to
            monitor cash flow, send payments, access credit, and respond to
            financial changes in real time &mdash; turning banking from a place
            you go into a tool that moves with your business.
          </p>
        </SectionTitle>

        <ImageGrid
          images={[
            imgBitmap8,
            imgBitmap19,
            imgBitmap18,
            imgBitmap14,
            imgBitmap12,
            imgBitmap11,
            imgBitmap10,
            imgBitmap9,
            imgBitmap15,
            imgBitmap13,
            imgBitmap16,
            imgBitmap17,
          ]}
          columns={4}
          alt="Mobile app screen"
        />
      </Section>

      {/* ── 8. Design System ────────────────────────────── */}
      <Section>
        <SectionTitle title="Designing for Consistency at Global Scale" bodyClassName="type-body">
          <p>
            To support product teams working across regions and time zones, I
            designed a scalable design system focused on clarity, reuse, and
            speed. The system standardizes core components, interaction
            patterns, and visual language &mdash; enabling teams to build faster
            while maintaining a consistent user experience.
          </p>
        </SectionTitle>

        <ImageGrid
          images={[imgDesignSystem1, imgDesignSystem2]}
          columns={2}
          alt="Design system"
        />
      </Section>

      {/* ── 9. Outcome Quote ────────────────────────────── */}
      <QuoteBanner className="type-display text-center text-text-primary">
        The improved experience led to a significant increase in product
        adoption and engagement, driving a 170% growth in usage. By reducing
        friction, increasing clarity, and giving users faster financial control,
        the product shifted from a functional tool to a daily business
        essential.
      </QuoteBanner>

      {/* ── 10. Final Quote ──────────────────────────────── */}
      <ImageWithQuote
        src={imgImage194}
        alt="Bluevine insight"
        preQuote={`"When users clearly understand what will happen next, It makes them:`}
        quote='they move faster, make better decisions, and rely on the product more often"'
      />
      </CaseStudyBody>
    </>
  );
}
