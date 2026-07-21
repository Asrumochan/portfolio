import { useEffect, useState } from 'react';
import { navLinks } from '../constants/portfolioData';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <span className="brand">Portfolio</span>
      <nav>
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
