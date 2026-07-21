import { FaMoon, FaSun } from "react-icons/fa";
import { navLinks } from "../constants/portfolioData";
import type { Theme } from "../hooks/useTheme";

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="navbar">
      <nav>
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label="Toggle color theme"
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}

export default Navbar;
