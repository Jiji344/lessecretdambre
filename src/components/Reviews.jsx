import useScrollAnimation from '../hooks/useScrollAnimation';
import './Reviews.css';

const Reviews = () => {
    useScrollAnimation({ threshold: 0.1, triggerOnce: true });

    const reviews = [
        {
            id: 1,
            name: 'Ilona Ferrat',
            rating: 5,
            text: 'J’ai fait une épilation des jambes complètes et je suis vraiment ravie du résultat ! L’esthéticienne a été à la fois douce et professionnelle.',
            service: 'Épilation',
        },
        {
            id: 2,
            name: 'Lau Franciosa',
            rating: 5,
            text: 'Premier brown lift et épilation sourcils de ma vie, JE RECOMMANDE SANS HÉSITATION. Aurore est une femme très bienveillante.',
            service: 'Brow Lift',
        },
        {
            id: 3,
            name: 'Lana Janin-gadoux',
            rating: 5,
            text: 'C’était ma première épilation au miel et je ne pouvais pas espérer une meilleure expérience. L’esthéticienne a su me mettre immédiatement à l’aise.',
            service: 'Épilation Miel',
        },
        {
            id: 4,
            name: 'Florine Perrin',
            rating: 5,
            text: 'Je suis allée me faire épiler les sourcils au fil dans cet institut et je ne peux que recommander ! L\'épilation est précise, soignée et irréprochable.',
            service: 'Épilation Fil',
        },
        {
            id: 5,
            name: 'Ambre Bertelle',
            rating: 5,
            text: 'Plus que ravie de la prestation (épilation au miel) réalisée par Aurore aujourd’hui, dans son salon.',
            service: 'Épilation Miel',
        },
        {
            id: 6,
            name: 'Lili',
            rating: 5,
            text: 'J’ai passé un moment absolument parfait lors de mon rendez-vous ! Aurore est à la fois très professionnelle, douce et incroyablement chaleureuse.',
            service: 'Soin',
        },
        {
            id: 7,
            name: 'Lulu S',
            rating: 5,
            text: 'C\'était ma première fois aux Secrets d\'Ambre et l\'expérience était tout simplement magique !! Aurore est incroyable, très professionnelle.',
            service: 'Expérience',
        },
        {
            id: 8,
            name: 'Anaïs',
            rating: 5,
            text: 'Merci à Aurore pour son professionnalisme et sa bienveillance. Je me rase depuis toujours et je me suis enfin lancée dans l\'épilation à la cire.',
            service: 'Épilation Cire',
        },
        {
            id: 9,
            name: 'Claire Grd',
            rating: 5,
            text: 'Très bien accueillie. Massage exquis ! Première fois ici et je ne suis pas déçue. Je reviendrais :)',
            service: 'Massage',
        },
        {
            id: 10,
            name: 'Hélène ANDRE',
            rating: 5,
            text: 'Fabuleux ! Mes ongles étaient trop courts, dédoublés, très moches ! Et avec un gel bio, et un vernis bio, les voici protégés et magnifiques !',
            service: 'Onglerie Bio',
        },
        {
            id: 11,
            name: 'Louise Mouton',
            rating: 5,
            text: 'Excellente esthéticienne, je recommande les yeux fermés. Elle utilise uniquement des produits naturels, notamment la cire de miel qui est magique.',
            service: 'Épilation Miel',
        },
        {
            id: 12,
            name: 'Dado Latifa',
            rating: 5,
            text: 'Browlift parfait et vraiment perfectionniste. Vraiment top ☺️☺️ je vais revenir à chaque fois pour faire mes sourcils.',
            service: 'Brow Lift',
        },
        {
            id: 13,
            name: 'Lison Olmeta',
            rating: 5,
            text: 'Un institut vraiment au top ! En tant que cliente, j’ai toujours été ravie des soins : un accueil chaleureux, une ambiance apaisante.',
            service: 'Soin',
        },
        {
            id: 14,
            name: 'Clara Olivia GAULIN',
            rating: 5,
            text: 'Aurore est très consciencieuse et appliquée dans son travail. J’ai fait une épilation au miel qui a été peu douloureuse.',
            service: 'Épilation Miel',
        },
        {
            id: 15,
            name: 'Isabelle Vigneron',
            rating: 5,
            text: 'Une douce parenthèse entre les mains d\'Aurore... une professionnelle avec un vrai talent ! Une connaissance des différentes manipulations.',
            service: 'Massage',
        },
        {
            id: 16,
            name: 'Emma Aguilar',
            rating: 5,
            text: 'Je suis passée aux secrets d\'ambre pour un massage du dos, et ça m\'a fait un bien fou !',
            service: 'Massage Dos',
        },
        {
            id: 17,
            name: 'Plume',
            rating: 5,
            text: 'Présente aujourd\'hui pour un soin "beauté des pieds", j\'ai particulièrement apprécié la douceur de mes pieds après la prestation.',
            service: 'Beauté des Pieds',
        },
        {
            id: 18,
            name: 'Aurélie DRAKE',
            rating: 5,
            text: 'Ma fille a été très contente pour sa première épilation de l’accueil chaleureux et rassurant d’Aurore qui est une personne qualifiée.',
            service: 'Épilation',
        },
        {
            id: 19,
            name: 'Olivia SERENELLI-PESIN',
            rating: 5,
            text: 'Première fois ici pour une manucure + vernis semi permanent, c\'était parfait ! Petit café en arrivant, discussions agréables.',
            service: 'Manucure',
        }
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
            </div>

            <div className="reviews-scroller">
                <div className="reviews-track">
                    {/* Original Reviews */}
                    {reviews.map((review) => (
                        <a
                            href="https://www.google.com/search?sca_esv=362c7c7bfa1ca87d&rlz=1C1FHFK_frFR1191&hl=fr-FR&biw=2260&bih=1062&sxsrf=AE3TifMXDA6wrOUZdIbxLKedKRt0_fScWA:1764880123834&q=Les+Secrets+d%27Ambre+Avis&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMRNkrxFkO5_RLFLCzLbD6a7tnu8TdA_uLL9DbSSfoSFAE-FxTrnn5Xs-WNsNoPmJk2D6Wqk%3D&uds=AOm0WdGNah9AtkGsBTNdp6ZQwrnR9AVrxFPJ6Sf5fSTDMaX4dx7kXspERDVTalE3gqDCRPrO7uuUdvcgpeqBjuuZwqwXBfyzcUFpvWM3NwRdoyft9nR1Wmz14EHSK737fRCvDftKMuk5&sa=X&ved=2ahUKEwjMsejm4qSRAxWnoScCHW9cNC0Q3PALegQIPRAF"
                            target="_blank"
                            rel="noopener noreferrer"
                            key={`original-${review.id}`}
                            className="review-card"
                        >
                            <div className="review-stars">
                                {renderStars(review.rating)}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-footer">
                                <div className="review-google-icon" style={{ color: 'var(--color-secondary)' }} aria-label="Avis Google" role="img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                        <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                                    </svg>
                                </div>
                                <div className="review-author">
                                    <span className="review-name">{review.name}</span>
                                    <span className="review-service">{review.service}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                    {/* Duplicated Reviews for Infinite Scroll */}
                    {reviews.map((review) => (
                        <a
                            href="https://www.google.com/search?sca_esv=362c7c7bfa1ca87d&rlz=1C1FHFK_frFR1191&hl=fr-FR&biw=2260&bih=1062&sxsrf=AE3TifMXDA6wrOUZdIbxLKedKRt0_fScWA:1764880123834&q=Les+Secrets+d%27Ambre+Avis&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMRNkrxFkO5_RLFLCzLbD6a7tnu8TdA_uLL9DbSSfoSFAE-FxTrnn5Xs-WNsNoPmJk2D6Wqk%3D&uds=AOm0WdGNah9AtkGsBTNdp6ZQwrnR9AVrxFPJ6Sf5fSTDMaX4dx7kXspERDVTalE3gqDCRPrO7uuUdvcgpeqBjuuZwqwXBfyzcUFpvWM3NwRdoyft9nR1Wmz14EHSK737fRCvDftKMuk5&sa=X&ved=2ahUKEwjMsejm4qSRAxWnoScCHW9cNC0Q3PALegQIPRAF"
                            target="_blank"
                            rel="noopener noreferrer"
                            key={`duplicate-${review.id}`}
                            className="review-card"
                        >
                            <div className="review-stars">
                                {renderStars(review.rating)}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-footer">
                                <div className="review-google-icon" style={{ color: 'var(--color-secondary)' }} aria-label="Avis Google" role="img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                        <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                                    </svg>
                                </div>
                                <div className="review-author">
                                    <span className="review-name">{review.name}</span>
                                    <span className="review-service">{review.service}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;





