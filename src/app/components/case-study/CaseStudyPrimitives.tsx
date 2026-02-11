import { type ReactNode, useRef, useEffect, useState, useCallback } from 'react';

/* ============================================================
   Case Study Primitives — Responsive building blocks
   ============================================================
   All primitives consume design tokens from tokens.css via:
   - CSS custom properties: var(--token-name)
   - Tailwind utilities mapped in theme.css: text-text-primary, bg-surface-secondary, etc.
   - Typography utility classes: type-display, type-h2, type-body, type-label, etc.

   Layout contract:
     Parent (CaseStudyLayout) provides a snap-y mandatory container.
     CaseStudyHero is one full-screen snap page.
     CaseStudyBody wraps the rest — it snaps to start, then
     scrolls normally like a document.
   ============================================================ */

// ── Scroll-down mouse indicator ──────────────────────────────
function ScrollMouse() {
  return (
    <div className="flex flex-col items-center gap-1 opacity-60">
      <svg
        width="28"
        height="42"
        viewBox="0 0 28 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="26"
          height="40"
          rx="13"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="14" cy="12" r="3" fill="currentColor">
          <animate
            attributeName="cy"
            values="12;22;12"
            dur="1.8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
          />
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="1.8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
          />
        </circle>
      </svg>
    </div>
  );
}

// ── Case study hero (one snap page) ──────────────────────────
export function CaseStudyHero({
  logo,
  title,
  subtitle,
  heroImage,
  heroImageAlt = '',
  heroImageClassName,
}: {
  logo: ReactNode;
  title: string;
  subtitle?: string;
  heroImage: string;
  heroImageAlt?: string;
  heroImageClassName?: string;
}) {
  return (
    <section className="w-full min-h-full bg-surface-primary flex flex-col items-center px-[var(--content-px)] md:px-[var(--content-px-md)] pt-[15%] pb-[var(--space-4)] gap-2 md:gap-3">
      {/* Logo */}
      <div className="w-40 md:w-52 lg:w-64">{logo}</div>

      {/* Title & subtitle — Figma: Poppins Light 24px, LH normal, text-black */}
      <div className="text-center max-w-[var(--content-hero-max-w)] flex flex-col gap-0">
        <h1 className="type-hero-title">
          {title}
        </h1>
        {subtitle && (
          <p className="type-hero-title">
            {subtitle}
          </p>
        )}
      </div>

      {/* Hero image — above the fold, prioritize loading */}
      <div className={heroImageClassName ?? "w-full max-w-3xl lg:max-w-4xl flex-1 min-h-0 flex items-start mt-[var(--space-4)]"}>
        <img
          src={heroImage}
          alt={heroImageAlt}
          fetchPriority="high"
          decoding="async"
          className="w-full h-auto object-contain rounded-[var(--radius-2xl)]"
        />
      </div>

      {/* Scroll indicator */}
      <ScrollMouse />
    </section>
  );
}

// ── Body wrapper (snaps to start, then free-scrolls) ─────────
export function CaseStudyBody({ children }: { children: ReactNode }) {
  return (
    <div className="bg-surface-primary [&>*:first-child]:pt-[var(--space-1)] [&>*:first-child]:md:pt-[var(--space-6)]">
      {children}
    </div>
  );
}

// ── Section wrapper ─────────────────────────────────────────
export function Section({
  children,
  className = '',
  bg = 'bg-surface-primary',
}: {
  children: ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <section
      className={`w-full py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)] ${bg} ${className}`}
    >
      <div className="max-w-[var(--content-max-w)] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--content-px-lg)]">
        {children}
      </div>
    </section>
  );
}

// ── Section title + optional body ────────────────────────────
export function SectionTitle({
  title,
  children,
  className = '',
  titleClassName,
  bodyClassName,
}: {
  title: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={`flex flex-col gap-[var(--space-4)] md:gap-[var(--space-6)] mb-[var(--space-8)] md:mb-[var(--space-12)] ${className}`}>
      <h2 className={titleClassName ?? "type-h2"}>
        {title}
      </h2>
      {children && (
        <div className={bodyClassName ?? "type-body"}>
          {children}
        </div>
      )}
    </div>
  );
}

// ── Info-box grid ────────────────────────────────────────────
export function InfoBoxGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-3)] md:gap-[var(--space-4)]">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-surface-secondary px-[var(--space-4)] py-[var(--space-3)] md:px-[var(--space-8)] md:py-[var(--space-4)] flex items-center"
        >
          <p className="type-body-info">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

// ── Persona card ─────────────────────────────────────────────
interface Persona {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export function PersonaCardGrid({
  personas,
  nameClassName,
  roleClassName,
  quoteClassName,
}: {
  personas: Persona[];
  nameClassName?: string;
  roleClassName?: string;
  quoteClassName?: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)] md:gap-[var(--space-6)] lg:gap-[var(--space-8)]">
      {personas.map((p, i) => (
        <div
          key={i}
          className="bg-surface-secondary flex flex-col items-center gap-[var(--space-6)] md:gap-[var(--space-8)] p-[var(--card-px)] md:p-[var(--card-px-md)] overflow-hidden"
        >
          <div className="flex flex-col items-center gap-[var(--space-3)] md:gap-[var(--space-6)]">
            <p className={nameClassName ?? "type-label"}>
              {p.name}
            </p>
            {p.role && (
              <p className={roleClassName ?? "type-h2 text-black text-center"}>
                {p.role}
              </p>
            )}
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              decoding="async"
              className="w-[var(--avatar-size)] h-[var(--avatar-size)] md:w-[var(--avatar-size-md)] md:h-[var(--avatar-size-md)] rounded-[var(--avatar-radius)] object-cover"
            />
          </div>
          <p className={quoteClassName ?? "type-body text-center max-w-[339px]"}>
            &ldquo;{p.quote}&rdquo;
          </p>
        </div>
      ))}
    </div>
  );
}

// ── Hypothesis block ─────────────────────────────────────────
interface HypothesisProps {
  number: number;
  title: string;
  children: ReactNode;
  bullets?: string[];
  whyLabel?: string;
  titleClassName?: string;
  bodyClassName?: string;
  whyLabelClassName?: string;
}

export function HypothesisBlock({
  number,
  title,
  children,
  bullets,
  whyLabel = 'Why it works:',
  titleClassName,
  bodyClassName,
  whyLabelClassName,
}: HypothesisProps) {
  return (
    <div className="bg-surface-secondary p-[var(--card-px)] md:p-[var(--card-px-md)] lg:p-[var(--space-12)] flex flex-col gap-[var(--space-3)] md:gap-[var(--space-4)]">
      <p className="type-caption">Hypothesis {number}</p>
      <h3 className={titleClassName ?? "type-h3"}>
        {title}
      </h3>
      <div className={bodyClassName ?? "type-body-info"}>
        {children}
      </div>
      {bullets && bullets.length > 0 && (
        <>
          <p className={whyLabelClassName ?? "type-caption font-[var(--weight-medium)]"}>
            {whyLabel}
          </p>
          <ul className="list-disc pl-5 space-y-1">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="type-body-info"
              >
                {b}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

// ── Insight / callout box ────────────────────────────────────
export function InsightBlock({
  label = 'Key insight:',
  children,
  labelClassName,
  contentClassName,
}: {
  label?: string;
  children: ReactNode;
  labelClassName?: string;
  contentClassName?: string;
}) {
  return (
    <div className="bg-surface-secondary p-[var(--card-px)] md:p-[var(--card-px-md)] lg:p-[var(--space-12)]">
      {label && (
        <p className={labelClassName ?? "type-caption mb-[var(--space-2)]"}>{label}</p>
      )}
      <div className={contentClassName ?? "type-body-info"}>
        {children}
      </div>
    </div>
  );
}

// ── Responsive image ─────────────────────────────────────────
export function CaseStudyImage({
  src,
  alt = '',
  className = '',
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`w-full h-auto object-cover ${className}`}
    />
  );
}

// ── Full-bleed image (extends beyond content max-width) ──────
export function FullBleedImage({
  src,
  alt = '',
  className = '',
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
    </div>
  );
}

// ── Quote banner ─────────────────────────────────────────────
export function QuoteBanner({
  children,
  bg = 'bg-surface-secondary',
  className,
}: {
  children: ReactNode;
  bg?: string;
  className?: string;
}) {
  return (
    <section className={`w-full py-[var(--space-14)] md:py-[var(--space-20)] lg:py-[var(--space-28)] ${bg}`}>
      <div className="max-w-[var(--content-max-w)] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--content-px-lg)]">
        <p className={className ?? "type-display text-center text-text-primary"}>
          {children}
        </p>
      </div>
    </section>
  );
}

// ── Image with overlaid quote ────────────────────────────────
export function ImageWithQuote({
  src,
  alt = '',
  preQuote,
  quote,
  textColorClass = 'text-white',
  preQuoteClassName,
  quoteClassName,
}: {
  src: string;
  alt?: string;
  preQuote?: string;
  quote: string;
  textColorClass?: string;
  preQuoteClassName?: string;
  quoteClassName?: string;
}) {
  const overlayClass = textColorClass === 'text-white' ? 'text-on-image' : textColorClass === 'text-text-primary' ? 'text-on-image-dark' : '';

  return (
    <div className="relative w-full overflow-hidden">
      <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 flex items-center">
        <div className={`ml-auto mr-1 md:mr-[var(--space-12)] lg:mr-[var(--space-20)] max-w-[38%] md:max-w-sm lg:max-w-md ${overlayClass}`}>
          {preQuote && (
            <p className={preQuoteClassName ?? `text-[10px] leading-3 md:text-base md:leading-7 mb-1 md:mb-[var(--space-2)] tracking-[var(--tracking-body)] font-[var(--weight-light)]`}>
              {preQuote}
            </p>
          )}
          <p className={quoteClassName ?? `text-xs leading-4 md:text-3xl md:leading-snug lg:text-[var(--text-display)] lg:leading-[var(--leading-snug)] font-[var(--weight-light)] tracking-[var(--tracking-wide)]`}>
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Skill / demo card grid ───────────────────────────────────
interface SkillCard {
  label: string;
  title: string;
  description?: string;
}

export function SkillCardGrid({
  cards,
  columns = 2,
}: {
  cards: SkillCard[];
  columns?: 2 | 3;
}) {
  const hasDescriptions = cards.some((c) => c.description);
  const colClass =
    columns === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2';

  return (
    <div className={`grid ${colClass} gap-[var(--space-3)] md:gap-[var(--space-4)]`}>
      {cards.map((c, i) => (
        <div
          key={i}
          className={
            hasDescriptions
              ? 'bg-surface-secondary p-[var(--space-8)] md:p-[50px] flex flex-col gap-[var(--space-5)] md:gap-[34px]'
              : 'bg-surface-secondary p-[var(--card-px)] md:px-[50px] md:py-[var(--space-12)] flex flex-col gap-[var(--space-3)] md:gap-[var(--space-5)]'
          }
        >
          <p className="type-label">
            {c.label}
          </p>
          {hasDescriptions ? (
            <>
              <p className="type-insight-title">
                {c.title}
              </p>
              {c.description && (
                <p className="type-body-info">
                  {c.description}
                </p>
              )}
            </>
          ) : (
            <p className="type-body">
              {c.title}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Image grid (responsive columns) ──────────────────────────
export function ImageGrid({
  images,
  columns = 2,
  alt = '',
}: {
  images: string[];
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  alt?: string;
}) {
  const colClass =
    columns === 1
      ? 'grid-cols-1'
      : columns === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : columns === 3
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : columns === 4
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            : columns === 5
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
              : columns === 6
                ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
                : 'grid-cols-3 sm:grid-cols-4 lg:grid-cols-7';

  return (
    <div className={`grid ${colClass} gap-[var(--space-3)] md:gap-[var(--space-4)]`}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${alt} ${i + 1}`}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover rounded-[var(--radius-lg)]"
        />
      ))}
    </div>
  );
}

// ── Image Carousel — slideshow with chevrons, autoplay & dots ─
export function ImageCarousel({
  images,
  alt = '',
  autoPlayMs = 4000,
}: {
  images: string[];
  alt?: string;
  /** Time between auto-advances in ms (0 = disabled) */
  autoPlayMs?: number;
}) {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      setCurrent(((idx % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (!autoPlayMs || paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, autoPlayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlayMs, paused, total]);

  // Touch / swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      dx < 0 ? next() : prev();
    }
  };

  return (
    <div
      className="relative w-full select-none group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide track — capped to 70vh so one slide fits in view */}
      <div className="overflow-hidden rounded-[var(--radius-lg)] max-h-[70vh]">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0 flex items-center justify-center">
              <img
                src={src}
                alt={`${alt} ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="max-h-[70vh] w-auto mx-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left chevron */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/50 cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right chevron */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/50 cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* Bullet pagination */}
      <div className="flex justify-center gap-2 mt-4 md:mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? 'w-6 h-2.5 bg-text-primary'
                : 'w-2.5 h-2.5 bg-text-primary/30 hover:bg-text-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Lazy Video — only loads & plays when visible ─────────────
export function LazyVideo({
  src,
  className = '',
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={className}
        />
      ) : (
        <div className={className} />
      )}
    </div>
  );
}
