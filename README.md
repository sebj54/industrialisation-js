# Industrialisation des développements JavaScript

## Introduction

### Slides

[https://slides.com/sebastienjean/industrialisation-des-developpements-javascript](https://slides.com/sebastienjean/industrialisation-des-developpements-javascript)

### Description

Les TP de ce module ont pour but de mettre en pratique les différentes techniques d'industrialisation vues pendant la formation.

## Description des différents TP

### TP 0

**Dossier**: `tp-0`.

Ce dossier contient les fichiers de base, non industrialisés. Ils vont nous permettre de mettre en place les différentes techniques.

Il s'agit d'un simple site internet réalisé avec jQuery et Bootstrap. Il présente une collection d'images. Il est tiré de cet exemple Bootstrap : [https://getbootstrap.com/docs/4.3/examples/album/](https://getbootstrap.com/docs/4.3/examples/album/).

Le fichier `assets/js/main.js` remplace toutes les images (SVG placeholders) par une image aléatoire tirée du site [Lorem Picsum](https://picsum.photos/).

### TP NPM

**Dossier**: `tp-npm`.

Ce TP a pour but de remplacer tous les liens pointant vers des CDN :

 - https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
 - https://code.jquery.com/jquery-3.3.1.slim.min.js
 - https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js

Pour cela, on installe les dépendances avec NPM et on remplace les chemins des ressources par des chemins locaux.

#### Installation

```
npm ci
```

#### Lancement

```
./index.html
```

### TP Gulp

**Dossier**: `tp-gulp`.

Ce TP a pour but de produire un dossier `dist` contenant toutes les ressources à utiliser pour la mise en ligne du site.

Les fichiers CSS et JS sont minifiés, le fichier `index.html` et les dépendances (jQuery, Bootstrap) sont copiées dans le dossier `dist`. Cette opération est réalisée à partir de ce fichier `gulpfile.js` : [https://github.com/cferdinandi/gulp-boilerplate/blob/master/gulpfile.js](https://github.com/cferdinandi/gulp-boilerplate/blob/master/gulpfile.js).

🚨 Pour cela, j'ai modifé `copyFiles` du fichier `gulpfile.js` pour qu'il prenne en paramètre d'entrée un tableau (pour spécifier plusieurs fichiers à copier).

#### Installation

```
npm install --global gulp-cli
npm ci
gulp
```

#### Lancement

```
./dist/index.html
```

### TP Webpack

**Dossier**: `tp-webpack`.

Ce TP a pour but de produire un dossier `dist` contenant notre fichier `index.html` et un bundle à utiliser pour la mise en ligne du site.

Pour cela, j'ai modifié le code JS pour y inclure toutes les dépendances : locales, distantes, CSS et JS grâce au fichier `assets/js/index.js`.

#### Installation

```
npm ci
npm run build
```

#### Lancement

```
./dist/index.html
```

### TP Jest

**Dossier**: `tp-jest`.

Ce TP a pour but d'ajouter des tests à notre site. Dans cet exemple, seuls les tests pour la fonction `getImage` sont ajoutés.

#### Installation

```
npm ci
```

#### Lancement

```
npm run test
```
