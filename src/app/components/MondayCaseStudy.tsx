import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface MondayCaseStudyProps {
  onBack: () => void;
  onNext: () => void;
}

const SECTIONS = ['Context', 'My role', 'Problems', 'Approach', 'Outcome'];

export function MondayCaseStudy({ onBack, onNext }: MondayCaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <article className="min-h-screen pt-24 pb-28 px-6 md:px-12 lg:px-16">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          {/* Label + title */}
          <p
            className="text-[10px] uppercase tracking-[0.18em] font-medium"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Case Study&ensp;·&ensp;SaaS&ensp;·&ensp;UX Strategy
          </p>
          <h1
            className="mt-3 text-3xl md:text-4xl font-extralight leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Monday.com
          </h1>
          <p
            className="mt-5 text-base md:text-lg font-light leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Full deep dive content coming soon.
          </p>

          {/* Placeholder sections */}
          <div className="mt-16 flex flex-col gap-12">
            {SECTIONS.map((title) => (
              <section key={title}>
                <h2
                  className="text-lg md:text-xl font-normal"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {title}
                </h2>
                <p
                  className="mt-3 text-sm md:text-base font-light"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  Coming soon.
                </p>
              </section>
            ))}
          </div>

          {/* Next study */}
          <div
            className="mt-20 pt-10"
            style={{ borderTop: '1px solid var(--border-subtle)' }}
          >
            <button
              onClick={onNext}
              className="group inline-flex items-center gap-2 text-[13px] font-medium hover:gap-3 transition-all duration-300 cursor-pointer"
              style={{ color: 'var(--text-primary)' }}
            >
              Next: FundGuard deep dive
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </article>
    </CaseStudyLayout>
  );
}
