import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>
                        © {currentYear} Les Secrets d'Ambre. Tous droits réservés. | Créé avec ❤️ à Montpellier
                        <br />
                        <Link to="/mentions-legales" className="footer-link">Mentions légales</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
