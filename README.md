# Les Secrets d'Ambre - Site Web Officiel

Un site web moderne, responsive et performant pour le salon de beauté "Les Secrets d'Ambre" situé à Montpellier.

## 🌟 Fonctionnalités

### Design & UX
- ✅ Design moderne et élégant avec palette bordeaux (#740a18) & or (#e7b42d)
- ✅ Responsive complet (mobile, tablette, desktop)
- ✅ Animations au scroll fluides (Intersection Observer API)
- ✅ Effet parallax sur Hero banner (desktop uniquement)
- ✅ Transitions et micro-interactions soignées
- ✅ Performance optimisée (60fps, GPU acceleration)

### Sections
1. **Header** - Navigation sticky avec menu hamburger mobile
2. **Hero** - Bannière d'accueil avec gradient animé et CTA
3. **À Propos** - Présentation avec 3 cartes valeurs (Expertise, Qualité, Bien-être)
4. **Services** - 20 catégories de services avec modals détaillés (~300 prestations)
5. **Contact** - Informations complètes + CTA réservation Planity
6. **Footer** - 4 colonnes avec horaires, contact, réseaux sociaux

### Fonctionnalités Techniques
- ✅ **300+ services** organisés en 20 catégories
- ✅ **Modals interactifs** avec scroll lock
- ✅ **Smooth scroll** vers sections internes
- ✅ **Keyboard navigation** (Tab, Escape)
- ✅ **SEO optimisé** (meta tags, Open Graph, Schema.org)
- ✅ **Accessibilité WCAG AA** (alt texts, ARIA labels, semantic HTML)
- ✅ **Performance** (< 2.5s LCP, < 100ms FID)

## 🚀 Installation & Développement

### Prérequis
- Node.js 16+ et npm

### Installation
```bash
# Cloner le repository
git clone https://github.com/yourusername/lessecretdambre.git
cd lessecretdambre

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5174/`

### Build Production
```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du Projet

```
lessecretdambre/
├── src/
│   ├── components/
│   │   ├── Header.jsx / .css        # Navigation + menu
│   │   ├── Hero.jsx / .css          # Hero banner
│   │   ├── About.jsx / .css         # Section À Propos
│   │   ├── Services.jsx / .css      # Grille services
│   │   ├── ServiceModal.jsx / .css  # Modal détails
│   │   ├── Contact.jsx / .css       # Contact + CTA
│   │   └── Footer.jsx / .css        # Footer 4 colonnes
│   ├── data/
│   │   └── servicesData.js          # 300+ services structurés
│   ├── hooks/
│   │   └── useScrollAnimation.js    # Intersection Observer + Parallax
│   ├── icons/
│   │   └── ServiceIcons.jsx         # 20 icônes SVG custom
│   ├── App.jsx                      # Composant principal
│   ├── index.css                    # Styles globaux + animations
│   └── main.jsx                     # Point d'entrée
├── index.html                       # Meta tags SEO
├── package.json
└── README.md
```

## 🎨 Design System

### Couleurs
- **Primaire (Bordeaux):** `#740a18`
- **Secondaire (Or):** `#e7b42d`
- **Fond:** `#f9f7f4`
- **Blanc:** `#ffffff`
- **Texte:** `#000000`
- **Texte Secondaire:** `#333333`

### Typographie
- **Titres:** Playfair Display (400, 600, 700)
- **Corps:** Inter (300, 400, 600, 700)

### Breakpoints
- **Mobile:** < 768px
- **Tablette:** 768px - 1023px
- **Desktop:** ≥ 1024px

## 📊 Performance

### Lighthouse Scores (Target)
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

### Core Web Vitals
- **LCP:** < 2.5s (Largest Contentful Paint)
- **FID:** < 100ms (First Input Delay)
- **CLS:** < 0.1 (Cumulative Layout Shift)

### Optimisations
- ✅ Transform & opacity pour animations (GPU accelerated)
- ✅ Parallax désactivé mobile/tablette
- ✅ Delays réduits sur mobile
- ✅ Will-change appliqué intelligemment
- ✅ Prefers-reduced-motion respecté

## ♿ Accessibilité

- ✅ **WCAG 2.1 AA compliant**
- ✅ Contrast ratios validés
- ✅ Navigation clavier complète
- ✅ ARIA labels sur éléments interactifs
- ✅ Alt texts descriptifs
- ✅ Semantic HTML (header, nav, main, section, footer)
- ✅ Focus states visible

## 🔍 SEO

### Meta Tags
- Title: "Les Secrets d'Ambre - Salon de Beauté Montpellier | Épilation, Soins, Massages"
- Description: Optimisée pour "épilation Montpellier", "salon beauté Montpellier"
- Keywords: épilation, soins, massage, Montpellier, beauté naturelle

### Structured Data (Schema.org)
- Type: LocalBusiness
- Adresse complète
- Horaires d'ouverture
- Téléphone & email
- Zone desservie: Montpellier

### Open Graph
- og:title, og:description, og:type, og:url
- Prêt pour partage sur réseaux sociaux

## 📱 Responsive Design

### Mobile (< 768px)
- Menu hamburger
- 1 colonne grille services
- Footer 1 colonne
- Animations simplifiées (0.4s vs 0.6s)
- Parallax désactivé

### Tablette (768px - 1023px)
- 2 colonnes services
- Footer 2 colonnes
- Parallax désactivé

### Desktop (≥ 1024px)
- 3 colonnes services
- Footer 4 colonnes
- Parallax hero actif
- Toutes animations complètes

## 🔗 Liens Externes

- **Réservation Planity:** [https://www.planity.com/les-secrets-dambre...](https://www.planity.com/les-secrets-dambre-epilation-miel-bio-caramel-orientale-soin-peaux-noires-34090-montpellier)
- **Instagram:** [@lessecretsdambre](https://www.instagram.com/lessecretsdambre/)
- **Email:** contact@lessecretsdambre.fr
- **Téléphone:** 06 62 36 01 08

## 📍 Informations Salon

**Les Secrets d'Ambre**
17 Rue Lunaret, 34090 Montpellier

**Horaires:**
- Lundi: 13h00 - 18h00
- Mardi: 10h00 - 21h00
- Mercredi: 10h00 - 18h00
- Jeudi: 10h00 - 18h00
- Vendredi: 10h00 - 18h00
- Samedi: 10h00 - 18h00
- Dimanche: Fermé

## 🚀 Déploiement

### Options Recommandées

#### 1. Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

#### 2. Netlify
```bash
npm run build
# Drag & drop le dossier dist/ sur Netlify
```

#### 3. GitHub Pages
```bash
npm run build
# Configure GitHub Pages pour servir depuis /dist
```

### Avant déploiement
1. ✅ Vérifier que `npm run build` passe sans erreurs
2. ✅ Tester avec `npm run preview`
3. ✅ Vérifier tous les liens externes
4. ✅ Tester responsive sur vrais devices
5. ✅ Vérifier Lighthouse scores

## 🛠️ Technologies Utilisées

- **Framework:** React 18 + Vite
- **Styling:** CSS pur (vanilla CSS)
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Inter, Playfair Display)
- **Animations:** CSS + Intersection Observer API
- **Build:** Vite

## 📝 Licence

© 2024 Les Secrets d'Ambre. Tous droits réservés.

---

**Site créé avec ❤️ à Montpellier**
