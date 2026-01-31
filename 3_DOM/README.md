# Exercices sur le DOM en JavaScript

## 🎮 Workflow de travail

### Étapes pour chaque exercice

1. **Ouvre `index.html`** dans ton navigateur
2. **Ouvre la console** du navigateur avec `F12` ou avec `liveserver`
3. **Édite le fichier `exercices.js`** (tous les exercices sont dans ce fichier)
4. **Trouve la section de l'exercice** grâce aux commentaires visuels (ex: `// EXERCICE 1`)
5. **Écris ton code** dans la zone `// ✍️ TON CODE ICI`
6. **Observe les résultats** directement dans la page ET dans la console
7. **Teste et vérifie** que ton code fonctionne correctement
8. **Fais un commit** avec le titre de l'exercice
9. **Passe au suivant** : les exercices se complètent, garde ton code !

### ⚠️ Règles importantes

- **Tous les exercices sont dans le même fichier** `exercices.js`
- **Consulte le README** pour les consignes détaillées de chaque exercice
- **Les exercices sont progressifs** : certains dépendent des précédents
- **Garde ton code** : ne commente pas les exercices précédents (sauf si demandé)
- **Résultats visuels** : la plupart des exercices modifient directement la page HTML
- **Utilise la console** : `console.log()` est ton ami pour déboguer !

## 📖 Rappels sur le DOM

### Qu'est-ce que le DOM ?

Le **DOM** (Document Object Model) est une représentation en arbre de ta page HTML. JavaScript peut **lire** et **modifier** cette structure pour rendre ta page interactive !

### Concepts clés

**1. Sélectionner des éléments**

```js
// Sélectionner UN élément
const titre = document.querySelector("h1"); // Par balise
const bouton = document.querySelector("#mon-id"); // Par ID
const carte = document.querySelector(".ma-classe"); // Par classe

// Sélectionner PLUSIEURS éléments
const tousLesBoutons = document.querySelectorAll("button"); // Retourne une NodeList
```

**2. Lire et modifier le contenu**

```js
const titre = document.querySelector("h1");
console.log(titre.textContent); // Lire le texte
titre.textContent = "Nouveau titre"; // Modifier le texte
```

**3. Créer et ajouter des éléments**

```js
const nouveauParagraphe = document.createElement("p"); // Créer
nouveauParagraphe.textContent = "Mon texte"; // Remplir
document.body.appendChild(nouveauParagraphe); // Ajouter à la page
```

**4. Supprimer des éléments**

```js
const element = document.querySelector("#a-supprimer");
element.remove(); // Supprimer l'élément du DOM
```

**5. Gérer les événements**

```js
const bouton = document.querySelector("#mon-bouton");
bouton.addEventListener("click", function () {
  console.log("Bouton cliqué !");
});
```

**6. Modifier les styles**

```js
const boite = document.querySelector(".boite");
boite.style.backgroundColor = "red"; // Modifier le style CSS
```

💡 **Astuce** : Utilise toujours la console du navigateur (`F12`) pour inspecter les éléments et voir la structure du DOM !

## Thème 🔮🧙‍♂️🧪🪙🍄

Tu incarnes le sorcier **Archibald** 🧙‍♂️ qui gère une petite boutique de potions magiques 🧪. Tu vas rendre ta boutique interactive en manipulant le DOM !

---

## 📚 Liste des exercices

### Exercice 1 : Quel est le titre de la boutique ?

**Fichier** : `exercices.js` (section EXERCICE 1)

🎯 **Objectif** : Apprendre à **sélectionner** un élément HTML et **lire** son contenu.

**Consignes** :

1. Utilise `document.querySelector('h1')` pour sélectionner le titre principal de la page
2. Stocke cet élément dans une constante (ex: `titre`)
3. Affiche le contenu textuel avec `console.log(titre.textContent)`

💡 **Ce que tu vas apprendre** :

- `querySelector()` : sélectionne le **premier** élément qui correspond au sélecteur
- `textContent` : récupère tout le texte contenu dans un élément (sans les balises HTML)

💡 **Résultat attendu** :

```
Console : "Boutique d'Archibald le Sorcier de pacotille 🧙‍♂️"
```

---

### Exercice 2 : Des informations manquent !

**Fichier** : `exercices.js` (section EXERCICE 2)

🎯 **Objectif** : Apprendre à **créer** et **ajouter** un nouvel élément HTML dans le DOM.

**Consignes** :

1. Sélectionne le conteneur `<div id="description_boutique">` avec `querySelector()`
2. Crée un nouveau paragraphe avec `document.createElement('p')`
3. Ajoute le texte suivant au paragraphe :
   ```
   Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.
   ```
4. Ajoute ce paragraphe au conteneur avec la méthode `appendChild()`

💡 **Ce que tu vas apprendre** :

- `createElement()` : crée un nouvel élément HTML (mais ne l'ajoute pas encore à la page)
- `appendChild()` : ajoute un élément enfant à la fin d'un élément parent

💡 **Résultat attendu** :

```
Page : Un nouveau paragraphe apparaît sous le message de bienvenue
```

---

### Exercice 3 : Roger, enfoiré !

**Fichier** : `exercices.js` (section EXERCICE 3)

🎯 **Objectif** : Apprendre à **supprimer** un élément du DOM.

**Contexte** : Roger, un collègue sorcier jaloux, a saboté le titre de ta boutique en ajoutant le mot "de pacotille". Il faut réparer ça !

**Consignes** :

1. Sélectionne l'élément `<span id="blague_de_roger_le_sorcier">` avec `querySelector()`
2. Supprime-le du DOM avec la méthode `.remove()`

💡 **Ce que tu vas apprendre** :

- `remove()` : supprime définitivement un élément du DOM
- Sélection par ID : `#nom_de_id` est plus rapide et précis

💡 **Résultat attendu** :

```
Page : Le titre devient "Boutique d'Archibald le Sorcier 🧙‍♂️" (sans "de pacotille")
```

---

### Exercice 4 : Archibald n'est pas là, appelons-le !

**Fichier** : `exercices.js` (section EXERCICE 4)

🎯 **Objectif** : Apprendre à gérer les **événements** de clic.

**Consignes** :

1. Sélectionne le bouton `<button id="call_archibald">` avec `querySelector()`
2. Ajoute un écouteur d'événement avec `addEventListener('click', callback)`
3. Dans la fonction callback, utilise `alert()` pour afficher : `🧙‍♂️ J'arrive, j'arrive Aventurier !`

💡 **Ce que tu vas apprendre** :

- `addEventListener()` : permet d'écouter des événements (click, submit, keypress, etc.)
- **Callback** : une fonction qui s'exécute quand l'événement se produit
- `alert()` : affiche une boîte de dialogue (attention, elle bloque la page !)

💡 **Exemple de structure** :

```js
const bouton = document.querySelector("#call_archibald");
bouton.addEventListener("click", () => {
  // Ton code ici
});
```

💡 **Résultat attendu** :

```
Page : Quand tu cliques sur "Appeler Archibald", une alerte apparaît
```

### Exercice 5 : Faisons un peu de magie 🪄

**Fichier** : `exercices.js` (section EXERCICE 5)

🎯 **Objectif** : Apprendre à sélectionner **plusieurs éléments** et modifier leurs **styles CSS**.

**Contexte** : Pour divertir l'Aventurier pendant ton arrivée, il peut jouer avec des boutons magiques qui changent la couleur des boîtes.

**Consignes** :

1. Utilise `querySelectorAll('.boite')` pour récupérer **toutes** les boîtes (retourne une NodeList)
2. Sélectionne les 3 boutons de couleur :
   - `#btn_change_red`
   - `#btn_change_blue`
   - `#btn_change_green`
3. Pour chaque bouton, ajoute un événement `click` qui :
   - **Bouton rouge** : change la couleur de la **1ère boîte** en `'red'`
   - **Bouton bleu** : change la couleur des **2 premières boîtes** en `'blue'`
   - **Bouton vert** : change la couleur de **toutes les boîtes** en `'green'`

💡 **Ce que tu vas apprendre** :

- `querySelectorAll()` : retourne une **NodeList** (comme un tableau) de tous les éléments correspondants
- Accès par index : `boites[0]` pour la 1ère, `boites[1]` pour la 2ème, etc.
- `style.backgroundColor` : modifie la couleur de fond CSS

💡 **Astuce** :

```js
const boites = document.querySelectorAll(".boite");
boites[0].style.backgroundColor = "red"; // Première boîte
```

💡 **Résultat attendu** :

```
Page : Les boutons changent les couleurs des boîtes selon les règles définies
```

### Exercice 6 : Aventurier, voici ma boutique !

**Fichier** : `exercices.js` (section EXERCICE 6)

🎯 **Objectif** : Apprendre à utiliser les **templates HTML** pour créer des éléments complexes.

**Contexte** : Tu as un tableau de potions (déjà fourni dans `exercices.js`) et tu dois afficher chaque potion sous forme de carte dans la boutique.

⚠️ **Note** : Ignore la carte d'exemple dans le HTML, utilise le `<template id="template_potion">` à la fin du document.

**Consignes** :

1. Sélectionne le conteneur `<section id="liste_potions">`
2. Sélectionne le template `<template id="template_potion">`
3. **Pour chaque potion** du tableau `potions` :
   - Clone le template avec `.content.cloneNode(true)`
   - Dans le clone, modifie les éléments suivants :
     - `.nom_potion` → nom de la potion
     - `.prix_potion` → prix de la potion
     - `.description_potion` → description de la potion
   - Ajoute le clone au conteneur avec `appendChild()`

💡 **Ce que tu vas apprendre** :

- **Templates HTML** : permettent de définir une structure réutilisable
- `cloneNode(true)` : crée une copie complète d'un élément (avec tous ses enfants)
- Boucle sur un tableau pour créer plusieurs éléments

💡 **Structure recommandée** :

```js
const conteneur = document.querySelector("#liste_potions");
const template = document.querySelector("#template_potion");

potions.forEach((potion) => {
  const clone = template.content.cloneNode(true);

  // Modifier le clone
  clone.querySelector(".nom_potion").textContent = potion.nom;
  // ... etc

  conteneur.appendChild(clone);
});
```

💡 **Résultat attendu** :

```
Page : Deux cartes de potions apparaissent avec leurs informations
```

---

### Exercice 7 : Plus de potions, nous avons besoin de plus de potions !

**Fichier** : `exercices.js` (section EXERCICE 7)

🎯 **Objectif** : Apprendre à gérer les **formulaires** et **réutiliser du code**.

**Contexte** : Un formulaire permet d'ajouter de nouvelles potions à la boutique. Il faut récupérer les données et créer une nouvelle carte.

**Consignes** :

1. Sélectionne le formulaire `<form>` avec `querySelector()`
2. Ajoute un écouteur d'événement `submit` sur le formulaire
3. Dans le callback :
   - **Important** : Empêche le rechargement de la page avec `event.preventDefault()`
   - Crée un objet `FormData` : `new FormData(formulaire)`
   - Récupère les valeurs avec `.get('nom')`, `.get('description')`, `.get('prix')`
   - Crée un objet potion avec ces valeurs
   - **Réutilise le code de l'exercice 6** pour afficher cette nouvelle potion

💡 **Ce que tu vas apprendre** :

- Événement `submit` : se déclenche quand on soumet un formulaire
- `event.preventDefault()` : empêche le comportement par défaut (rechargement)
- `FormData` : facilite la récupération des valeurs de formulaire
- **Réutilisation de code** : transforme le code de l'exercice 6 en fonction !

💡 **Astuce - Crée une fonction réutilisable** :

```js
function afficherPotion(potion) {
  const conteneur = document.querySelector("#liste_potions");
  const template = document.querySelector("#template_potion");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".nom_potion").textContent = potion.nom;
  clone.querySelector(".prix_potion").textContent = potion.prix;
  clone.querySelector(".description_potion").textContent = potion.description;

  conteneur.appendChild(clone);
}
```

💡 **Structure pour le formulaire** :

```js
const formulaire = document.querySelector("form");
formulaire.addEventListener("submit", (event) => {
  event.preventDefault(); // IMPORTANT !

  const formData = new FormData(formulaire);
  const nouvellePotion = {
    nom: formData.get("nom"),
    description: formData.get("description"),
    prix: formData.get("prix"),
  };

  afficherPotion(nouvellePotion);
});
```

💡 **Résultat attendu** :

```
Page : Quand tu remplis le formulaire et cliques sur "Ajouter", une nouvelle carte de potion apparaît
```

---

### Exercice 8 : Le Miroir Magique 🪞

**Fichier** : `exercices.js` (section EXERCICE 8)

� **Objectif** : Apprendre à utiliser **classList** pour manipuler les classes CSS dynamiquement.

**Contexte** : Un miroir magique révèle le véritable reflet de celui qui le regarde... et ce n'est pas toujours flatteur ! Au survol, le miroir montre le reflet d'un baron hideux.

**Consignes** :

1. Sélectionne le miroir `#magic-mirror` avec `querySelector()`
2. Sélectionne le texte du miroir `.mirror-text`
3. Sélectionne le reflet `.mirror-reflection`
4. Ajoute un événement `mouseenter` (quand la souris entre sur le miroir) :
   - Cache le texte : ajoute la classe `hidden` au texte avec `classList.add('hidden')`
   - Affiche le reflet : retire la classe `hidden` du reflet avec `classList.remove('hidden')`
5. Ajoute un événement `mouseleave` (quand la souris sort du miroir) :
   - Affiche le texte : retire la classe `hidden` du texte
   - Cache le reflet : ajoute la classe `hidden` au reflet

💡 **Ce que tu vas apprendre** :

- `classList.add()` : ajoute une classe CSS à un élément
- `classList.remove()` : retire une classe CSS d'un élément
- `classList.toggle()` : ajoute si absente, retire si présente (bonus !)
- `mouseenter` et `mouseleave` : événements de survol
- Manipulation de classes CSS (meilleure pratique que `style` direct)

💡 **Astuce** :

```js
const miroir = document.querySelector("#magic-mirror");
const texte = document.querySelector(".mirror-text");
const reflet = document.querySelector(".mirror-reflection");

miroir.addEventListener("mouseenter", () => {
  texte.classList.add("hidden");
  reflet.classList.remove("hidden");
});
```

💡 **Résultat attendu** :

```
Page : Au survol du miroir, le texte disparaît et le baron hideux apparaît
```

---

### Exercice 9 : L'Arbre Généalogique des Potions

**Fichier** : `exercices.js` (section EXERCICE 9)

**Objectif** : Apprendre à **naviguer dans le DOM** avec les propriétés de parenté.

**Contexte** : Les potions sont organisées par catégories. Tu dois ajouter des badges visuels au premier et dernier élément de chaque liste.

**Consignes** :

1. Sélectionne toutes les catégories `.potion-category` avec `querySelectorAll()`
2. **Pour chaque catégorie** :
   - Trouve la liste `<ul>` avec `.querySelector('.potion-list')` ou `children`
   - Récupère tous les items de la liste avec `.querySelectorAll('.potion-item')`
   - Ajoute la classe `first` au **premier item** : `items[0].classList.add('first')`
   - Ajoute la classe `last` au **dernier item** : `items[items.length - 1].classList.add('last')`

💡 **Ce que tu vas apprendre** :

- **Navigation dans le DOM** : parcourir la hiérarchie parent/enfant
- `parentElement` : accéder au parent d'un élément
- `children` : accéder aux enfants directs d'un élément
- `firstElementChild` et `lastElementChild` : premier et dernier enfant
- `nextElementSibling` et `previousElementSibling` : frères et sœurs

💡 **Astuce** : Utilise `querySelectorAll()` pour récupérer toutes les catégories, puis pour chaque catégorie, récupère tous les items. Pour accéder au dernier élément d'un tableau, utilise `items[items.length - 1]`.

💡 **Résultat attendu** :

```
Page : Le premier item de chaque liste a une bordure dorée, le dernier a une bordure rouge
```

---

### Exercice 10 : Les Étiquettes Magiques

**Fichier** : `exercices.js` (section EXERCICE 10)

**Objectif** : Apprendre à utiliser les **attributs data-\*** pour stocker et lire des données.

**Contexte** : Chaque potion a des informations cachées (rareté, effets secondaires, durée). Affiche-les quand on clique sur le bouton "Plus d'infos".

**Consignes** :

1. Sélectionne tous les boutons `.show-info` avec `querySelectorAll()`
2. **Pour chaque bouton**, ajoute un événement `click` :
   - Trouve la carte parente avec `button.closest('.labeled-potion')`
   - Récupère les data attributes avec `dataset` :
     - `carte.dataset.rarete`
     - `carte.dataset.effetSecondaire`
     - `carte.dataset.duree`
   - Trouve la div `.potion-info` dans la carte
   - Crée le contenu HTML avec les infos
   - Affiche/cache la div avec `classList.toggle('hidden')`

💡 **Ce que tu vas apprendre** :

- **Data attributes** : stocker des données dans le HTML avec `data-*`
- `dataset` : accéder facilement aux data attributes (camelCase automatique)
- `getAttribute()` et `setAttribute()` : méthodes alternatives
- `closest()` : trouver l'ancêtre le plus proche correspondant au sélecteur

💡 **Astuce** : Utilise `closest('.labeled-potion')` pour remonter jusqu'à la carte parente depuis le bouton. Les data attributes se lisent avec `element.dataset.nomAttribut` (attention : `data-effet-secondaire` devient `dataset.effetSecondaire` en camelCase).

💡 **Résultat attendu** :

```
Page : Cliquer sur "Plus d'infos" affiche/cache les détails de la potion
```

---

### Exercice 11 : Validation Magique en Temps Réel

**Fichier** : `exercices.js` (section EXERCICE 11)

**Objectif** : Apprendre à **valider un formulaire en temps réel** avec l'événement `input`.

**Contexte** : Un formulaire de commande personnalisée doit être validé pendant la saisie, avec des messages d'erreur clairs.

**Consignes** :

1. Sélectionne les 3 champs : `#potion-name`, `#potion-ingredient`, `#potion-price`
2. Sélectionne le bouton submit
3. **Pour chaque champ**, ajoute un événement `input` :
   - Valide le champ :
     - Texte : minimum 3 caractères
     - Prix : supérieur à 0
   - Si valide :
     - Ajoute la classe `valid` au champ
     - Retire la classe `invalid`
     - Affiche un message de succès dans `.validation-feedback`
   - Si invalide :
     - Ajoute la classe `invalid` au champ
     - Retire la classe `valid`
     - Affiche un message d'erreur
4. Vérifie si **tous les champs sont valides** :
   - Si oui : active le bouton (`disabled = false`)
   - Si non : désactive le bouton (`disabled = true`)

💡 **Ce que tu vas apprendre** :

- Événement `input` : se déclenche à chaque modification
- Événements `blur` et `focus` : quand le champ perd/gagne le focus
- Validation en temps réel pour une meilleure UX
- Gestion de l'état du bouton submit

💡 **Astuce** : L'événement `input` se déclenche à chaque modification. Utilise `classList.toggle('classe', condition)` pour ajouter/retirer une classe selon une condition. Pour activer/désactiver le bouton, modifie sa propriété `disabled` (true/false).

💡 **Résultat attendu** :

```
Page : Les champs se colorent en vert/rouge pendant la saisie, le bouton s'active quand tout est valide
```

---

### Exercice 12 : Calculateur de Commande

**Fichier** : `exercices.js` (section EXERCICE 12)

**Objectif** : Apprendre à **calculer dynamiquement** des valeurs avec l'événement `input`.

**Contexte** : Un panier de commande doit calculer automatiquement le total de chaque ligne et le total général.

**Consignes** :

1. Sélectionne tous les inputs `.quantity-input` avec `querySelectorAll()`
2. **Pour chaque input**, ajoute un événement `input` ou `change` :
   - Récupère la quantité : `input.value`
   - Récupère le prix unitaire : `input.dataset.price`
   - Calcule le total de la ligne : `quantité × prix`
   - Trouve le span `.total-price` dans le même `.cart-item`
   - Affiche le total de la ligne
3. Calcule le **total général** :
   - Additionne tous les totaux de lignes
   - Affiche le résultat dans `#grand-total`

💡 **Ce que tu vas apprendre** :

- Événement `change` : se déclenche quand la valeur change et perd le focus
- Calculs mathématiques en JavaScript
- Mise à jour dynamique de plusieurs éléments
- Utilisation de `data-*` pour stocker des valeurs

💡 **Astuce** : Utilise `parseInt()` pour convertir les valeurs en nombres. Le prix unitaire est stocké dans `input.dataset.price`. Pour trouver un élément dans le même parent, utilise `input.closest('.cart-item').querySelector('.total-price')`.

💡 **Résultat attendu** :

```
Page : Quand tu changes les quantités, les totaux se mettent à jour automatiquement
```

---

### Exercice 13 : Recherche de Potions

**Fichier** : `exercices.js` (section EXERCICE 13)

**Objectif** : Apprendre à **filtrer des éléments** en temps réel avec une barre de recherche.

**Contexte** : Une barre de recherche permet de filtrer les potions par nom ou description.

**Consignes** :

1. Sélectionne le champ de recherche `#search-input`
2. Sélectionne toutes les cartes `.searchable-potion`
3. Sélectionne le compteur `#search-results-count` et le message `#no-results`
4. Ajoute un événement `input` sur le champ de recherche :
   - Récupère le texte recherché (en minuscules)
   - **Pour chaque carte** :
     - Récupère le titre et la description
     - Vérifie si le texte recherché est présent
     - Si oui : retire la classe `hidden`
     - Si non : ajoute la classe `hidden`
   - Compte le nombre de cartes visibles
   - Affiche le compteur : "X potion(s) trouvée(s)"
   - Affiche/cache le message "Aucune potion trouvée"

💡 **Ce que tu vas apprendre** :

- Filtrage en temps réel avec `input`
- Méthodes de chaînes : `toLowerCase()`, `includes()`
- Afficher/cacher dynamiquement des éléments
- Compter des éléments selon une condition

💡 **Astuce** : Utilise `toLowerCase()` pour rendre la recherche insensible à la casse. La méthode `includes()` vérifie si une chaîne contient un texte. Compte les éléments visibles avec une variable qui s'incrémente dans la boucle.

💡 **Résultat attendu** :

```
Page : En tapant dans la recherche, seules les potions correspondantes s'affichent
```

---

## 🎉 Félicitations !

Tu as terminé les exercices sur le DOM en JavaScript ! Tu maîtrises maintenant :

- ✅ **Sélection d'éléments** : `querySelector()`, `querySelectorAll()`, `getElementById()`
- ✅ **Manipulation de contenu** : `textContent`, `innerHTML`
- ✅ **Création d'éléments** : `createElement()`, `appendChild()`
- ✅ **Suppression d'éléments** : `remove()`
- ✅ **Événements** : `addEventListener()`, `click`, `submit`, `mouseenter`, `mouseleave`, `input`, `change`
- ✅ **Styles CSS** : `style.property`, `classList` (`add`, `remove`, `toggle`)
- ✅ **Templates HTML** : `<template>`, `cloneNode()`
- ✅ **Formulaires** : `FormData`, `preventDefault()`, validation en temps réel
- ✅ **Navigation DOM** : `parentElement`, `children`, `closest()`, siblings
- ✅ **Data attributes** : `dataset`, `getAttribute()`, `setAttribute()`
- ✅ **Calculs dynamiques** : mise à jour en temps réel
- ✅ **Filtrage** : recherche et affichage dynamique

Tu sais maintenant créer des pages web interactives et dynamiques ! 🚀
