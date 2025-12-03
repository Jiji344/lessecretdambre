import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
    // Trigger scroll animations when section enters viewport
    useScrollAnimation({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-header text-center mb-4">
                    <h2 className="text-primary" data-animate="scale">Nous Contacter</h2>
                    <div className="underline"></div>
                </div>

                <div className="contact-grid">
                    {/* Colonne Gauche - Informations */}
                    <div className="contact-info" data-animate="fade-left">
                        <div className="info-item">
                            <div className="info-icon">
                                <MapPin size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Adresse</h3>
                                <a
                                    href="https://maps.google.com/maps?q=17+Rue+Lunaret+34090+Montpellier"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="info-link"
                                >
                                    17 Rue Lunaret, 34090 Montpellier
                                </a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <Phone size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Téléphone</h3>
                                <a href="tel:+33662360108" className="info-link">06 62 36 01 08</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <Mail size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <a href="mailto:contact@lessecretsdambre.fr" className="info-link">
                                    contact@lessecretsdambre.fr
                                </a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <Clock size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Horaires</h3>
                                <div className="schedule">
                                    <div className="schedule-item">
                                        <span>Lundi</span>
                                        <span>13h00 - 18h00</span>
                                    </div>
                                    <div className="schedule-item">
                                        <span>Mardi</span>
                                        <span>10h00 - 21h00</span>
                                    </div>
                                    <div className="schedule-item">
                                        <span>Mercredi</span>
                                        <span>10h00 - 18h00</span>
                                    </div>
                                    <div className="schedule-item">
                                        <span>Jeudi</span>
                                        <span>10h00 - 18h00</span>
                                    </div>
                                    <div className="schedule-item">
                                        <span>Vendredi</span>
                                        <span>10h00 - 18h00</span>
                                    </div>
                                    <div className="schedule-item">
                                        <span>Samedi</span>
                                        <span>10h00 - 18h00</span>
                                    </div>
                                    <div className="schedule-item closed">
                                        <span>Dimanche</span>
                                        <span>Fermé</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <Instagram size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Instagram</h3>
                                <a
                                    href="https://www.instagram.com/lessecretsdambre/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="info-link"
                                >
                                    @lessecretsdambre
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Colonne Droite - CTA */}
                    <div className="contact-cta" data-animate="fade-right" data-animate-delay="1">
                        <div className="cta-card">
                            <h3 className="cta-title">Prêt(e) à vous transformer ?</h3>
                            <p className="cta-subtitle">Réservez votre première séance maintenant</p>
                            <a
                                href="https://www.planity.com/les-secrets-dambre-epilation-miel-bio-caramel-orientale-soin-peaux-noires-34090-montpellier"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary cta-button"
                                aria-label="Ouvrir Planity dans un nouvel onglet"
                            >
                                Réserver en Ligne
                            </a>
                            <p className="cta-note">
                                Réservation en ligne simple et rapide via Planity
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
