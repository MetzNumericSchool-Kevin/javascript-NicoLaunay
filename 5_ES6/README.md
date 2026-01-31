# Exercices sur ES6+ en JavaScript

## 🎮 Workflow de travail

### Étapes pour chaque exercice

1. **Ouvre `index.html`** dans ton navigateur avec `liveserver`
2. **Ouvre la console** du navigateur avec `F12`
3. **Édite le fichier `exercices.js`** (tous les exercices sont dans ce fichier)
4. **Trouve la section de l'exercice** grâce aux commentaires visuels (ex: `// EXERCICE 1`)
5. **Modifie le code existant** pour utiliser la syntaxe ES6+ moderne
6. **Vérifie dans la console** que le résultat est identique
7. **Fais un commit** avec le titre de l'exercice
8. **Passe au suivant** !

### ⚠️ Règles importantes

- **Tous les exercices sont dans le même fichier** `exercices.js`
- **Le code fonctionne déjà** : tu dois le **moderniser** avec ES6+
- **Le résultat doit être identique** : seule la syntaxe change
- **Consulte le README** pour les explications de chaque fonctionnalité

## 📖 Rappels sur ES6+

ES6 (ECMAScript 2015) et les versions suivantes ont introduit de nombreuses fonctionnalités pour rendre JavaScript plus moderne, lisible et puissant.

### Principales fonctionnalités

**1. Template Literals (backticks)**
```js
// Avant
const message = "Bonjour " + nom + " !";

// ES6+
const message = `Bonjour ${nom} !`;
```

**2. Destructuring (décomposition)**
```js
// Tableaux
const [a, b] = [1, 2];

// Objets
const { nom, age } = personne;
```

**3. Rest operator (...rest)**
```js
const [premier, ...reste] = [1, 2, 3, 4];
// premier = 1, reste = [2, 3, 4]
```

**4. Spread operator (...spread)**
```js
const tableau = [...tableau1, ...tableau2];
const objet = { ...objet1, ...objet2 };
```

**5. Arrow Functions**
```js
// Avant
const double = function(x) { return x * 2; };

// ES6+
const double = (x) => x * 2;
```

**6. Property Shorthand**
```js
const nom = "Alice";
const objet = { nom }; // au lieu de { nom: nom }
```

**7. Modules (import/export)**
```js
// fichier.js
export const maFonction = () => {};

// autre-fichier.js
import { maFonction } from './fichier.js';
```

**8. Async/Await**
```js
async function charger() {
  const data = await fetch(url);
  return data.json();
}
```

---

## 📚 Liste des exercices

### Exercice 1 : Template Literals 📝

**Fichier** : `exercices.js` (section EXERCICE 1)

🎯 **Objectif** : Remplacer la concaténation de chaînes par les **template literals** (backticks).

**Consignes** :

**1.1** : Transforme la fonction `afficheAddresse()` :
- Remplace les `+` par des backticks `` ` ``
- Utilise `${variable}` pour l'interpolation

**1.2** : Transforme l'affichage du menu :
- Utilise les backticks pour les chaînes multilignes
- Plus besoin de `\n` ni de `+`

💡 **Ce que tu vas apprendre** :
- Template literals avec backticks `` ` ``
- Interpolation avec `${expression}`
- Chaînes multilignes sans `\n`

💡 **Astuce** : Les backticks permettent d'écrire du texte sur plusieurs lignes directement, et `${variable}` remplace la concaténation.

---

### Exercice 2 : Destructuring (Décomposition) 📦

**Fichier** : `exercices.js` (section EXERCICE 2)

🎯 **Objectif** : Utiliser la **décomposition** pour extraire des valeurs de tableaux et objets.

**Consignes** :

**2.1** : Décompose le tableau `colors` :
```js
const [red, green, blue, yellow] = colors;
```

**2.2** : Décompose en ignorant certaines valeurs :
```js
const [, green2, blue2] = colors; // Ignore "Red"
```

**2.3** : Décompose l'objet `roman` :
```js
const { title, editor, tome } = roman;
```

**2.4** : Décomposition imbriquée :
- Extrais `roman.mainCharacter.name`
- Extrais `roman.characters[0].name`
- Extrais `roman.characters[1].animeJapaneseVoice`

**2.5** : Échange de variables sans variable temporaire :
```js
[firstname, lastname] = [lastname, firstname];
```

**2.6** : Décomposition dans les paramètres de fonction :
```js
function hello({ firstname, lastname }) { ... }
```

💡 **Ce que tu vas apprendre** :
- Décomposition de tableaux avec `[]`
- Décomposition d'objets avec `{}`
- Décomposition imbriquée
- Ignorer des valeurs avec `,`
- Décomposition dans les paramètres

💡 **Astuce** : La décomposition permet d'extraire plusieurs valeurs en une seule ligne. Pour ignorer une valeur dans un tableau, laisse une virgule vide.

---

### Exercice 3 : Rest Operator (...rest) 🎒

**Fichier** : `exercices.js` (section EXERCICE 3)

🎯 **Objectif** : Utiliser l'**opérateur rest** pour capturer le "reste" des éléments.

**Consignes** :

**3.1** : Décompose `colors` en gardant seulement blue et yellow dans `restOfColors` :
```js
const [, , ...restOfColors] = colors;
```

**3.2** : Décompose `roman` en excluant `type` et `mainCharacter` :
```js
const { type, mainCharacter, ...roman2 } = roman;
```

**3.3** : Utilise le spread pour passer un tableau à `Math.min()` :
```js
Math.min(...randomNumbers)
```

**3.4** : Transforme `min(a, b, c)` pour accepter un nombre illimité de paramètres :
```js
function min(...numbers) { return Math.min(...numbers); }
```

💡 **Ce que tu vas apprendre** :
- Rest operator `...rest` dans la décomposition
- Rest parameters dans les fonctions
- Différence entre rest et spread

💡 **Astuce** : `...rest` capture tous les éléments restants. Dans les paramètres de fonction, il permet d'accepter un nombre variable d'arguments.

---

### Exercice 4 : Spread Operator (...spread) 🌊

**Fichier** : `exercices.js` (section EXERCICE 4)

🎯 **Objectif** : Utiliser l'**opérateur spread** pour étendre des tableaux et objets.

**Consignes** :

**4.1** : Ajoute "Pink" et "Magenta" à `colors` :
```js
const moreColors = [...colors, "Pink", "Magenta"];
```

**4.2** : Crée `rainbow` avec "Red" au début et "Violet" à la fin :
```js
const rainbow = ["Red", ...partialRainbow, "Violet"];
```

**4.3** : Copie `adress` et ajoute `postalCode` :
```js
const completeAdress = { ...adress, postalCode: 75001 };
```

**4.4** : Copie `person` et modifie `age` :
```js
const person2 = { ...person, age: 20 };
```

💡 **Ce que tu vas apprendre** :
- Spread operator `...` pour les tableaux
- Spread operator `...` pour les objets
- Copie et modification d'objets
- Fusion de tableaux/objets

💡 **Astuce** : Le spread `...` "déverse" le contenu d'un tableau ou objet. C'est parfait pour copier et modifier en une seule ligne.

---

### Exercice 5 : Arrow Functions 🏹

**Fichier** : `exercices.js` (section EXERCICE 5)

🎯 **Objectif** : Convertir les fonctions classiques en **arrow functions**.

**Consignes** :

**5.1** : Convertis `thatsAllFolks` en arrow function :
```js
const thatsAllFolks = () => {
  console.log("That's all folks!");
};
```

**5.2** : Convertis `makeDouble` avec return implicite :
```js
const makeDouble = (numbers) => numbers.map((number) => number * 2);
```

**5.3** : Convertis `convertToPerson` avec return implicite d'objet :
```js
const convertToPerson = ([firstname, lastname]) => ({ firstname, lastname });
```
⚠️ **Attention** : Pour retourner un objet avec return implicite, entoure-le de `()`.

💡 **Ce que tu vas apprendre** :
- Syntaxe arrow function `() => {}`
- Return implicite (sans `{}` ni `return`)
- Return implicite d'objets avec `({})`

💡 **Astuce** : Si la fonction ne fait qu'un `return`, tu peux omettre les `{}` et le mot `return`. Pour retourner un objet, utilise `({ ... })`.

---

### Exercice 6 : Property Shorthand 🔑

**Fichier** : `exercices.js` (section EXERCICE 6)

🎯 **Objectif** : Utiliser la **syntaxe raccourcie** pour les propriétés d'objets.

**Consignes** :

Transforme `convertToPerson2` :
```js
function convertToPerson2([firstname, lastname]) {
  return { firstname, lastname }; // au lieu de { firstname: firstname, ... }
}
```

💡 **Ce que tu vas apprendre** :
- Property shorthand : `{ nom }` au lieu de `{ nom: nom }`

💡 **Astuce** : Si la clé et la variable ont le même nom, tu peux écrire juste `{ nom }`.

---

### Exercice 7 : Modules (import/export) 📦

**Fichier** : `exercices.js` (section EXERCICE 7) + nouveau fichier `cart.js`

🎯 **Objectif** : Créer un **module** pour encapsuler le code du panier.

**Consignes** :

1. **Crée un fichier `cart.js`** :
   - Déplace tout le code du panier (constante `cart` et fonctions)
   - Exporte les fonctions publiques avec `export`
   - Garde `cart` et `findItemInCart` privés (pas d'export)

2. **Dans `exercices.js`** :
   - Importe les fonctions nécessaires : `import { addToCart, ... } from './cart.js'`

3. **Dans `index.html`** :
   - Ajoute `type="module"` au script : `<script type="module" src="exercices.js"></script>`

💡 **Ce que tu vas apprendre** :
- `export` pour exposer des fonctions
- `import` pour utiliser des modules
- Encapsulation et variables privées
- `type="module"` dans le HTML

💡 **Astuce** : Les modules permettent d'organiser le code et de garder certaines variables privées. Seules les fonctions exportées sont accessibles.

---

### Exercice 8 : Async/Await ⚡

**Fichier** : `exercices.js` (section EXERCICE 8)

🎯 **Objectif** : Transformer les **Promesses** en syntaxe **async/await**.

**Consignes** :

Transforme `loadFruits()` et `program()` :
```js
async function loadFruits() {
  const response = await fetch("http://127.0.0.1:5500/data/fruits.json");
  return response.json();
}

async function program() {
  try {
    const fruits = await loadFruits();
    console.log(fruits);
  } catch (error) {
    console.log("Problème lors du chargement des fruits", error);
  }
}
```

💡 **Ce que tu vas apprendre** :
- `async` pour déclarer une fonction asynchrone
- `await` pour attendre une Promesse
- `try/catch` pour gérer les erreurs

💡 **Astuce** : `async/await` rend le code asynchrone plus lisible. C'est du sucre syntaxique sur les Promesses.

---

## 🎉 Félicitations !

Tu as terminé les exercices sur ES6+ ! Tu maîtrises maintenant :

- ✅ **Template literals** : interpolation et multilignes
- ✅ **Destructuring** : extraction de valeurs
- ✅ **Rest operator** : capturer le reste
- ✅ **Spread operator** : étendre des collections
- ✅ **Arrow functions** : syntaxe concise
- ✅ **Property shorthand** : objets raccourcis
- ✅ **Modules** : organisation du code
- ✅ **Async/await** : asynchrone moderne

Tu écris maintenant du JavaScript moderne et élégant ! 🚀
