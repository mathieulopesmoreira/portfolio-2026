# Portfolio Next.js Moderne

Un portfolio moderne et responsive créé avec Next.js, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- ✨ Design moderne et épuré
- 🌓 Mode sombre/clair
- 📱 Entièrement responsive
- 🎨 Animations fluides avec Framer Motion
- ⚡ Performances optimisées avec Next.js 15
- 🎯 TypeScript pour la sécurité des types
- 💅 Tailwind CSS pour le styling

## 📋 Sections

- **Hero** : Introduction accrocheuse avec animations
- **À propos** : Présentation de vos compétences et expertises
- **Projets** : Showcase de vos réalisations
- **Compétences** : Visualisation de vos compétences techniques
- **Contact** : Formulaire de contact et informations

## 🛠️ Technologies utilisées

- [Next.js 15](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Langage de programmation
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Bibliothèque d'animations
- [Lucide React](https://lucide.dev/) - Icônes

## 📦 Installation

1. Assurez-vous d'avoir Node.js installé (version 18 ou supérieure)

2. Installez les dépendances :
```bash
npm install
```

## 🍎 Démarrage sur Mac

Si tu veux lancer ce projet sur un Mac, fais exactement ceci :

1. Installer Node.js depuis [nodejs.org](https://nodejs.org/)
2. Ouvrir l'application Terminal
3. Aller dans le dossier du projet
```bash
cd /chemin/vers/Portfolio
```
4. Installer les dépendances
```bash
npm install
```
5. Démarrer le serveur local
```bash
npm run dev
```
6. Ouvrir le site dans ton navigateur
```bash
http://localhost:3000
```

Si la commande `cd` ne fonctionne pas, tu peux glisser le dossier du projet dans le Terminal pour récupérer automatiquement le bon chemin.

## 🚀 Démarrage

Pour lancer le serveur de développement :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build

Pour créer une version de production :

```bash
npm run build
npm start
```

## 🎨 Personnalisation

1. **Informations personnelles** : Modifiez les informations dans les composants :
   - `src/components/Hero.tsx` : Nom, titre, description
   - `src/components/Contact.tsx` : Email, téléphone, localisation
   - `src/components/Footer.tsx` : Liens réseaux sociaux

2. **Projets** : Ajoutez vos projets dans `src/components/Projects.tsx`

3. **Compétences** : Personnalisez vos compétences dans `src/components/Skills.tsx`

4. **Couleurs** : Modifiez le thème dans `tailwind.config.ts`

## 📄 Structure du projet

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       └── ThemeProvider.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🤝 Contribution

N'hésitez pas à personnaliser ce portfolio selon vos besoins !

## 📝 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.
