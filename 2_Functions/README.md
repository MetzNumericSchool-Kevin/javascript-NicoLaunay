# Exercices sur les fonctions en JavaScript

## 🎮 Workflow de travail

### Étapes pour chaque exercice

1. **Ouvre `index.html`** dans ton navigateur
2. **Ouvre la console** du navigateur avec `F12` ou avec `liveserver` ou avec le `debugger` NodeJS
3. **Édite le fichier `exercices.js`** (tous les exercices sont dans ce fichier)
4. **Trouve la section de l'exercice** grâce aux commentaires visuels (ex: `// EXERCICE 1`)
5. **Écris ton code** dans la zone `// ✍️ TON CODE ICI`
6. **Décommente les tests** dans la section `// 🧪 TESTS` de l'exercice
7. **Teste et vérifie** que ton code fonctionne correctement
8. **Fais un commit** avec le titre de l'exercice
9. **Passe au suivant** : commente les tests de l'exercice actuel, passe à l'exercice suivant

### ⚠️ Règles importantes

- **Tous les exercices sont dans le même fichier** `exercices.js`
- **Consulte le README** pour les consignes détaillées de chaque exercice
- **Les constantes sont au début du fichier** : copie-les si besoin
- **Réutilise tes fonctions** : les fonctions des exercices précédents peuvent servir pour les suivants !
- **Pour les exercices de modification** : quand on te demande de "transformer" ou "modifier" une fonction, crée une **nouvelle version** avec un nom différent (ex: `fabriquerPotion` → `fabriquerPotionAvecIngredients` → `fabriquerPotionAvecDelai`) pour garder une trace de ton évolution
- **Commente les tests précédents** : pour éviter trop de logs dans la console, commente les tests des exercices terminés

## 📖 Rappels sur les fonctions

### Qu'est-ce qu'une fonction ?

Une fonction est un **bloc de code réutilisable** qui effectue une tâche spécifique. C'est comme une recette de cuisine : tu la définis une fois, et tu peux l'utiliser autant de fois que tu veux !

### Structure d'une fonction

```js
// 1️⃣ Mot-clé "function"
// 2️⃣ Nom de la fonction (décrit ce qu'elle fait)
// 3️⃣ Paramètres entre parenthèses (les "ingrédients" de la fonction)
function addition(a, b) {
  // 4️⃣ Corps de la fonction (les instructions à exécuter)
  const resultat = a + b;

  // 5️⃣ Retour du résultat (ce que la fonction "donne" en sortie)
  return resultat;
}

// 🎯 Utilisation de la fonction
const somme = addition(5, 3); // somme vaut 8
console.log(somme); // Affiche: 8
```

### Paramètres par défaut

Tu peux donner des **valeurs par défaut** aux paramètres :

```js
function cube(x = 5) {
  return x * x * x;
}

console.log(cube(2)); // Affiche: 8 (2 × 2 × 2)
console.log(cube()); // Affiche: 125 (5 × 5 × 5, car x = 5 par défaut)
```

### Points importants à retenir

- **Définition vs Exécution** : Une fonction est d'abord **définie** (écrite), puis **exécutée** (appelée) avec `()`
- **Return** : Le mot-clé `return` permet de "sortir" un résultat de la fonction pour l'utiliser ailleurs
- **Paramètres** : Les paramètres sont comme des variables temporaires qui n'existent que dans la fonction
- **Réutilisabilité** : Une fonction peut être appelée plusieurs fois avec des arguments différents
- **Fonctions dans fonctions** : Une fonction peut appeler d'autres fonctions
- **Callbacks** : Une fonction peut recevoir une autre fonction en paramètre (on verra ça plus tard !)

💡 **Astuce** : N'oublie pas d'utiliser `console.log()` pour vérifier que tes fonctions fonctionnent correctement !

## Thème 🔮🧙‍♂️🧪🪙🍄

Tu es le sorcier **Archibald** 🧙‍♂️ et tu gères une petite boutique dans laquelle tu crées et vends des potions magiques 🧪.

💡 **Note** : Dès que tu verras `<ce_genre_de_chose>`, cela signifie que tu dois remplacer cette partie par la bonne variable selon le contexte. Tu comprendras en lisant les exercices !

### 📦 Constantes de départ

**Copie ces constantes au début de chaque fichier d'exercice** (elles te serviront de base) :

```js
const nom_sorcier = "Archibald 🧙‍♂️";

const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};

const inventaire = [
  {
    id: "potion_soin", // identifiant unique de la potion
    prix: 10,
    stock: 0,
  },
];
```

---

## 📚 Liste des exercices

### Exercice 1 : Salutation Aventurier

**Fichier** : `exercices.js` (section EXERCICE 1)

🎯 **Objectif** : Créer ta première fonction qui affiche un message personnalisé.

**Consignes** :

1. Crée une fonction nommée `salutations` qui prend **un paramètre** : `nom_sorcier`
2. Cette fonction doit afficher dans la console : `Salutations Aventurier ! Je me nomme <nom_sorcier> pour vous servir.`
3. Appelle ta fonction en lui passant la constante `nom_sorcier` en argument

⚠️ **Attention** : Ne pas utiliser directement la constante `nom_sorcier` dans la fonction, mais la passer en paramètre !

💡 **Exemple attendu** :

```js
salutations(nom_sorcier);
// Affiche: "Salutations Aventurier ! Je me nomme Archibald 🧙‍♂️ pour vous servir."
```

---

### Exercice 2 : Quel est le tarif d'une potion ?

**Fichier** : `exercices.js` (section EXERCICE 2)

🎯 **Objectif** : Créer une fonction qui calcule le prix total d'une commande de potions.

**Consignes** :

1. Crée une fonction nommée `calculerPrixTotal` avec **3 paramètres** :
   - `id_potion` : l'identifiant de la potion (ex: "potion_soin")
   - `inventaire` : le tableau d'inventaire
   - `quantite` : la quantité demandée (valeur par défaut = 1)
2. La fonction doit :
   - Trouver la potion dans l'inventaire grâce à son `id`
   - Calculer le prix total : `prix de la potion × quantité`
   - Retourner ce prix total
3. Teste ta fonction en affichant le prix pour 3 potions de soin

💡 **Astuce** : Utilise une boucle `for` pour parcourir l'inventaire et trouver la potion avec le bon `id`.

💡 **Exemple attendu** :

```js
const prix = calculerPrixTotal("potion_soin", inventaire, 3);
console.log(prix); // Affiche: 30 (car 10 × 3)
```

---

### Exercice 3 : Fabrication de potion

**Fichier** : `exercices.js` (section EXERCICE 3)

🎯 **Objectif** : Créer une fonction qui fabrique un nouvel objet potion.

**Consignes** :

1. Crée une fonction nommée `fabriquerPotion` avec **3 paramètres** :
   - `id` : l'identifiant de la potion
   - `prix` : le prix de la potion (valeur par défaut = 10)
   - `stock` : le stock initial (valeur par défaut = 1)
2. La fonction doit retourner un **nouvel objet** avec la structure suivante :
   ```js
   {
     id: "...",
     prix: ...,
     stock: ...
   }
   ```
3. Teste ta fonction en créant plusieurs potions avec des prix et stocks différents
4. Affiche chaque potion créée dans la console

💡 **Exemple attendu** :

```js
const potion1 = fabriquerPotion("potion_mana", 15, 5);
console.log(potion1); // Affiche: { id: "potion_mana", prix: 15, stock: 5 }

const potion2 = fabriquerPotion("potion_force");
console.log(potion2); // Affiche: { id: "potion_force", prix: 10, stock: 1 }
```

---

### Exercice 4 : Ajout de nouvelles potions dans l'inventaire

**Fichier** : `exercices.js` (section EXERCICE 4)

🎯 **Objectif** : Créer une fonction qui ajoute ou met à jour une potion dans l'inventaire.

**Consignes** :

1. Crée une fonction nommée `ajouterPotion` avec **2 paramètres** :
   - `inventaire` : le tableau d'inventaire
   - `potion` : l'objet potion à ajouter
2. La fonction doit :
   - **Vérifier si la potion existe déjà** dans l'inventaire (même `id`)
   - **Si elle existe** : mettre à jour le prix ET ajouter le stock au stock existant
   - **Si elle n'existe pas** : ajouter la nouvelle potion dans l'inventaire
   - **Après chaque ajout** : trier l'inventaire du plus cher au moins cher avec la méthode `sort()`
3. Teste ta fonction en ajoutant plusieurs potions

💡 **Astuce pour le tri** :

```js
inventaire.sort((a, b) => b.prix - a.prix); // Tri décroissant (du plus cher au moins cher)
```

💡 **Exemple attendu** :

```js
const nouvellePotion = fabriquerPotion("potion_mana", 20, 3);
ajouterPotion(inventaire, nouvellePotion);
console.log(inventaire); // La potion_mana est ajoutée et l'inventaire est trié
```

---

### Exercice 5 : Cherche moi les potions qui...

**Fichier** : `exercices.js` (section EXERCICE 5)

🎯 **Objectif** : Créer des fonctions pour filtrer l'inventaire selon différents critères.

**Consignes** :

1. Crée une fonction `getPotionsEnStock` qui :
   - Prend l'inventaire en paramètre
   - Retourne un **nouveau tableau** contenant uniquement les potions avec `stock > 0`
   - Utilise la méthode `filter()` pour ne pas modifier l'inventaire original

2. Crée une fonction `getPotionsEnRupture` qui :
   - Prend l'inventaire en paramètre
   - Retourne un **nouveau tableau** contenant uniquement les potions avec `stock === 0`
   - Utilise aussi la méthode `filter()`

3. Teste tes fonctions :
   - Affiche l'inventaire complet
   - Affiche les potions en stock
   - Affiche les potions en rupture
   - Vérifie que l'inventaire original n'a pas changé

💡 **Rappel sur filter()** :

```js
const tableau = [1, 2, 3, 4, 5];
const pairs = tableau.filter((nombre) => nombre % 2 === 0); // [2, 4]
```

---

### Exercice 6 : Allons faire de la cueillette, nous avons besoin de plus de potions !

**Fichier** : `exercices.js` (section EXERCICE 6)

🎯 **Objectif** : Améliorer la fonction de fabrication pour vérifier les ingrédients.

**Consignes** :

1. **Crée une nouvelle version** de ta fonction de fabrication : `fabriquerPotionAvecIngredients`
2. Cette fonction prend **4 paramètres** :
   - `id` : l'identifiant de la potion
   - `ingredients` : un tableau d'ingrédients (ex: `["eau_de_source", "ecaille_de_dragon"]`)
   - `prix` : le prix (par défaut = 10)
   - `stock` : le stock (par défaut = 1)
3. La fonction doit :
   - Vérifier dans `manuel_de_fabrication` si la potion existe
   - Vérifier que **tous les ingrédients requis** sont présents dans le tableau `ingredients`
   - **Si les ingrédients sont complets** : retourner la nouvelle potion
   - **Si des ingrédients manquent** : retourner `new Error('Il manque des ingrédients à cette potion')`

4. **Tests** :
   - Teste avec tous les bons ingrédients → doit créer la potion
   - Teste avec des ingrédients manquants → doit retourner une erreur
   - Utilise cette structure pour gérer les erreurs :
   ```js
   const resultat = fabriquerPotionAvecIngredients(
     "potion_soin",
     ["eau_de_source"],
     10,
     1,
   );
   if (resultat instanceof Error) {
     console.error(resultat.message);
   } else {
     ajouterPotion(inventaire, resultat);
   }
   ```

⚠️ **Note** : Ici, on utilise `manuel_de_fabrication` de manière globale (ce n'est pas idéal, mais c'est pour simplifier l'exercice).

💡 **Astuce pour vérifier les ingrédients** : Utilise une boucle pour vérifier que chaque ingrédient requis est présent dans le tableau fourni.

---

### Exercice 7 : Une potion n'est jamais fabriquée en retard, ni en avance d'ailleurs !

**Fichier** : `exercices.js` (section EXERCICE 7)

🎯 **Objectif** : Découvrir les **callbacks** et l'asynchrone avec `setTimeout`.

**Qu'est-ce qu'un callback ?**

Un **callback** est une fonction qu'on passe en paramètre à une autre fonction, pour qu'elle soit exécutée plus tard. C'est comme dire : "Quand tu auras fini, appelle cette fonction !"

**Consignes** :

1. **Crée une nouvelle version** de ta fonction : `fabriquerPotionAvecDelai`
2. Cette fonction prend **5 paramètres** :
   - `id` : l'identifiant de la potion
   - `ingredients` : le tableau d'ingrédients
   - `callback` : une fonction à appeler quand la potion est prête
   - `prix` : le prix (par défaut = 10)
   - `stock` : le stock (par défaut = 1)

3. La fonction doit :
   - Vérifier les ingrédients (comme dans l'exercice 6)
   - Si erreur : retourner l'erreur immédiatement
   - Si OK : utiliser `setTimeout` pour simuler le temps de fabrication
   - Après le délai : appeler le `callback` avec la potion créée
   - ⚠️ **Important** : La fonction ne retourne PLUS la potion directement !

💡 **Aide pour setTimeout** :

```js
const tempsFabrication = manuel_de_fabrication[id].temps_de_fabrication;
setTimeout(() => {
  // Code à exécuter après le délai
  const potion = { id, prix, stock };
  callback(potion); // On appelle le callback avec la potion
}, tempsFabrication * 1000); // Conversion en millisecondes
```

💡 **Exemple d'utilisation** :

```js
// 1. Définir ce qu'on fait quand la potion est prête
function quandPotionPrete(potion) {
  console.log("✅ Fabrication terminée :", potion);
  ajouterPotion(inventaire, potion);
}

// 2. Lancer la fabrication
const erreur = fabriquerPotionAvecDelai(
  "potion_soin",
  ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
  quandPotionPrete, // La fonction callback
  15,
  2,
);

if (erreur instanceof Error) {
  console.error(erreur.message);
} else {
  console.log("⏳ Fabrication en cours...");
}
```

---

### Exercice 8 : Épreuve ultime - Inventaires indépendants avec les Closures

**Fichier** : `exercices.js` (section EXERCICE 8)

🎯 **Objectif** : Découvrir les **closures** pour créer plusieurs inventaires indépendants.

**Qu'est-ce qu'une closure ?**

Une **closure** est une fonction qui "capture" et "se souvient" des variables de son environnement, même après que la fonction parente ait terminé son exécution. C'est comme une capsule qui garde ses propres données privées !

**Exemple simple pour comprendre** :

```js
function creerCompteur() {
  let count = 0; // Variable privée, accessible uniquement dans cette fonction

  return {
    incrementer: function () {
      count++; // Cette fonction "capture" la variable count
    },
    obtenir: function () {
      return count; // Cette fonction aussi !
    },
  };
}

// Chaque compteur a son propre "count" indépendant
const compteurA = creerCompteur();
const compteurB = creerCompteur();

compteurA.incrementer();
compteurA.incrementer();
compteurB.incrementer();

console.log(compteurA.obtenir()); // 2
console.log(compteurB.obtenir()); // 1 (indépendant de A !)
```

**Consignes** :

1. Crée une fonction `creerInventaire` qui retourne un objet avec 3 méthodes :
   - `ajouterPotion(potion)` : ajoute une potion à l'inventaire (utilise le code de l'exercice 4)
   - `getPotionsEnStock()` : retourne les potions avec stock > 0
   - `getPotionsEnRupture()` : retourne les potions avec stock === 0

2. L'inventaire doit être une variable **privée** (déclarée dans `creerInventaire`)

3. Teste en créant 2 inventaires différents et vérifie qu'ils sont bien indépendants

💡 **Structure attendue** :

```js
function creerInventaire() {
  const inventaire = []; // Variable privée capturée par les méthodes

  return {
    ajouterPotion(potion) {
      // Ton code ici
    },
    getPotionsEnStock() {
      // Ton code ici
    },
    getPotionsEnRupture() {
      // Ton code ici
    },
  };
}

// Test
const boutiqueA = creerInventaire();
const boutiqueB = creerInventaire();

boutiqueA.ajouterPotion(fabriquerPotion("potion_soin", 10, 5));
boutiqueB.ajouterPotion(fabriquerPotion("potion_mana", 15, 0));

console.log(boutiqueA.getPotionsEnStock()); // [potion_soin]
console.log(boutiqueB.getPotionsEnRupture()); // [potion_mana]
```

---

### Exercice 9 : Bonus - Un sorcier a toujours la classe !

**Fichier** : `exercices.js` (section EXERCICE 9)

🎯 **Objectif** : Découvrir la syntaxe des **classes** en JavaScript (programmation orientée objet).

**Qu'est-ce qu'une classe ?**

Une **classe** est un modèle pour créer des objets. C'est une autre façon d'écrire ce qu'on a fait avec les closures, mais avec une syntaxe plus moderne et plus proche de langages comme Python ou Java.

**Consignes** :

1. Transforme la fonction `creerInventaire` en une classe `Inventaire`
2. L'inventaire doit être une **propriété privée** (utilise `#inventaire`)
3. Les méthodes restent les mêmes : `ajouterPotion`, `getPotionsEnStock`, `getPotionsEnRupture`

💡 **Structure attendue** :

```js
class Inventaire {
  #inventaire; // Propriété privée (avec #)

  constructor() {
    this.#inventaire = []; // Initialisation dans le constructeur
  }

  ajouterPotion(potion) {
    // Ton code ici (utilise this.#inventaire)
  }

  getPotionsEnStock() {
    // Ton code ici
  }

  getPotionsEnRupture() {
    // Ton code ici
  }
}

// Test (même résultat qu'avec les closures !)
const boutiqueA = new Inventaire(); // Utilise "new" pour créer une instance
const boutiqueB = new Inventaire();

boutiqueA.ajouterPotion(fabriquerPotion("potion_soin", 10, 5));
boutiqueB.ajouterPotion(fabriquerPotion("potion_mana", 15, 0));

console.log(boutiqueA.getPotionsEnStock()); // [potion_soin]
console.log(boutiqueB.getPotionsEnRupture()); // [potion_mana]
```

💡 **Différences clés** :

- **Closure** : `const obj = creerInventaire()` → fonction qui retourne un objet
- **Classe** : `const obj = new Inventaire()` → utilise `new` pour créer une instance
- Les deux permettent d'avoir des données privées et des méthodes publiques !

---

## 🎉 Félicitations !

Tu as terminé les exercices sur les fonctions en JavaScript ! Tu maîtrises maintenant :

- ✅ **Fonctions** : déclaration, paramètres, valeurs de retour
- ✅ **Paramètres par défaut** : valeurs par défaut pour les paramètres
- ✅ **Retour de valeurs** : `return` pour renvoyer des résultats
- ✅ **Fonctions pures** : fonctions sans effets de bord
- ✅ **Scope** : portée des variables (locale vs globale)
- ✅ **Closures** : fonctions qui "capturent" leur environnement
- ✅ **Données privées** : encapsulation avec closures
- ✅ **Méthodes** : fonctions dans des objets
- ✅ **Réutilisation de code** : DRY (Don't Repeat Yourself)
- ✅ **Classes** (bonus) : programmation orientée objet

Tu sais maintenant organiser ton code de manière modulaire et réutilisable ! 🚀
