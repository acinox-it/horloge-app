# ☕ Application Horloge

Application Angular moderne avec horloge, minuteur, réveil et chronomètre.

## 🎯 Fonctionnalités

### 🕐 Horloge
Affichage de l'heure et de la date en temps réel avec mise à jour automatique.

### ⏲️ Minuteur
Compte à rebours configurable (minutes et secondes) avec notification sonore à la fin.

### ⏰ Réveil
Programmation d'alarme à une heure précise avec notification sonore au déclenchement.

### ⏱️ Chronomètre
Mesure de temps précise au dixième de seconde avec start, pause et reset.

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm start
```

Ouvrez votre navigateur à `http://localhost:4200/`

## 📦 Scripts Disponibles

```bash
npm start          # Serveur de développement
npm run build      # Build pour la production
npm test           # Exécuter les tests
npm run watch      # Build en mode watch
```

## 🏗️ Architecture

Structure du projet organisée et maintenable :

```
src/app/
├── components/        # Composants UI
│   ├── clock-display.ts    # Affichage horloge
│   ├── timer.ts            # Minuteur
│   ├── alarm.ts            # Réveil
│   └── stopwatch.ts        # Chronomètre
├── services/          # Logique métier
│   ├── audio.service.ts      # Notifications sonores
│   ├── clock.service.ts      # Logique horloge
│   ├── timer.service.ts      # Logique minuteur
│   ├── alarm.service.ts      # Logique réveil
│   └── stopwatch.service.ts  # Logique chronomètre
├── models/            # Types et interfaces TypeScript
│   └── clock.models.ts
├── constants/         # Configuration et constantes
│   └── clock.constants.ts
├── utils/             # Fonctions utilitaires
│   └── time.utils.ts
└── app.ts            # Composant principal
```

### Principes Appliqués

- ✅ **Separation of Concerns** - Composants, services, modèles séparés
- ✅ **Single Responsibility** - Chaque fichier a une responsabilité unique
- ✅ **Dependency Injection** - Services injectables et testables
- ✅ **Type Safety** - TypeScript strict avec interfaces définies
- ✅ **Signals** - Réactivité optimisée avec Angular Signals

## 🎨 Technologies

- **Angular 21** - Framework principal
- **TypeScript 5.9** - Langage
- **Tailwind CSS 4** - Styles utility-first
- **Signals** - Réactivité moderne
- **Standalone Components** - Architecture sans NgModules
- **Web Audio API** - Notifications sonores

## 🎨 Design

Interface élégante avec :
- Thème café (marron, beige, blanc)
- Design responsive (mobile, tablette, desktop)
- Animations fluides
- Navigation par onglets
- Accessibilité (ARIA)

## 🛠️ Développement

### Prérequis

- Node.js 18 ou supérieur
- npm 9 ou supérieur
- Angular CLI 21

### Installation

```bash
# Cloner le projet
git clone 
cd 

# Installer les dépendances
npm install
```

### Commandes de Développement

```bash
# Serveur de développement avec hot reload
npm start

# Build de production optimisé
npm run build

# Tests unitaires avec Vitest
npm test

# Générer un nouveau composant
ng generate component components/mon-composant

# Générer un nouveau service
ng generate service services/mon-service
```

### Build de Production

```bash
npm run build
```

Les fichiers optimisés seront générés dans `dist/horloge-app/` :
- Bundle size : ~257 KB (66 KB gzipped)
- Code splitting automatique
- Tree-shaking appliqué
- CSS minifié

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (dernières versions)
- ✅ Desktop, tablettes, smartphones
- ✅ Responsive design
- ✅ Support tactile

## 🔊 Notifications Sonores

Les notifications audio utilisent la Web Audio API pour :
- Alerter à la fin du minuteur
- Déclencher l'alarme programmée
- Ton personnalisable (800 Hz sine wave)

## 🎓 Apprentissage

Ce projet démontre :
- Architecture Angular moderne avec Standalone Components
- Utilisation des Signals pour la réactivité
- Séparation propre des responsabilités
- Services avec logique métier isolée
- Composants présentationnels réutilisables
- Gestion du temps en JavaScript
- Intégration Web Audio API

## 📄 Licence

Ce projet est sous licence MIT.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📚 Ressources

- [Angular Documentation](https://angular.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

---

Fait avec ☕ et Angular 21
