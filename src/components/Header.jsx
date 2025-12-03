import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCheckboxChange = (e) => {
    setIsMenuOpen(e.target.checked);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h1 className="logo-text" onClick={() => scrollToSection('accueil')}>
              Les Secrets d'Ambre
            </h1>
          </div>

          {/* Desktop Navigation - Services et À propos échangés */}
          <nav className="nav-desktop">
            <button onClick={() => scrollToSection('accueil')} className="nav-link">
              Accueil
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              À propos
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Burger SVG */}
          <label className="hamburger">
            <input
              type="checkbox"
              checked={isMenuOpen}
              onChange={handleCheckboxChange}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>

          {/* Mobile Navigation - Services et À propos échangés */}
          {isMenuOpen && (
            <nav className="nav-mobile">
              <button onClick={() => scrollToSection('accueil')} className="nav-link-mobile">
                Accueil
              </button>
              <button onClick={() => scrollToSection('about')} className="nav-link-mobile">
                À propos
              </button>
              <button onClick={() => scrollToSection('services')} className="nav-link-mobile">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link-mobile">
                Contact
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
