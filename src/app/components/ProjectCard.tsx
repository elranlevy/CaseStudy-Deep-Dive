import { motion } from 'motion/react';

/* ================================================================
   ProjectCard — Home page project showcase card
   ================================================================
   Uses design tokens for all colors, spacing, typography, and radii.
   Lives in the snap-scroll homepage grid.
   ================================================================ */

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  backgroundColor?: string;
  imagePosition?: 'left' | 'right';
  onClick?: () => void;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  backgroundColor = 'var(--surface-primary)',
  imagePosition = 'right',
  onClick,
}: ProjectCardProps) {
  return (
    <div
      className="h-screen flex items-center justify-center px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--content-px-lg)] snap-start snap-always"
      style={{ backgroundColor }}
    >
      <div
        className={`flex flex-col-reverse ${
          imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center justify-center gap-[var(--space-8)] lg:gap-[var(--space-12)] xl:gap-[var(--space-20)] w-full max-w-7xl`}
      >
        {/* Content */}
        <motion.div
          className="flex flex-col gap-[var(--space-4)] md:gap-[var(--space-6)] w-full max-w-[508px] px-[var(--space-4)] md:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Title label */}
          <div className="flex items-center justify-start p-[var(--space-2)]">
            <p className="type-label !normal-case">
              {title}
            </p>
          </div>

          {/* Description */}
          <div className="flex items-center justify-center p-[var(--space-2)]">
            <p className="font-[var(--weight-extralight)] text-text-primary text-[22px] md:text-[28px] leading-tight tracking-[var(--tracking-tight)]">
              {description}
            </p>
          </div>

          {/* CTA button */}
          <div className="flex flex-col items-start p-[var(--space-2)] w-full max-w-[217px]">
            <button
              onClick={onClick}
              className="bg-brand hover:bg-brand-hover transition-colors duration-[var(--duration-normal)] w-full h-[var(--button-height)] flex items-center justify-center px-[var(--button-px)] py-[var(--space-6)] rounded-[var(--button-radius)]"
            >
              <p className="text-text-inverse text-[var(--text-body)]">
                Read case study
              </p>
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative w-full max-w-[90%] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain max-h-[400px] md:max-h-[500px] lg:max-h-[700px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
