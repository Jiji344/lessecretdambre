import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsMenuOpen(e.target.checked);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h1 className="logo-text">Les Secrets d'Ambre</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <button onClick={() => scrollToSection('accueil')} className="nav-link">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              À propos
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Burger */}
          <div className="mobile-menu-toggle">
            <input
              type="checkbox"
              id="checkbox"
              checked={isMenuOpen}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="nav-mobile">
            <button onClick={() => scrollToSection('accueil')} className="nav-link-mobile">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link-mobile">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link-mobile">
              À propos
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link-mobile">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
