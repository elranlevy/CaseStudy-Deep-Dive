import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ProjectCard } from '@/app/components/ProjectCard';
import { AboutPage } from '@/app/components/AboutPage';
import { ContactPage } from '@/app/components/ContactPage';
import { FundguardCaseStudy } from '@/app/components/FundguardCaseStudy';
import { BitCaseStudy } from '@/app/components/BitCaseStudy';
import { XtreamIOCaseStudy } from '@/app/components/XtreamIOCaseStudy';
import { MondayCaseStudy } from '@/app/components/MondayCaseStudy';
import { BluevineCaseStudy } from '@/app/components/BluevineCaseStudy';
import imgMacStudio from 'figma:asset/4decb3fa846a4088c678f19d989b02718036933a.png';
import imgIPhone15Pro from 'figma:asset/21d1360edf0132c07e6253991afe1a55ee6a2bf4.png';
import imgIPadMini from 'figma:asset/8b112128be2070541f71d6d357666b3c210840ca.png';
import imgMondayMacBook from 'figma:asset/0b015f0f176342d0f8f762e05031909f478fb58f.png';
import imgBluevinePhones from 'figma:asset/f54f4c1a2742d29249554b7c7a0e1bb0d76424ff.png';
const headlines = ['DRIVEN BY USERS', 'THOUGHTFUL DESIGN', 'FOCUSED ON VALUE'];

export function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBigHeadline, setShowBigHeadline] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'fundguard' | 'bit' | 'xtreamio' | 'monday' | 'bluevine'>('home');

  // Navigate to a page and push browser history so the back button works
  const navigateTo = (page: typeof currentPage) => {
    if (page === 'home') {
      // When going home, push a home state so forward navigation works correctly
      window.history.pushState({ page: 'home' }, '');
    } else {
      window.history.pushState({ page }, '');
    }
    setCurrentPage(page);
  };

  // Listen for browser back/forward button
  useEffect(() => {
    // Replace current history entry with home state on initial load
    window.history.replaceState({ page: 'home' }, '');

    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
      } else {
        // If no state (e.g. user went all the way back), go home
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Start the big headline rotation after initial animations
    const timer = setTimeout(() => {
      setShowBigHeadline(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showBigHeadline) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [showBigHeadline]);

  if (currentPage === 'about') {
    return <AboutPage onNavigateHome={() => navigateTo('home')} onNavigateContact={() => navigateTo('contact')} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage onNavigateHome={() => navigateTo('home')} onNavigateAbout={() => navigateTo('about')} />;
  }

  if (currentPage === 'fundguard') {
    return <FundguardCaseStudy onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === 'bit') {
    return <BitCaseStudy onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === 'xtreamio') {
    return <XtreamIOCaseStudy onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === 'monday') {
    return <MondayCaseStudy onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === 'bluevine') {
    return <BluevineCaseStudy onNavigateHome={() => navigateTo('home')} />;
  }

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Hero Page */}
      <motion.div 
        className="bg-surface-dark text-text-inverse h-screen flex flex-col snap-start snap-always"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Header */}
        <motion.header 
          className="flex items-center justify-between px-[var(--content-px)] md:px-[var(--content-px-md)] py-[var(--space-4)] md:py-[var(--space-6)] font-[var(--weight-light)] relative"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="text-sm md:text-lg">elran levy portfolio</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-[var(--space-4)] md:gap-[var(--space-8)] text-sm md:text-base">
            <a href="#work" className="hover:opacity-70 transition-opacity duration-[var(--duration-fast)] font-[var(--weight-normal)] underline underline-offset-4">
              main
            </a>
            <button 
              onClick={() => navigateTo('about')}
              className="hover:opacity-70 transition-opacity duration-[var(--duration-fast)] font-[var(--weight-light)]"
            >
              about
            </button>
            <button 
              onClick={() => navigateTo('contact')}
              className="hover:opacity-70 transition-opacity duration-[var(--duration-fast)] font-[var(--weight-light)]"
            >
              contact
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed inset-0 bg-surface-dark z-[var(--z-overlay)] flex items-center justify-center md:hidden"
              >
                <nav className="flex flex-col gap-[var(--space-8)] text-[20px] text-center">
                  <a 
                    href="#work" 
                    className="hover:opacity-70 transition-opacity font-[var(--weight-light)] underline underline-offset-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    main
                  </a>
                  <button 
                    className="hover:opacity-70 transition-opacity font-[var(--weight-light)]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigateTo('about');
                    }}
                  >
                    about
                  </button>
                  <button 
                    className="hover:opacity-70 transition-opacity font-[var(--weight-light)]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigateTo('contact');
                    }}
                  >
                    contact
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-[var(--content-px)] md:px-[var(--content-px-md)] text-center relative">
        <div className="flex flex-col items-center">
          <motion.p 
            className="max-w-4xl mb-[var(--space-8)] text-[var(--text-body)] md:text-[18px] lg:text-[22px] leading-[var(--leading-relaxed)] font-[var(--weight-light)] px-[var(--space-4)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
          >
            I merge relentless strategy with flawless execution to build digital
            products that are more than just functional or beautiful - they are:
          </motion.p>

          {/* Animated Headline */}
          <div className="relative h-24 md:h-32 lg:h-48 flex items-center justify-center w-full overflow-visible px-[var(--space-4)]">
            {showBigHeadline && (
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentIndex}
                  initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(20px)', y: -20 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                  }}
                  className="absolute text-4xl md:text-4xl lg:text-7xl xl:text-8xl font-[var(--weight-black)] whitespace-normal md:whitespace-nowrap"
                  style={{
                    backgroundImage: `linear-gradient(90deg, var(--color-blue-gradient) 0%, var(--color-white) 50%, var(--color-blue-gradient) 100%)`,
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <motion.span
                    style={{
                      backgroundImage: `linear-gradient(90deg, var(--color-blue-gradient) 0%, var(--color-white) 50%, var(--color-blue-gradient) 100%)`,
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.8,
                      ease: 'easeInOut',
                    }}
                  >
                    {headlines[currentIndex]}
                  </motion.span>
                </motion.h1>
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[var(--space-8)] md:bottom-[var(--space-12)] left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-text-inverse rounded-[var(--radius-full)] flex items-start justify-center p-[var(--space-2)]"
          >
            <div className="w-1 h-2 bg-text-inverse rounded-[var(--radius-full)]" />
          </motion.div>
        </div>
      </main>
      </motion.div>

      {/* Project 1: Fundguard */}
      <ProjectCard
        title="FUNDGUARD"
        description="Turning Operational Complexity into Clear, Actionable Systems. Designing scalable workflows for investment operations teams"
        imageSrc={imgMacStudio}
        backgroundColor="var(--surface-primary)"
        imagePosition="right"
        onClick={() => navigateTo('fundguard')}
      />

      {/* Project 2: Monday.com */}
      <ProjectCard
        title="monday.com"
        description="monday.com is a work management platform that helps teams plan, track, and collaborate efficiently together daily."
        imageSrc={imgMondayMacBook}
        backgroundColor="var(--surface-secondary)"
        imagePosition="left"
        onClick={() => navigateTo('monday')}
      />

      {/* Project 3: Bit App */}
      <ProjectCard
        title="bit - app"
        description="Israel's leading P2P payments app - designing a lean, data-driven money transfer experience for millions of users."
        imageSrc={imgIPhone15Pro}
        backgroundColor="var(--surface-primary)"
        imagePosition="right"
        onClick={() => navigateTo('bit')}
      />

      {/* Project 4: Bluevine */}
      <ProjectCard
        title="Bluevine"
        description="Bluevine is a mobile banking app designed to help small businesses manage their finances quickly and confidently."
        imageSrc={imgBluevinePhones}
        backgroundColor="var(--surface-secondary)"
        imagePosition="left"
        onClick={() => navigateTo('bluevine')}
      />

      {/* Project 5: XtreamIO */}
      <ProjectCard
        title="Xtream IO"
        description="Xtream IO is an all-flash storage platform delivering high performance, scalability, and simplified data management enterprise."
        imageSrc={imgIPadMini}
        backgroundColor="var(--surface-primary)"
        imagePosition="right"
        onClick={() => navigateTo('xtreamio')}
      />
    </div>
  );
}
