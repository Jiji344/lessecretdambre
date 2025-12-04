import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const scheduleData = [
        { day: 'Lundi', hours: '13h00 - 18h00' },
        { day: 'Mardi', hours: '10h00 - 21h00' },
        { day: 'Mercredi', hours: '10h00 - 18h00' },
        { day: 'Jeudi', hours: '10h00 - 18h00' },
        { day: 'Vendredi', hours: '10h00 - 18h00' },
        { day: 'Samedi', hours: '10h00 - 18h00' },
        { day: 'Dimanche', hours: 'Fermé', closed: true }
    ];

    const handlePlanityClick = () => {
        window.open('https://www.planity.com/les-secrets-dambre-epilation-miel-bio-caramel-orientale-soin-peaux-noires-34090-montpellier', '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-header section-header">
                    <h2 className="section-title">Nous Contacter</h2>
                    <p className="section-subtitle">
                        Nous sommes à votre écoute pour répondre à vos questions et prendre rendez-vous
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Left Column - Contact Information (without schedule) */}
                    <div className="contact-info">
                        {/* Address */}
                        <div className="info-item">
                            <div className="info-icon">
                                <MapPin size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Adresse</h3>
                                <a
                                    href="https://www.google.com/maps/place/17+Rue+Lunaret,+34090+Montpellier"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="info-link"
                                >
                                    17 Rue Lunaret<br />34090 Montpellier
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="info-item">
                            <div className="info-icon">
                                <Phone size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Téléphone</h3>
                                <a href="tel:+33662360108" className="info-link">
                                    06 62 36 01 08
                                </a>
                            </div>
                        </div>

                        {/* Email */}
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

                        {/* Instagram */}
                        <div className="info-item">
                            <div className="info-icon">
                                <Instagram size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Instagram</h3>
                                <a
                                    href="https://www.instagram.com/lessecretsdambre"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="info-link"
                                >
                                    @lessecretsdambre
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Schedule + CTA Card */}
                    <div className="contact-right-column">
                        {/* Schedule */}
                        <div className="info-item schedule-block">
                            <div className="info-icon">
                                <Clock size={24} />
                            </div>
                            <div className="info-text">
                                <h3>Horaires d'ouverture</h3>
                                <div className="schedule">
                                    {scheduleData.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`schedule-item ${item.closed ? 'closed' : ''}`}
                                        >
                                            <span>{item.day}</span>
                                            <span>{item.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="contact-cta">
                            <div className="cta-card">
                                <h3 className="cta-title">Réservez en ligne</h3>
                                <p className="cta-subtitle">
                                    Prenez rendez-vous en quelques clics sur Planity
                                </p>
                                <button
                                    onClick={handlePlanityClick}
                                    className="cta-button btn-primary"
                                >
                                    Réserver sur Planity
                                </button>
                                <p className="cta-note">
                                    Réponse rapide garantie • Confirmation immédiate
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
