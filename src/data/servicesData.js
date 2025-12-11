// DONNÉES DYNAMIQUES - CHARGÉES DEPUIS LES JSON (CMS)
// Les fichiers JSON sont générés/édités par Decap CMS dans src/content/services/

// Importation dynamique de tous les fichiers JSON du dossier content/services
const servicesModules = import.meta.glob('../content/services/*.json', { eager: true });

// Transformation de l'objet de modules en tableau trié par ID
const servicesData = Object.values(servicesModules)
    .map(mod => mod.default || mod) // Gère l'import ESM ou JSON direct
    .sort((a, b) => a.id - b.id); // Tri par ID pour garder l'ordre logique

// Définition des groupes principaux (Structure fixe pour le layout)
// Les sous-catégories sont maintenant mappées dynamiquement via l'ID
export const categoryGroups = [
    {
        id: 'visage',
        title: 'Visage',
        subCategories: [14, 15, 16, 18]
    },
    {
        id: 'corps',
        title: 'Corps / Hammam',
        subCategories: [10, 11, 13]
    },
    {
        id: 'onglerie',
        title: 'Onglerie',
        subCategories: [8, 9]
    },
    {
        id: 'epilation',
        title: 'Épilation',
        subCategories: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        id: 'relaxation',
        title: 'Relaxation / Coaching',
        subCategories: [12, 17]
    },
    {
        id: 'forfaits',
        title: 'Forfaits',
        subCategories: [19, 20]
    }
];

export default servicesData;
