import { useState } from 'react';
import servicesData from '../data/servicesData';
import ServiceModal from './ServiceModal';
import useScrollAnimation from '../hooks/useScrollAnimation';
import {
    CireTradIcon,
    CotonIcon,
    MielIcon,
    FilIcon,
    CireHommeIcon,
    CotonHommeIcon,
    MielHommeIcon,
    MainsPiedsIcon,
    OnglerieIcon,
    HammamIcon,
    CorpsSoinsIcon,
    MassageIcon,
    MinceurIcon,
    VisageIcon,
    RegardIcon,
    MaquillageIcon,
    RelaxationIcon,
    MariageIcon,
    ForfaitMielIcon,
    ForfaitCireIcon,
} from './icons/ServiceIcons';
import './Services.css';

const Services = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    // Trigger scroll animations when section enters viewport (small delay for cascade effect)
    useScrollAnimation({ threshold: 0.05, triggerOnce: true });

    // Icon mapping
    const iconMap = {
        1: <CireTradIcon />,
        2: <CotonIcon />,
        3: <MielIcon />,
        4: <FilIcon />,
        5: <CireHommeIcon />,
        6: <CotonHommeIcon />,
        7: <MielHommeIcon />,
        8: <MainsPiedsIcon />,
        9: <OnglerieIcon />,
        10: <HammamIcon />,
        11: <CorpsSoinsIcon />,
        12: <MassageIcon />,
        13: <MinceurIcon />,
        14: <VisageIcon />,
        15: <RegardIcon />,
        16: <MaquillageIcon />,
        17: <RelaxationIcon />,
        18: <MariageIcon />,
        19: <ForfaitMielIcon />,
        20: <ForfaitCireIcon />,
    };

    // Open modal
    const openModal = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };

    // Close modal
    const closeModal = () => {
        setSelectedCategoryId(null);
    };

    // Find selected category
    const selectedCategory = servicesData.find(
        cat => cat.id === selectedCategoryId
    );

    // Add icon to selected category for modal
    const categoryWithIcon = selectedCategory ? {
        ...selectedCategory,
        icon: iconMap[selectedCategory.id]
    } : null;

    return (
        <>
            <section id="services" className="services section">
                <div className="container">
                    <div className="services-header text-center mb-4">
                        <h2 className="text-primary" data-animate="scale">Nos Services</h2>
                        <div className="underline"></div>
                        <p className="services-subtitle">
                            Découvrez notre large gamme de soins et prestations pour votre bien-être
                        </p>
                    </div>

                    <div className="services-grid">
                        {servicesData.map((category, index) => (
                            <div
                                key={category.id}
                                className="service-card"
                                data-animate="fade-up"
                                data-animate-delay={Math.min(index + 1, 20)}
                            >
                                <div className="service-icon-wrapper">
                                    {iconMap[category.id]}
                                </div>
                                <h3 className="service-title">{category.category}</h3>
                                <p className="service-info">
                                    {category.services.length} {category.services.length > 1 ? 'services' : 'service'}
                                </p>
                                <p className="service-price">
                                    À partir de {category.startingPrice}€
                                </p>
                                <button
                                    className="btn-view-all"
                                    onClick={() => openModal(category.id)}
                                    aria-label={`Voir tous les services ${category.category}`}
                                >
                                    Voir tous
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {categoryWithIcon && (
                <ServiceModal
                    category={categoryWithIcon}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default Services;
