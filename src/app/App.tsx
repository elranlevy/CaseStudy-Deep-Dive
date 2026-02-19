import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { ProjectCard } from '@/app/components/ProjectCard';

import { ContactPage } from '@/app/components/ContactPage';
import { FundguardCaseStudy } from '@/app/components/FundguardCaseStudy';
import { BitCaseStudy } from '@/app/components/BitCaseStudy';
import { XtreamIOCaseStudy } from '@/app/components/XtreamIOCaseStudy';
import { MondayCaseStudy } from '@/app/components/MondayCaseStudy';
import { BluevineCaseStudy } from '@/app/components/BluevineCaseStudy';

/* -- Project images ------------------------------------------------ */
import imgMacStudio from 'figma:asset/4decb3fa846a4088c678f19d989b02718036933a.png';
import imgIPhone15Pro from 'figma:asset/21d1360edf0132c07e6253991afe1a55ee6a2bf4.png';
import imgIPadMini from 'figma:asset/8b112128be2070541f71d6d357666b3c210840ca.png';
import imgMondayMacBook from 'figma:asset/0b015f0f176342d0f8f762e05031909f478fb58f.png';
import imgBluevinePhones from 'figma:asset/f54f4c1a2742d29249554b7c7a0e1bb0d76424ff.png';

/* -- About photo --------------------------------------------------- */
import imgPhoto from 'figma:asset/b3b8e05334419d62db96917a5fffa3ff2c99440e.png';
import imgPhotoCircle from '@/assets/elran-portrait-circle.png';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const [currentPage, setCurrentPage] = useState<
    'home' | 'contact' | 'fundguard' | 'bit' | 'xtreamio' | 'monday' | 'bluevine'
  >('home');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  /* -- Navigation -------------------------------------------------- */
  const navigateTo = (page: typeof currentPage) => {
    window.history.pushState({ page }, '');
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  const navigateBackToProject = (projectId: string) => {
    window.history.pushState({ page: 'home' }, '');
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById(projectId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  };

  useEffect(() => {
    window.history.replaceState({ page: 'home' }, '');

    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  /* -- Work link handler (scrolls on home, navigates on other pages) */
  const handleWorkClick = () => {
    setMobileMenuOpen(false);
    if (currentPage === 'home') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo('home');
      setTimeout(() => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  /* -- Page content renderer --------------------------------------- */
  const renderPageContent = () => {
    switch (currentPage) {
      case 'contact':
        return <ContactPage />;
      case 'fundguard':
        return <FundguardCaseStudy onNextStudy={() => navigateTo('monday')} onBack={() => navigateBackToProject('project-fundguard')} />;
      case 'bit':
        return <BitCaseStudy onNextStudy={() => navigateTo('bluevine')} onBack={() => navigateBackToProject('project-bit')} />;
      case 'xtreamio':
        return <XtreamIOCaseStudy onNextStudy={() => navigateTo('fundguard')} onBack={() => navigateBackToProject('project-xtreamio')} />;
      case 'monday':
        return <MondayCaseStudy onNextStudy={() => navigateTo('bit')} onBack={() => navigateBackToProject('project-monday')} />;
      case 'bluevine':
        return <BluevineCaseStudy onNextStudy={() => navigateTo('xtreamio')} onBack={() => navigateBackToProject('project-bluevine')} />;
      default:
        return renderHomePage();
    }
  };

  /* ================================================================
     HOME PAGE CONTENT
     ================================================================ */
  const renderHomePage = () => (
    <>
      {/* -- About / Hero Section ----------------------------------- */}
      <section className="relative min-h-screen pt-20 pb-20 px-6 md:px-12 lg:px-16 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
          {/* Mobile Photo - circular, above text */}
          <motion.div
            className="lg:hidden flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden">
              <img
                src={imgPhotoCircle}
                alt="Elran Levy"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1 flex flex-col gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          >
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extralight leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Hey, I'm Elran Levy
            </h2>
            <p
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: 'var(--text-primary)' }}
            >
              Lead Product Designer with a passion for simplifying complex problems.
            </p>
            <p
              className="text-sm md:text-base font-light leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Clarity, trust, and usability are at the core of every decision I make. I believe
              that great design should simplify complex domains without dumbing them down - it
              should be intuitive, impactful, and built for real user needs.
            </p>
            <div className="mt-3 flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/elran-levy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-50 transition-opacity duration-300"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:levy.elran@gmail.com"
                className="hover:opacity-50 transition-opacity duration-300"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          {/* Desktop Photo - rectangular, on the right */}
          <motion.div
            className="hidden lg:block flex-1 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          >
            <img
              src={imgPhoto}
              alt="Elran Levy"
              className="w-full h-auto object-cover rounded-xl"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[22px] h-[36px] rounded-full flex items-start justify-center pt-2"
            style={{ border: '1.5px solid var(--scroll-indicator-border)' }}
          >
            <div
              className="w-[3px] h-[6px] rounded-full"
              style={{ backgroundColor: 'var(--scroll-indicator-dot)' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* -- Quote Section ------------------------------------------ */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: 'var(--surface-secondary)' }}>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p
            className="font-extralight leading-snug italic"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--text-primary)',
              fontSize: 'clamp(1.5rem, 3vw, 2.75rem)',
            }}
          >
            Good design is as little design as possible
          </p>
          <p
            className="mt-6 text-sm font-light tracking-wider"
            style={{ color: 'var(--text-secondary)' }}
          >
            - Dieter Rams
          </p>
        </motion.div>
      </section>

      {/* -- Selected Work ------------------------------------------ */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16" id="work">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: 'var(--text-tertiary)' }}
            >
              selected work
            </p>
            <p
              className="text-base md:text-lg font-light mb-16 max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              Let's dive into details with a selection of my recent work
            </p>
          </motion.div>

          <div className="flex flex-col gap-10 md:gap-14">
            {/* Fundguard */}
            <ProjectCard
              id="project-fundguard"
              title="Fundguard"
              description="Turning Operational Complexity into Clear, Actionable Systems. Designing scalable workflows for investment operations teams."
              imageSrc={imgMacStudio}
              tags={['enterprise fintech', 'B2B']}
              imagePosition="right"
              onClick={() => navigateTo('fundguard')}
            />

            {/* Monday.com */}
            <ProjectCard
              id="project-monday"
              title="monday.com"
              description="Designing monetization and conversion experiences for a work management platform used by millions of users worldwide."
              imageSrc={imgMondayMacBook}
              tags={['work management', 'monetization']}
              imagePosition="left"
              onClick={() => navigateTo('monday')}
            />

            {/* Bit App */}
            <ProjectCard
              id="project-bit"
              title="bit - app"
              description="Israel's leading P2P payments app - designing a lean, data-driven money transfer experience for millions of users."
              imageSrc={imgIPhone15Pro}
              tags={['mobile app', 'B2C']}
              imagePosition="right"
              onClick={() => navigateTo('bit')}
            />

            {/* Bluevine */}
            <ProjectCard
              id="project-bluevine"
              title="Bluevine"
              description="Designing banking and lending experiences that help small businesses manage their finances quickly and confidently."
              imageSrc={imgBluevinePhones}
              tags={['SMB banking', 'B2C']}
              imagePosition="left"
              onClick={() => navigateTo('bluevine')}
            />

            {/* XtreamIO */}
            <ProjectCard
              id="project-xtreamio"
              title="Xtream IO"
              description="An all-flash storage platform delivering high performance, scalability, and simplified data management for enterprise."
              imageSrc={imgIPadMini}
              tags={['enterprise', 'data platform']}
              imagePosition="right"
              onClick={() => navigateTo('xtreamio')}
            />
          </div>
        </div>
      </section>

      {/* -- Footer ------------------------------------------------- */}
      <footer
        className="pt-6 md:pt-10 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 text-white"
        style={{ backgroundColor: 'var(--color-gray-900)' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Footer Bottom */}
          <div className="mt-16 pt-8 flex items-center justify-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Copyright 2025 © Elran Levy
            </p>
          </div>
        </div>
      </footer>
    </>
  );

  /* ================================================================
     RENDER
     ================================================================ */
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--surface-primary)' }}>
      {/* -- Global Fixed Navigation (hidden on case study pages) ----- */}
      {(currentPage === 'home' || currentPage === 'contact') &&       <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md px-6 md:px-12 lg:px-16 transition-colors duration-300"
        style={{ backgroundColor: darkMode ? 'rgba(15,20,25,0.9)' : 'rgba(255,255,255,0.9)', borderBottom: `1px solid ${darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto py-5 flex items-center justify-between">
          <button
            onClick={() => {
              navigateTo('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[13px] md:text-sm tracking-[0.25em] uppercase font-light"
            style={{ color: 'var(--text-primary)' }}
          >
            elran levy
          </button>

          {/* Desktop Nav */}
          <div className="flex items-center gap-6 lg:gap-8">
            <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px]">
              <button
                onClick={() => {
                  navigateTo('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:opacity-50 transition-opacity duration-300 font-light"
                style={{ color: 'var(--text-primary)' }}
              >
                about
              </button>
              <button
                onClick={handleWorkClick}
                className="hover:opacity-50 transition-opacity duration-300 font-light"
                style={{ color: 'var(--text-primary)' }}
              >
                projects
              </button>
            </nav>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:opacity-50 transition-opacity duration-300"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" strokeWidth={1.5} /> : <Moon className="w-4 h-4" strokeWidth={1.5} />}
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>}

      {/* -- Mobile Menu --------------------------------------------- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: 'var(--surface-primary)' }}
          >
            <button
              className="absolute top-5 right-6"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <nav className="flex flex-col items-center gap-8 text-xl">
              <button
                className="font-light hover:opacity-50 transition-opacity"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigateTo('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                about
              </button>
              <button
                className="font-light hover:opacity-50 transition-opacity"
                onClick={handleWorkClick}
              >
                projects
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -- Page Content ------------------------------------------- */}
      {renderPageContent()}
    </div>
  );
}
