import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

/* ================================================================
   CaseStudyLayout - Shell for every case study page
   ================================================================
   Provides:
   - Floating back button
   - Full-viewport scroll container for hero + body sections
   - Fade-in animation on mount

   The global header in App.tsx overlays the content so the hero
   section extends to the very top of the viewport.
   ================================================================ */

interface CaseStudyLayoutProps {
  children: ReactNode;
  onBack?: () => void;
}

export function CaseStudyLayout({ children, onBack }: CaseStudyLayoutProps) {
  return (
    <div className="h-dvh relative overflow-hidden bg-surface-primary">
      {/* Back button - floating */}
      <motion.button
        onClick={() => (onBack ? onBack() : window.history.back())}
        className="absolute top-5 left-6 md:left-12 lg:left-16 z-50 group flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-light transition-all duration-300 cursor-pointer hover:opacity-80"
        style={{ color: 'var(--text-primary)', backgroundColor: 'var(--surface-secondary)' }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        <span>Back</span>
      </motion.button>

      {/* Scroll container - native smooth scrolling, no snap */}
      <div
        className="h-full overflow-y-auto animate-[fadeIn_0.8s_ease_0.5s_both]"
      >
        {children}
      </div>
    </div>
  );
}
