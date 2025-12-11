import { useParallax } from '../hooks/useScrollAnimation';
import './Hero.css';

const Hero = () => {
    // Parallax effect on hero content (desktop only, 30% intensity)
    useParallax('hero-content', 0.3);


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
                <a
                    href="https://www.planity.com/les-secrets-dambre-epilation-miel-bio-caramel-orientale-soin-peaux-noires-34090-montpellier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary hero-cta"
                >
                    Réserver Maintenant
                </a>
            </div>
        </section>
    );
};

export default Hero;
