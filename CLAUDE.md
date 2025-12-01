# CLAUDE.md - Documentation Pep's Consult

> Documentation de référence rapide pour interventions sur le projet vitrine Pep's Consult

## Vue d'ensemble

**Pep's Consult** est un site vitrine présentant les services de conseil et formation professionnelle de Nada Bitar, certifiée Qualiopi.

- **URL**: https://www.pepsconsult.fr
- **Type**: Site statique généré (SSG)
- **Stack principale**: Astro 5 + Vue.js 3 + Tailwind CSS 3
- **Gestionnaire de paquets**: pnpm

---

## Quick Start

```bash
# Installation des dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev
# ou
pnpm start

# Générer le site statique
pnpm build

# Prévisualiser le build
pnpm preview
```

**Aucune variable d'environnement requise** (API key Web3Forms en dur dans ContactForm.vue)

---

## Architecture Technique

### Stack et Versions Clés

- **Astro** 5.16.3 - Framework SSG principal
- **Vue.js** 3.5.25 - Composants interactifs
- **Tailwind CSS** 3.4.17 - Styling utility-first
- **Sass** 1.94.2 - Préprocesseur CSS
- **TypeScript** 5.5.4 - Support typé

### Intégrations Actro Actives

```javascript
// astro.config.mjs
integrations: [
  tailwind({ applyBaseStyles: false }),
  compress(),                    // Compression HTML/CSS/JS/Images
  vue(),                         // Support Vue.js
  sitemap(),                     // Génération sitemap.xml
  robotsTxt()                    // Génération robots.txt
]
```

### Structure des Dossiers

```
pepsconsult/
├── src/
│   ├── pages/                 # Routes (file-based routing)
│   │   ├── index.astro        # Page d'accueil
│   │   ├── contact.astro      # Contact + Calendly
│   │   ├── formations.astro   # Certifications Qualiopi
│   │   ├── nada.astro         # Qui suis-je
│   │   ├── faq.astro          # Questions fréquentes
│   │   ├── services/
│   │   │   ├── entreprises/   # 4 services B2B
│   │   │   └── particuliers/  # 5 services B2C
│   │   └── [pages légales]/
│   ├── components/            # Composants réutilisables
│   │   ├── Header.astro       # Navigation responsive
│   │   ├── Footer.astro       # Footer avec contact
│   │   ├── ContactForm.vue    # Formulaire Vue.js
│   │   └── waves/             # Animations SVG
│   ├── layouts/
│   │   └── DefaultLayout.astro # Layout principal
│   ├── assets/
│   │   ├── images/            # Images organisées par section
│   │   └── scss/
│   │       └── globals.scss   # Styles globaux
│   └── globals.ts             # Infos de contact
├── public/                    # Fichiers statiques
├── astro.config.mjs           # Config Astro
├── tailwind.config.js         # Config Tailwind
└── package.json
```

### Routing

**File-based routing** Astro :
- `/` → `pages/index.astro`
- `/contact` → `pages/contact.astro`
- `/services/entreprises` → `pages/services/entreprises/index.astro`
- `/services/entreprises/[service]` → Routes dynamiques via `getStaticPaths()`

---

## Composants Principaux

### Layouts

**DefaultLayout.astro** ([src/layouts/DefaultLayout.astro](src/layouts/DefaultLayout.astro))
- Template HTML principal
- Props SEO: title, description, image, url, author
- Intègre Header, slot, Footer
- View transitions Astro (fade effect)

### Composants Astro

**Header.astro** ([src/components/Header.astro](src/components/Header.astro))
- Navigation responsive (desktop + mobile)
- Menu déroulant "Nos services"
- Burger menu animé

**Footer.astro** ([src/components/Footer.astro](src/components/Footer.astro))
- Infos contact (email, téléphone)
- Icônes sociales (LinkedIn, WhatsApp, Email)
- Navigation légale
- Bouton retour haut de page

**ButtonMain.astro** ([src/components/ButtonMain.astro](src/components/ButtonMain.astro))
- Bouton réutilisable
- Variantes: `primary` (bleu), `secondary` (jaune)

**ServiceTemplate.astro** ([src/components/ServiceTemplate.astro](src/components/ServiceTemplate.astro))
- Template pour pages services détaillées
- Props: title, description, image, backLink

**Waves** ([src/components/waves/](src/components/waves/))
- 4 variantes d'animations SVG décoratives
- wavesDesktop, wavesDesktop2, wavesDesktop3, wavesMobile

### Composants Vue.js

**ContactForm.vue** ([src/components/ContactForm.vue](src/components/ContactForm.vue))
- Formulaire de contact interactif
- Intégration Web3Forms API
- Validation HTML native
- Feedback utilisateur après soumission

---

## Pages et Routes

### Routes Principales

| Route | Fichier | Description |
|-------|---------|-------------|
| `/` | `index.astro` | Page d'accueil (3 solutions + témoignages) |
| `/contact` | `contact.astro` | Formulaire + widget Calendly |
| `/formations` | `formations.astro` | Certification Qualiopi + financements |
| `/nada` | `nada.astro` | Présentation Nada Bitar |
| `/faq` | `faq.astro` | Questions fréquentes |
| `/services/entreprises` | `entreprises/index.astro` | Vue d'ensemble 4 services B2B |
| `/services/particuliers` | `particuliers/index.astro` | Vue d'ensemble 5 services B2C |

### Routes Dynamiques Services

**Services Entreprises** ([src/pages/services/entreprises/\[service\].astro](src/pages/services/entreprises/[service].astro))
- `mise-a-niveau`
- `ingenierie-formation`
- `formation-formateur`
- `creation-de-formation`

**Services Particuliers** ([src/pages/services/particuliers/\[service\].astro](src/pages/services/particuliers/[service].astro))
- `coaching`
- `bilan-competences`
- `bilan-orientation`
- `vae`
- `preparation-entretien`

### Pages Légales

- `/mentions-legales`
- `/cgv` (Conditions Générales de Vente)
- `/politique-confidentialite`

---

## Styling et Design

### Palette de Couleurs

```javascript
// tailwind.config.js
colors: {
  primary: '#0089DC',      // Bleu principal
  secondary: '#F5D70E',    // Jaune accents
  tertiary: '#5D5AFE',     // Violet hover
  light: '#F2F2F2'         // Gris clair
}
```

**Utilisation**:
- `bg-primary`, `text-primary`
- `bg-secondary`, `text-secondary`
- `bg-tertiary`, `hover:bg-tertiary`

### Polices

```javascript
// tailwind.config.js
fontFamily: {
  satoshi: ['Poppins', 'sans-serif'],
  poppins: ['Satoshi', 'sans-serif']
}
```

**Import**: Google Fonts Poppins (tous les poids) dans `globals.scss`

### Classes Utilitaires Personnalisées

```scss
// src/assets/scss/globals.scss
.flx-center          // Flexbox center (flex items-center justify-center)
.hide-scrollbar      // Cache la scrollbar
```

### Breakpoint Custom

```javascript
// tailwind.config.js
screens: {
  waves: '500px'     // Pour animations waves
}
```

---

## Configuration

### astro.config.mjs

```javascript
export default defineConfig({
  site: 'https://www.pepsconsult.fr',
  output: 'static',              // Génération statique
  compressHTML: true,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    compress(),
    vue(),
    sitemap(),
    robotsTxt()
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'  // Prefetch au viewport
  }
})
```

### tailwind.config.js

- **Dark mode**: `class` (class-based)
- **Content**: `['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']`
- **Couleurs**: primary, secondary, tertiary, light
- **Polices**: satoshi, poppins
- **Tailles de texte personnalisées**: xxs (12px) → xxl (48px)

### Linting et Formatting

**ESLint** ([.eslintrc.js](.eslintrc.js))
- Rules: recommended
- Plugins: astro, jsx-a11y (strict), typescript

**Prettier** ([.prettierrc](.prettierrc))
```json
{
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "printWidth": 120,
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"]
}
```

---

## Données Globales

### Contact Info

**Fichier**: [src/globals.ts](src/globals.ts)

```typescript
export const phone = '07 49 37 62 21'
export const whatsapp = '+33749376221'
export const email = 'nada.bitar@pepsconsult.fr'
export const address = '25 Rue du Maréchal Foch, 78000 Versailles'
```

**Utilisation**: Importés dans Header, Footer, pages de contact

### Services Externes

**Web3Forms** (ContactForm.vue)
- Service d'envoi d'emails
- API key stockée en dur dans le composant
- Endpoint: `https://api.web3forms.com/submit`

**Calendly** (contact.astro)
- Widget de prise de rendez-vous
- Script intégré dans la page contact

**Réseaux Sociaux**
- LinkedIn: Lien direct dans Footer
- WhatsApp: Lien direct avec numéro pré-rempli

---

## Points d'Attention

### Fichiers à Nettoyer

- `src/pages/formations copy.astro` - Fichier de backup à supprimer

### Sécurité

- **Web3Forms API Key** stockée en dur dans ContactForm.vue
  - Considérer de déplacer vers variables d'environnement
  - Fichier: [src/components/ContactForm.vue](src/components/ContactForm.vue)

### Certification Qualiopi

- Certificat PDF disponible dans `/public/`
- Logos partenaires dans `src/assets/images/formations/`
- Page dédiée: [src/pages/formations.astro](src/pages/formations.astro)

### Performance

- Compression automatique active (astro-compress)
- Prefetch viewport strategy
- Images optimisées via astro:assets
- Sitemap et robots.txt générés automatiquement

---

## Tâches Courantes

### Ajouter un Nouveau Service

**Entreprises** ([src/pages/services/entreprises/\[service\].astro](src/pages/services/entreprises/[service].astro)):

```typescript
// Dans getStaticPaths()
const services = {
  'nouveau-service': {
    title: 'Titre du service',
    description: `<p>Description HTML...</p>`,
    image: '/src/assets/images/services/nouveau.png'
  }
}
```

**Particuliers**: Même structure dans `[src/pages/services/particuliers/\[service\].astro](src/pages/services/particuliers/[service].astro)`

### Modifier les Couleurs

**Fichier**: [tailwind.config.js](tailwind.config.js)

```javascript
colors: {
  primary: '#NOUVELLE_COULEUR',
  // ...
}
```

Puis relancer `pnpm dev` pour regénérer Tailwind.

### Mettre à Jour les Informations de Contact

**Fichier**: [src/globals.ts](src/globals.ts)

Modifier les constantes exportées, elles seront automatiquement mises à jour dans tout le site.

### Ajouter une Page Légale

1. Créer `src/pages/nouvelle-page.astro`
2. Utiliser `DefaultLayout` comme layout
3. Ajouter un lien dans Footer.astro si nécessaire

### Modifier le Menu de Navigation

**Fichier**: [src/components/Header.astro](src/components/Header.astro)

Modifier les liens dans les balises `<nav>` (desktop et mobile).

### Ajouter une Animation Lottie

1. Placer le fichier `.lottie` dans `src/assets/images/lottie/`
2. Importer dans la page :
```astro
---
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import animation from '../assets/images/lottie/mon-animation.lottie'
---

<DotLottieVue
  src={animation}
  autoplay
  client:load
/>
```

### Modifier les Témoignages

**Fichier**: [src/pages/index.astro](src/pages/index.astro)

Chercher la section `.testimonials` et modifier le HTML des cartes de témoignages.

---

## Dépendances Principales

### Production
- `astro` ^5.16.3
- `vue` ^3.5.25
- `tailwindcss` 3.4.17
- `@astrojs/vue` ^5.1.3
- `@astrojs/sitemap` ^3.6.0
- `@lottiefiles/dotlottie-vue` ^0.10.8

### Dev
- `sass` ^1.94.2
- `typescript` ^5.5.4
- `eslint` ^9.39.1
- `prettier` ^3.7.3
- `astro-compress` ^2.3.8

---

## Ressources Utiles

- **Documentation Astro**: https://docs.astro.build
- **Documentation Vue.js**: https://vuejs.org
- **Documentation Tailwind CSS**: https://tailwindcss.com
- **Web3Forms**: https://web3forms.com
- **Calendly**: https://calendly.com

---

## Maintenance

### Mettre à Jour les Dépendances

```bash
# Vérifier les mises à jour
pnpm outdated

# Mettre à jour toutes les dépendances
pnpm update

# Mettre à jour une dépendance spécifique
pnpm update astro
```

### Build et Déploiement

```bash
# Générer le site statique
pnpm build

# Le dossier dist/ contient le site prêt à déployer
# Déployer le contenu de dist/ sur le serveur
```

### Tests de Production Locale

```bash
pnpm build && pnpm preview
```

---

**Dernière mise à jour**: 2025-12-01
**Maintenu par**: Claude Code
**Contact projet**: nada.bitar@pepsconsult.fr
