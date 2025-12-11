import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
    // Trigger scroll animations when section enters viewport
    useScrollAnimation({ threshold: 0.1, triggerOnce: true });

    const features = [
        {
            icon: <img src="/asset/icon/medaille.svg" alt="Expertise" style={{ width: 50, height: 50 }} />,
            title: 'Expertise',
            description: '10 ans d\'expérience et un savoir-faire reconnu dans tous les domaines de la beauté',
        },
        {
            icon: <img src="/asset/icon/cierge-magique.svg" alt="Qualité" style={{ width: 50, height: 50 }} />,
            title: 'Qualité',
            description: 'Produits naturels et certifiés pour le respect de votre peau et de l\'environnement',
        },
        {
            icon: <img src="/asset/icon/coeur.svg" alt="Bien-être" style={{ width: 50, height: 50 }} />,
            title: 'Bien-être',
            description: 'Ambiance apaisante et équipe bienveillante pour une expérience complète',
        },
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-header text-center mb-4">
                    <h2 data-animate="scale">À Propos de Nous</h2>
                    <div className="underline"></div>
                </div>

                <div className="about-content">
                    <p className="about-description" data-animate="fade-left">
                        Depuis plus de 10 ans, Les Secrets d'Ambre vous accueille dans un univers de détente
                        et de bien-être à Montpellier. Notre équipe d'esthéticiennes qualifiées et passionnées
                        vous propose une large gamme de services : épilation (cire traditionnelle, fleur de coton,
                        miel), soins du visage, massages personnalisés, maquillage professionnel et bien d'autres.
                    </p>
                    <p className="about-description" data-animate="fade-left" data-animate-delay="1">
                        Nous croyons fermement que la beauté commence par le bien-être. C'est pourquoi nous
                        utilisons exclusivement des produits naturels et respectueux de votre peau. Chaque service
                        est pensé pour vous offrir une expérience relaxante, revitalisante et transformatrice.
                    </p>
                    <p className="about-description" data-animate="fade-left" data-animate-delay="2">
                        Notre approche holistique combine les rituels de beauté ancestraux avec les techniques
                        modernes pour créer une harmonie parfaite entre corps et esprit.
                    </p>
                </div>

                <div className="features-grid grid grid-3 mt-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card card"
                            data-animate="fade-up"
                            data-animate-delay={index + 3}
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
