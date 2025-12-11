import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when hash changes
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);

  const handleCheckboxChange = (e) => {
    setIsMenuOpen(e.target.checked);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      let offsetPosition = elementPosition - headerHeight;

      // Ajustement spécifique pour la section Avis pour cacher la marge blanche
      if (sectionId === 'reviews') {
        offsetPosition += 80;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-bar">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <h1 className="logo-text" onClick={() => handleNavClick('accueil')}>
                <img src="/asset/logo/logo.png" alt="Les Secrets d'Ambre" className="logo-image" />
              </h1>
              <span className="logo-subtitle">Institut de beauté Montpellier</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              <button onClick={() => handleNavClick('accueil')} className="nav-link">
                Accueil
              </button>
              <button onClick={() => handleNavClick('about')} className="nav-link">
                À propos
              </button>
              <button onClick={() => handleNavClick('services')} className="nav-link">
                Services
              </button>
              <button onClick={() => handleNavClick('gallery')} className="nav-link">
                Galerie
              </button>
              <button onClick={() => handleNavClick('reviews')} className="nav-link">
                Avis
              </button>
              <button onClick={() => handleNavClick('opening-hours')} className="nav-link">
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
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`nav-mobile-container ${isMenuOpen ? 'open' : ''}`}>
        <nav className="nav-mobile-content">
          <button onClick={() => handleNavClick('accueil')} className="nav-link-mobile">
            Accueil
          </button>
          <button onClick={() => handleNavClick('about')} className="nav-link-mobile">
            À propos
          </button>
          <button onClick={() => handleNavClick('services')} className="nav-link-mobile">
            Services
          </button>
          <button onClick={() => handleNavClick('gallery')} className="nav-link-mobile">
            Galerie
          </button>
          <button onClick={() => handleNavClick('reviews')} className="nav-link-mobile">
            Avis
          </button>
          <button onClick={() => handleNavClick('opening-hours')} className="nav-link-mobile">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
