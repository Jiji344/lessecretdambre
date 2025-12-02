# Les Secrets d'Ambre - Site Web

Site web moderne pour le salon de beauté "Les Secrets d'Ambre" à Montpellier.

## 🌟 Caractéristiques

### Architecture
- **Framework**: React 18 + Vite
- **Styling**: CSS pur avec design system personnalisé
- **Icons**: Lucide React
- **Responsive**: Mobile-first design (320px+)

### Design
- **Couleurs**:
  - Primaire (Bordeaux): `#740a18`
  - Secondaire (Or): `#e7b42d`
  - Fond: `#f9f7f4`
- **Typographie**:
  - Headings: Playfair Display
  - Body: Inter
- **Animations**: Transitions fluides, hover effects, animations d'entrée

### Sections

#### 1. Header (Navigation)
- Logo "Les Secrets d'Ambre" avec effet gradient
- Menu desktop horizontal
- Menu burger pour mobile
- Smooth scroll vers les sections
- **Non-sticky** (scroll normal)

#### 2. Hero Banner
- Hauteur: 500px (responsive)
- Gradient animé bordeaux → or
- Titre, sous-titre, liste des services
- CTA "Réserver Maintenant" qui scroll vers Contact

#### 3. À Propos
- Texte descriptif du salon
- 3 cartes de caractéristiques:
  - Expertise (10+ ans)
  - Qualité (produits naturels)
  - Bien-être (expérience relaxante)
- Icônes animées avec effet hover

#### 4. Footer
- **4 colonnes** (desktop) → 2 (tablette) → 1 (mobile):
  1. Logo + Tagline
  2. Horaires d'ouverture
  3. Contact (adresse, téléphone, email)
  4. Réseaux sociaux + Bouton Planity
- Fond gradient bordeaux
- Copyright en bas

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
  - Burger menu activé
  - Sections en colonne unique
  - Footer empilé verticalement
- **Tablette**: 768px - 1024px
  - Footer en 2 colonnes
- **Desktop**: > 1024px
  - Layout complet 4 colonnes

## 🚀 Installation et Lancement

### Prérequis
- Node.js (v18+)
- npm ou yarn

### Commandes

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

Le site sera accessible sur http://localhost:5173 (ou 5174 si le port est occupé)

## 📂 Structure du Projet

```
lessecretdambre/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css (Design System)
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design System (index.css)

### Variables CSS
- Couleurs (primary, secondary, background, text)
- Spacing (xs, sm, md, lg, xl)
- Typography (fonts, sizes)
- Transitions & Animations
- Shadows & Border Radius

### Composants Réutilisables
- `.btn` (primary, outline)
- `.card` (avec hover effects)
- `.container` (max-width 1200px)
- `.grid` (responsive grids)
- Utility classes (text-center, mb-*, mt-*)

## 📋 Informations du Salon

### Contact
- **Adresse**: 17 Rue Lunaret, 34090 Montpellier
- **Téléphone**: 06 62 36 01 08
- **Email**: contact@lessecretsdambre.fr
- **Instagram**: @lessecretsdambre

### Horaires
- Lundi: 13h00-18h00
- Mardi: 10h00-21h00
- Mercredi-Samedi: 10h00-18h00
- Dimanche: Fermé

### Réservation en ligne
[Planity](https://www.planity.com/les-secrets-dambre-epilation-miel-bio-caramel-orientale-soin-peaux-noires-34090-montpellier)

## ✨ Fonctionnalités

- ✅ Navigation smooth scroll
- ✅ Menu burger mobile avec animation
- ✅ Hero banner avec gradient animé
- ✅ Cartes de caractéristiques avec hover effects
- ✅ Footer responsive multi-colonnes
- ✅ Design moderne et élégant
- ✅ SEO optimisé (meta tags, semantic HTML)
- ✅ Performance optimisée
- ✅ Accessibilité (aria-labels, semantic tags)

## 🔮 Prochaines Étapes (Phase 2)

- [ ] Section Services détaillée
- [ ] Galerie photos
- [ ] Formulaire de contact
- [ ] Intégration d'un slider de témoignages
- [ ] Animations avancées (AOS, Framer Motion)
- [ ] Mode sombre (optionnel)
- [ ] Optimisation SEO avancée
- [ ] Integration du logo SVG

## 📝 Notes Techniques

- **Production Build**: Utilise Vite pour un bundling optimisé
- **Code Splitting**: Automatique via React lazy loading (si ajouté)
- **CSS**: Pur CSS, pas de framework (flexibilité maximale)
- **Icons**: Lucide React (légère, moderne)
- **Fonts**: Google Fonts (Inter + Playfair Display)

---

**Développé avec ❤️ pour Les Secrets d'Ambre**
