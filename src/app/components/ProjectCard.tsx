import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/* ================================================================
   ProjectCard - Elegant project showcase card
   ================================================================
   Inspired by natalielabel.com: horizontal layout with tags,
   subtle hover effects, and a clean text CTA.
   ================================================================ */

interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  imageSrc: string;
  tags?: string[];
  imagePosition?: 'left' | 'right';
  onClick?: () => void;
  /** @deprecated kept for backward compat - use tags instead */
  backgroundColor?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  imageSrc,
  tags = [],
  imagePosition = 'right',
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      id={id}
      className="group cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div
        className={`flex flex-col ${
          imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center gap-8 lg:gap-12 rounded-2xl p-6 md:p-10 lg:p-12 transition-colors duration-500`}
        style={{ backgroundColor: 'var(--surface-secondary)' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = document.documentElement.classList.contains('dark') ? '#222830' : '#ececec')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--surface-secondary)')}
      >
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-4 md:gap-5 w-full">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-[0.15em] px-3 py-1 rounded-full"
                  style={{
                    color: 'var(--text-tertiary)',
                    backgroundColor: 'var(--tag-bg)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3
            className="text-xl md:text-2xl lg:text-3xl font-extralight leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="text-sm md:text-base font-light leading-relaxed max-w-md"
            style={{ color: 'var(--text-secondary)' }}
          >
            {description}
          </p>

          {/* CTA */}
          <div className="mt-2">
            <span
              className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300"
              style={{ color: 'var(--text-primary)' }}
            >
              Read Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full overflow-hidden rounded-xl">
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain max-h-[350px] md:max-h-[450px] lg:max-h-[500px] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </motion.div>
  );
}
