import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './LegalNotice.css';

const LegalNotice = () => {
    return (
        <div className="legal-notice-page">
            <Header />

            <main className="legal-main">
                <div className="legal-hero">
                    <div className="legal-hero-content">
                        <h1>Mentions Légales</h1>
                        <p className="legal-subtitle">Informations légales et réglementaires</p>
                    </div>
                </div>

                <div className="legal-container">
                    <div className="legal-grid">
                        {/* Section 1 */}
                        <section className="legal-card">
                            <div className="card-icon">📋</div>
                            <h2>Informations générales</h2>
                            <p>
                                Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004
                                pour la confiance dans l'économie numérique (LCEN), il est porté à la connaissance des utilisateurs
                                du site www.lessecretsdambre.fr les présentes mentions légales.
                            </p>
                        </section>

                        {/* Section Éditeur */}
                        <section className="legal-card highlight">
                            <div className="card-icon">🏢</div>
                            <h2>Éditeur du site</h2>
                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-label">Entreprise</span>
                                    <span className="info-value">LES SECRETS D'AMBRE</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Forme juridique</span>
                                    <span className="info-value">SAS</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Adresse</span>
                                    <span className="info-value">17 Rue Lunaret, 34090 Montpellier</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Téléphone</span>
                                    <span className="info-value">+33 6 62 36 01 08</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">E-mail</span>
                                    <span className="info-value">contact@lessecretsdambre.fr</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">SIRET</span>
                                    <span className="info-value pending">À remplir</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Directrice</span>
                                    <span className="info-value">Aurore</span>
                                </div>
                            </div>
                        </section>

                        {/* Section Hébergeur */}
                        <section className="legal-card">
                            <div className="card-icon">🌐</div>
                            <h2>Hébergeur du site</h2>
                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-label">Hébergeur</span>
                                    <span className="info-value">OVH</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Adresse</span>
                                    <span className="info-value">2, rue Kellermann, 59100 Roubaix</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Téléphone</span>
                                    <span className="info-value">+33 9 72 10 10 07</span>
                                </div>
                            </div>
                        </section>

                        {/* Section Propriété intellectuelle */}
                        <section className="legal-card">
                            <div className="card-icon">©️</div>
                            <h2>Propriété intellectuelle</h2>
                            <p>
                                L'ensemble des éléments présents sur le site, notamment les textes, images, graphismes, logos,
                                vidéos, icônes, et autres contenus sont la propriété exclusive de <strong>LES SECRETS D'AMBRE</strong> ou de ses
                                partenaires, sauf mention contraire explicite.
                            </p>
                            <p>
                                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des
                                éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation
                                écrite préalable de LES SECRETS D'AMBRE.
                            </p>
                        </section>

                        {/* Section RGPD */}
                        <section className="legal-card highlight">
                            <div className="card-icon">🔒</div>
                            <h2>Données personnelles & RGPD</h2>
                            <p>
                                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
                                et Libertés du 6 janvier 1978 modifiée, <strong>LES SECRETS D'AMBRE</strong> s'engage à assurer la protection
                                des données personnelles des utilisateurs.
                            </p>
                            <div className="info-grid">
                                <div className="info-item">
                                    <span className="info-label">Responsable du traitement</span>
                                    <span className="info-value">LES SECRETS D'AMBRE</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Finalités du traitement</span>
                                    <span className="info-value">AUCUNE</span>
                                </div>
                            </div>
                            <div className="rights-box">
                                <h3>Vos droits</h3>
                                <p>
                                    Conformément à la loi, vous disposez d'un droit d'accès, de rectification, de suppression
                                    et d'opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à
                                    l'adresse : <span className="pending">À remplir</span>
                                </p>
                            </div>
                        </section>

                        {/* Section Cookies */}
                        <section className="legal-card">
                            <div className="card-icon">🍪</div>
                            <h2>Cookies</h2>
                            <p>
                                Le site LES SECRETS D'AMBRE peut être amené à utiliser des cookies pour améliorer l'expérience
                                utilisateur et fournir des statistiques de navigation. En continuant à naviguer sur le site,
                                vous acceptez l'utilisation de ces cookies.
                            </p>
                            <p>
                                Vous pouvez paramétrer votre navigateur pour refuser ou limiter l'utilisation des cookies.
                            </p>
                        </section>

                        {/* Section Responsabilité */}
                        <section className="legal-card">
                            <div className="card-icon">⚖️</div>
                            <h2>Responsabilité</h2>
                            <p>
                                LES SECRETS D'AMBRE ne saurait être tenu responsable des dommages directs ou indirects causés au
                                matériel de l'utilisateur lors de l'accès au site, et résultant soit de l'utilisation d'un matériel
                                ne répondant pas aux spécifications techniques minimales, soit de l'apparition d'un bug ou d'une incompatibilité.
                            </p>
                        </section>

                        {/* Section Loi applicable */}
                        <section className="legal-card">
                            <div className="card-icon">🇫🇷</div>
                            <h2>Loi applicable</h2>
                            <p>
                                Les présentes mentions légales sont régies par le droit français. Tout litige relatif à leur
                                interprétation ou à leur exécution relève de la compétence exclusive des tribunaux français.
                            </p>
                        </section>
                    </div>

                    {/* Contact Box */}
                    <div className="contact-box">
                        <h3>Une question ?</h3>
                        <p>
                            N'hésitez pas à nous contacter pour toute question concernant ces mentions légales.
                        </p>
                        <Link to="/#contact" className="contact-btn">Nous contacter</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LegalNotice;
