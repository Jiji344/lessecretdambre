import useScrollAnimation from '../hooks/useScrollAnimation';
import './Reviews.css';

const Reviews = () => {
    useScrollAnimation({ threshold: 0.1, triggerOnce: true });

    const reviews = [
        {
            id: 1,
            name: 'Sophie M.',
            rating: 5,
            text: 'Un moment de pur bonheur ! L\'équipe est adorable et très professionnelle. Je recommande vivement le hammam suivi d\'un massage, c\'est divin.',
            service: 'Hammam & Massage',
        },
        {
            id: 2,
            name: 'Nadia K.',
            rating: 5,
            text: 'Épilation au miel parfaite, beaucoup moins douloureuse que la cire classique. Ma peau est douce et pas irritée. Je ne changerai plus !',
            service: 'Épilation au Miel',
        },
        {
            id: 3,
            name: 'Marie-Claire D.',
            rating: 5,
            text: 'Le soin visage anti-âge est incroyable. Ma peau est lumineuse et repulpée. L\'ambiance est zen et relaxante, on se sent vraiment chouchoutée.',
            service: 'Soin Visage',
        },
        {
            id: 4,
            name: 'Fatima B.',
            rating: 5,
            text: 'Le forfait mariée était parfait ! Maquillage sublime qui a tenu toute la journée. Merci pour cette journée inoubliable.',
            service: 'Forfait Mariée',
        },
        {
            id: 5,
            name: 'Léa T.',
            rating: 5,
            text: 'Super expérience pour ma première extension de cils. Résultat naturel et effet wahou garanti. L\'esthéticienne est très minutieuse.',
            service: 'Extension Cils',
        },
        {
            id: 6,
            name: 'Amina R.',
            rating: 5,
            text: 'Je viens ici depuis 3 ans pour mes épilations. Toujours un accueil chaleureux, des produits de qualité et un résultat impeccable.',
            service: 'Épilation',
        },
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
                ★
            </span>
        ));
    };

    return (
        <section id="reviews" className="reviews section">
            <div className="container">
                <div className="reviews-header text-center mb-4">
                    <h2 className="text-primary" data-animate="scale">Vos Avis</h2>
                    <div className="underline"></div>
                    <p className="reviews-subtitle">
                        Découvrez ce que nos clientes pensent de nos services
                    </p>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className="review-card"
                            data-animate="fade-up"
                            data-animate-delay={Math.min(index + 1, 6)}
                        >
                            <div className="review-stars">
                                {renderStars(review.rating)}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <span className="review-name">{review.name}</span>
                                <span className="review-service">{review.service}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;

