import { Clock, MapPin, Phone, Mail, Instagram, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const schedule = [
        { day: 'Lundi', hours: '13h00-18h00' },
        { day: 'Mardi', hours: '10h00-21h00' },
        { day: 'Mercredi', hours: '10h00-18h00' },
        { day: 'Jeudi', hours: '10h00-18h00' },
        { day: 'Vendredi', hours: '10h00-18h00' },
        { day: 'Samedi', hours: '10h00-18h00' },
        { day: 'Dimanche', hours: 'Fermé', closed: true },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Column 1: Logo & Name */}
                    <div className="footer-column">
                        <h3 className="footer-logo">Les Secrets d'Ambre</h3>
                        <p className="footer-tagline">Votre destination beauté et bien-être à Montpellier</p>
                    </div>

                    {/* Column 2: Horaires */}
                    <div id="horaires" className="footer-column">
                        <h4 className="footer-title">
                            <Clock size={20} />
                            Horaires
                        </h4>
                        <ul className="schedule-list">
                            {schedule.map((item, index) => (
                                <li key={index} className={item.closed ? 'closed' : ''}>
                                    <span className="day">{item.day}</span>
                                    <span className="hours">{item.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div id="contact" className="footer-column">
                        <h4 className="footer-title">
                            <Phone size={20} />
                            Contact
                        </h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} />
                                <span>17 Rue Lunaret, 34090 Montpellier</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <a href="tel:+33662360108">06 62 36 01 08</a>
                            </li>
                            <li>
                                <Mail size={18} />
                                <a href="mailto:contact@lessecretsdambre.fr">contact@lessecretsdambre.fr</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Réseaux & Planity */}
                    <div className="footer-column">
                        <h4 className="footer-title">
                            <Instagram size={20} />
                            Suivez-nous
                        </h4>
                        <div className="social-links">
                            <a
                                href="https://www.instagram.com/lessecretsdambre/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <Instagram size={24} />
                                @lessecretsdambre
                            </a>
                        </div>
                        <a
                            href="https://www.planity.com/les-secrets-dambre-epilation-miel-bio-caramel-orientale-soin-peaux-noires-34090-montpellier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline planity-btn"
                        >
                            <ExternalLink size={18} />
                            Réserver en ligne
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Les Secrets d'Ambre. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
