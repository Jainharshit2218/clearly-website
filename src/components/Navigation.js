import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      data-testid="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('#hero')}
          data-testid="nav-logo"
          className="text-xl font-bold tracking-tighter text-black hover:opacity-70 transition-opacity"
        >
          CLEARLY.
        </button>

        {/* Navigation links
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('#products')}
            data-testid="nav-products"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('#how-it-works')}
            data-testid="nav-how"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('#about')}
            data-testid="nav-about"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            About
          </button>
        </div> */}

        {/* CTA */}
        <button
          onClick={() => scrollToSection('#signup')}
          data-testid="nav-cta"
          className="btn-primary !py-3 !px-6 text-sm"
        >
          Join the Waitlist
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
