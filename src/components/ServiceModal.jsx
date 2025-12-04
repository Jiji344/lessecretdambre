import { useEffect, useCallback } from 'react';
import { X, ExternalLink } from 'lucide-react';
import './ServiceModal.css';

const ServiceModal = ({ category, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    // Handle Escape key press
    const handleEscKey = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [handleEscKey]);

    // Handle backdrop click
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!category) return null;

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                {/* Close Button - Reste fixe */}
                <button
                    className="modal-close-btn"
                    onClick={onClose}
                    aria-label="Fermer la modal"
                >
                    <X size={28} />
                </button>

                {/* Conteneur Scrollable */}
                <div className="modal-scroll-container">
                    {/* Header */}
                    <div className="modal-header">
                        <div className="modal-header-content">
                            <h2 className="modal-title">{category.category}</h2>
                            <div className="modal-icon">
                                {category.icon}
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    {category.description && (
                        <p className="modal-description">{category.description}</p>
                    )}

                    {/* Note (if exists) */}
                    {category.note && (
                        <div className="modal-note">
                            <strong>Note importante :</strong> {category.note}
                        </div>
                    )}

                    {/* Separator */}
                    <div className="modal-separator"></div>

                    {/* Services List */}
                    <div className="modal-services-list">
                        {category.services.map((service) => (
                            <div key={service.id} className="service-item">
                                <span className="service-name">{service.name}</span>
                                <span className="service-details">
                                    {service.duration} min • {service.price} €
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Fixed Booking Button Footer */}
                <div className="modal-footer">
                    <a
                        href="https://www.planity.com/les-secrets-dambre-epilation-miel-bio-caramel-orientale-soin-peaux-noires-34090-montpellier"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-booking-btn"
                    >
                        <span>Réserver sur Planity</span>
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
