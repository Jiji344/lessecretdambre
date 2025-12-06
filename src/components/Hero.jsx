import { useParallax } from '../hooks/useScrollAnimation';
import './Hero.css';

const Hero = () => {
    // Parallax effect on hero content (desktop only, 30% intensity)
    useParallax('hero-content', 0.3);

    const scrollToContact = () => {
        // Sur mobile, on défile vers les horaires. Sur desktop, vers la réservation.
        const targetId = window.innerWidth < 768 ? 'opening-hours' : 'contact-cta';
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Même offset que le bouton Contact du header
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="accueil" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content" id="hero-content" data-parallax>
                <h1 className="hero-title">Les Secrets d'Ambre</h1>
                <p className="hero-subtitle">Beauté et Bien-être</p>
                <div className="hero-services">
                    <span>Épilation</span>
                    <span className="separator">•</span>
                    <span>Soins</span>
                    <span className="separator">•</span>
                    <span>Massages</span>
                    <span className="separator">•</span>
                    <span>Maquillage</span>
                </div>
                <button onClick={scrollToContact} className="btn btn-primary hero-cta">
                    Réserver Maintenant
                </button>
            </div>
        </section>
    );
};

export default Hero;
