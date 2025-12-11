
import { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Promotions.css';

const Promotions = () => {
    const [promoData, setPromoData] = useState({ title: '', display: true, images: [] });

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await import('../content/promotions/data.json');
                setPromoData(data.default || data);
            } catch (error) {
                console.error("Erreur chargement promotions:", error);
            }
        };
        loadData();
    }, []);

    useScrollAnimation({ threshold: 0.1 });

    // Si la section est désactivée ou vide, on ne l'affiche pas
    if (!promoData.display || !promoData.images || promoData.images.length === 0) {
        return null;
    }

    return (
        <section id="promotions" className="promotions section">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 data-animate="scale">
                        {promoData.title || "Profitez de nos offres du moment"}
                    </h2>
                    <div className="underline"></div>
                </div>
            </div>

            {promoData.images.length > 4 ? (
                <div className="promotions-scroller">
                    <div className="promotions-track">
                        {/* Original Items */}
                        {promoData.images.map((item, index) => (
                            <div
                                key={`original-${index}`}
                                className="promotion-item"
                            >
                                <img src={item.image} alt={item.alt || "Promotion"} loading="lazy" />
                            </div>
                        ))}
                        {/* Duplicated Items for Loop */}
                        {promoData.images.map((item, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className="promotion-item"
                            >
                                <img src={item.image} alt={item.alt || "Promotion"} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="promotions-grid static-grid">
                    {promoData.images.map((item, index) => (
                        <div
                            key={index}
                            className="promotion-item"
                            data-animate="fade-up"
                            data-animate-delay={Math.min(index, 10)}
                        >
                            <img src={item.image} alt={item.alt || "Promotion"} loading="lazy" />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Promotions;
