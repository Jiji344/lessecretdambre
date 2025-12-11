
import { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Gallery.css';

const Gallery = () => {
    // State pour stocker les données de la galerie
    const [galleryData, setGalleryData] = useState({ title: '', subtitle: '', images: [] });
    // State pour la lightbox (index de l'image sélectionnée, null si fermé)
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Charger les données JSON dynamiquement comme pour les services
    useEffect(() => {
        const loadGalleryData = async () => {
            try {
                const data = await import('../content/gallery/data.json');
                setGalleryData(data.default || data);
            } catch (error) {
                console.error("Erreur chargement galerie:", error);
            }
        };

        loadGalleryData();
    }, []);

    // Animation au scroll
    useScrollAnimation({ threshold: 0.1 });

    const openLightbox = (index) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden'; // Bloquer le scroll
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'auto'; // Réactiver le scroll
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prevIndex) =>
            prevIndex === 0 ? galleryData.images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prevIndex) =>
            prevIndex === galleryData.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Gestion clavier (Flèches et Echap)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') handlePrev(e);
            if (e.key === 'ArrowRight') handleNext(e);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, galleryData.images]);

    const selectedImage = selectedIndex !== null ? galleryData.images[selectedIndex] : null;

    return (
        <section id="gallery" className="gallery section">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 data-animate="scale">
                        {galleryData.title || "Notre Galerie"}
                    </h2>
                    <div className="underline"></div>
                    <p className="section-subtitle" data-animate="fade-up">
                        {galleryData.subtitle}
                    </p>
                </div>

                {(!galleryData.images || galleryData.images.length === 0) ? (
                    <div className="text-center py-5">
                        <p className="italic text-muted">Galerie en cours de construction...</p>
                    </div>
                ) : (
                    <div className="gallery-grid">
                        {galleryData.images.map((item, index) => (
                            <div
                                key={index}
                                className="gallery-item"
                                data-animate="fade-up"
                                data-animate-delay={Math.min(index, 10)}
                                onClick={() => openLightbox(index)}
                            >
                                <img src={item.image} alt={item.alt || "Photo galerie"} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span className="gallery-caption">{item.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="lightbox-backdrop" onClick={closeLightbox}>
                    <button className="lightbox-close" aria-label="Fermer">&times;</button>

                    <button className="lightbox-btn lightbox-prev" onClick={handlePrev} aria-label="Précédent">
                        &#10094;
                    </button>

                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.alt}
                            className="lightbox-img"
                        />
                    </div>

                    <button className="lightbox-btn lightbox-next" onClick={handleNext} aria-label="Suivant">
                        &#10095;
                    </button>
                </div>
            )}
        </section>
    );
};

export default Gallery;
