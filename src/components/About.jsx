import { Award, Heart, Sparkles } from 'lucide-react';
import './About.css';

const About = () => {
    const features = [
        {
            icon: <Award size={40} />,
            title: 'Expertise',
            description: 'Plus de 10 ans d\'expérience dans les soins esthétiques et le bien-être',
        },
        {
            icon: <Sparkles size={40} />,
            title: 'Qualité',
            description: 'Produits naturels et respectueux de votre peau pour des résultats exceptionnels',
        },
        {
            icon: <Heart size={40} />,
            title: 'Bien-être',
            description: 'Une expérience relaxante et revitalisante dans un cadre chaleureux',
        },
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-header text-center mb-4">
                    <h2 className="text-primary">À Propos</h2>
                    <div className="underline"></div>
                </div>

                <div className="about-content">
                    <p className="about-description">
                        Depuis plus de 10 ans, Les Secrets d'Ambre vous accueille dans un univers de détente
                        et de bien-être à Montpellier. Notre équipe d'esthéticiennes qualifiées vous propose
                        une large gamme de services : épilation (cire, fleur de coton, miel), soins du visage,
                        massages personnalisés, maquillage professionnel et bien d'autres.
                    </p>
                    <p className="about-description">
                        Nous utilisons exclusivement des produits naturels et respectueux de votre peau.
                        Chaque service est pensé pour vous offrir une expérience relaxante et revitalisante.
                    </p>
                </div>

                <div className="features-grid grid grid-3 mt-4">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card card">
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
