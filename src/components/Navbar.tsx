import { useEffect, useState } from 'react';
import { navLinks } from '../constants/portfolioData';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 820) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label="Back to homepage">
        Portfolio
      </a>
      <button
        className={`nav-menu-btn ${isMenuOpen ? 'nav-menu-btn-open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="primary-navigation" className={isMenuOpen ? 'nav-open' : ''}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
