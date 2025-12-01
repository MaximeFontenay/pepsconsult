# PEP'S CONSULT

Site web vitrine pour Pep's Consult, cabinet de formation et coaching professionnel basé à Lyon.

## Technologies

- **Astro 5** - Framework de génération statique
- **Vue.js 3** - Composants interactifs
- **Tailwind CSS** - Styling

## Pages du site

### Page d'accueil [/](src/pages/index.astro)

- Présentation des 3 solutions principales (Ingénierie, Coaching, Formations)
- Section "Pourquoi me choisir" avec expertise, approche, vision et engagement
- Témoignages clients avec défilement automatique
- CTA vers prise de rendez-vous

### Page formations [/formations](src/pages/formations.astro)

- Certification QUALIOPI
- Informations sur les financements (France Travail, OPCO)
- Certificat PDF téléchargeable

### Services entreprises [/services/entreprises](src/pages/services/entreprises/index.astro)

Vue d'ensemble avec 4 services :

- **Mise à niveau** - Renforcement des compétences
- **Ingénierie formation** - Conception de parcours pédagogiques
- **Formation formateur** - Transmission des savoirs
- **Création de formation** - Développement de modules sur mesure

Chaque service a sa propre page détail via [/services/entreprises/[service]](src/pages/services/entreprises/[service].astro)

### Services particuliers [/services/particuliers](src/pages/services/particuliers/index.astro)

Vue d'ensemble avec 5 services :

- **Coaching** - Développement personnel et professionnel
- **Préparation retour à l'emploi** - Accompagnement recherche d'emploi
- **Prendre la parole** - Aisance et confiance à l'oral
- **Bilan d'orientation** - Définition du projet professionnel
- **Transmettre son savoir** - Formation de formateurs

Chaque service a sa propre page détail via [/services/particuliers/[service]](src/pages/services/particuliers/[service].astro)

### Page contact [/contact](src/pages/contact.astro)

- Formulaire de contact
- Widget Calendly pour prise de rendez-vous

### Pages légales

- [/mentions-legales](src/pages/mentions-legales.astro) - Mentions légales
- [/cgv](src/pages/cgv.astro) - Conditions générales de vente
- [/politique-confidentialite](src/pages/politique-confidentialite.astro) - Politique de confidentialité
- [/faq](src/pages/faq.astro) - Questions fréquentes

## Scripts

```bash
pnpm dev      # Lancer le serveur de développement
pnpm build    # Générer le site statique
pnpm preview  # Prévisualiser le build
```

## Contact

Informations centralisées dans [src/globals.ts](src/globals.ts)
