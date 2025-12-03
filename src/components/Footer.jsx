import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>© {currentYear} Les Secrets d'Ambre. Tous droits réservés. | Créé avec ❤️ à Montpellier</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
