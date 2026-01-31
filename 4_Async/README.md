# Exercices sur l'Asynchrone en JavaScript

## 🎮 Workflow de travail

### Étapes pour chaque exercice

1. **Ouvre `index.html`** dans ton navigateur
2. **Ouvre la console** du navigateur avec `F12` ou avec `liveserver`
3. **Édite le fichier `exercices.js`** (tous les exercices sont dans ce fichier)
4. **Trouve la section de l'exercice** grâce aux commentaires visuels (ex: `// EXERCICE 1`)
5. **Écris ton code** dans la zone `// ✍️ TON CODE ICI`
6. **Teste dans la console ET dans la page** (certains exercices modifient le HTML)
7. **Fais un commit** avec le titre de l'exercice
8. **Passe au suivant** : certains exercices réutilisent le code précédent !

### ⚠️ Règles importantes

- **Tous les exercices sont dans le même fichier** `exercices.js`
- **Consulte le README** pour les consignes détaillées de chaque exercice
- **Ne modifie pas le code de base** (partie avant "Votre partie commence ici")
- **Garde ton code** : certains exercices réutilisent les fonctions précédentes
- **Utilise la console** : `console.log()` est essentiel pour comprendre l'asynchrone !

## 📖 Rappels sur l'Asynchrone

### Qu'est-ce que l'asynchrone ?

L'**asynchrone** permet d'exécuter des tâches qui prennent du temps (requêtes réseau, timers, etc.) **sans bloquer** le reste du code. JavaScript continue à s'exécuter pendant que la tâche asynchrone se déroule.

### Concepts clés

**1. Callbacks**
```js
function faireQuelqueChose(callback) {
  setTimeout(() => {
    console.log("Tâche terminée !");
    callback(); // Exécute la fonction de rappel
  }, 1000);
}

faireQuelqueChose(() => {
  console.log("Callback exécuté !");
});
```

**2. Promesses**
```js
const promesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Succès !"); // ou reject("Erreur !")
  }, 1000);
});

promesse
  .then(resultat => console.log(resultat))
  .catch(erreur => console.log(erreur));
```

**3. Async/Await**
```js
async function maFonction() {
  try {
    const resultat = await promesse;
    console.log(resultat);
  } catch (erreur) {
    console.log(erreur);
  }
}
```

**4. Fetch API**
```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(erreur => console.log(erreur));
```

💡 **Astuce** : Utilise toujours la console du navigateur pour observer l'ordre d'exécution du code asynchrone !

## Thème 🕰️🌐🚀

Tu es **Chronos** 🕰️, un voyageur temporel qui explore différentes époques et collecte des artefacts historiques rares via des missions asynchrones. Chaque voyage et collecte prend du temps, d'où l'utilisation de code asynchrone !

---

## 📚 Liste des exercices

### Exercice 1 : Le Téléporteur Temporel ⏰

**Fichier** : `exercices.js` (section EXERCICE 1)

🎯 **Objectif** : Comprendre les **callbacks** et `setTimeout()` pour simuler une tâche asynchrone.

**Contexte** : Tu dois créer une machine à voyager dans le temps. Le voyage prend du temps (1 à 3 secondes), et tu dois afficher un loader pendant le voyage.

**Consignes** :

1. **Crée la fonction `voyagerTemps(destination, callback)`** :
   - Paramètre 1 : `destination` (string) - le nom de l'époque
   - Paramètre 2 : `callback` (function) - fonction à exécuter après le voyage
   - Utilise `setTimeout()` avec un délai aléatoire entre 1000 et 3000 ms
   - Utilise `generationNombreAleatoireEntre(1000, 3000)` pour le délai
   - Affiche `console.log("Voyage en cours vers : ", destination)` au début
   - Affiche `console.log("Arrivée à l'époque : ", destination)` à la fin
   - Appelle le `callback` quand le voyage est terminé

2. **Utilise cette fonction dans `quandEpoqueChoisie(nomEpoque)`** :
   - Avant le voyage : cache `.localisation_epoque` et affiche `.voyage_en_cours` (loader)
   - Après le voyage (dans le callback) : cache le loader et appelle `afficherDestination(nomEpoque)`

💡 **Ce que tu vas apprendre** :
- Callbacks : fonctions passées en paramètre et exécutées plus tard
- `setTimeout()` : exécute du code après un délai
- Manipulation du DOM pendant une tâche asynchrone
- Ordre d'exécution du code asynchrone

💡 **Astuce** : Pour cacher un élément, utilise `element.style.display = "none"`. Pour l'afficher, utilise `element.style.display = ""` ou `"block"`.

💡 **Résultat attendu** :
```
Page : Quand tu choisis une époque et cliques sur "Voyager", un loader apparaît puis l'époque s'affiche
Console : "Voyage en cours vers : medievale" puis "Arrivée à l'époque : medievale"
```

---

### Exercice 2 : La Collecte d'Artefact Mystère 🏺

**Fichier** : `exercices.js` (section EXERCICE 2)

🎯 **Objectif** : Créer une fonction asynchrone avec **callback qui reçoit un paramètre** (succès/échec).

**Contexte** : La collecte d'un artefact prend du temps et a 50% de chances de réussir. Tu dois gérer les deux cas.

**Consignes** :

1. **Crée la fonction `collecterArtefact(nomArtefact, callback)`** :
   - Paramètre 1 : `nomArtefact` (string)
   - Paramètre 2 : `callback` (function qui reçoit un booléen)
   - Utilise `setTimeout()` avec un délai aléatoire
   - Génère un nombre aléatoire : `Math.random() * 100`
   - Si le nombre est >= 50 : appelle `callback(true)` (succès)
   - Si le nombre est < 50 : appelle `callback(false)` (échec)

2. **Utilise cette fonction dans `quandRechercheArtefact(artefact)`** :
   - Avant la collecte : affiche `.recherche_en_cours` (loader)
   - Après la collecte (dans le callback) : cache le loader et appelle `afficherRechercheArtefact({ artefact, epoque: nomEpoqueActuelle, success })`

💡 **Ce que tu vas apprendre** :
- Callbacks avec paramètres
- Gestion de résultats aléatoires
- Passage de données entre fonction asynchrone et callback

💡 **Astuce** : Le callback peut recevoir des paramètres. Exemple : `callback(true)` ou `callback(false)`.

💡 **Résultat attendu** :
```
Page : Quand tu recherches un artefact, un loader apparaît puis l'artefact s'affiche avec ✅ ou ❌
```

---

### Exercice 3 : La Mission Temporelle Complexe 🔗

**Fichier** : `exercices.js` (section EXERCICE 3)

🎯 **Objectif** : Comprendre le **"callback hell"** avec des tâches asynchrones séquentielles.

**Contexte** : Tu dois exécuter une série de missions dans un ordre précis. Chaque mission dépend de la précédente.

**Consignes** :

1. **Crée la fonction `missionTemporelleComplexe()`**
2. **Exécute cette séquence de missions** (dans l'ordre) :
   - Tâche 1 : Voyager à l'époque "medievale"
   - Tâche 2 : Collecter "épée de chevalier"
   - Tâche 3 : Voyager à l'époque "romaine"
   - Tâche 4 : Collecter "bouclier romain"
   - Tâche 5 : Collecter "épée romaine"
3. **Utilise `console.log()` à chaque étape** pour observer l'exécution
4. **Imbrique les callbacks** pour garantir l'ordre d'exécution

💡 **Ce que tu vas apprendre** :
- Callbacks imbriqués (callback hell)
- Exécution séquentielle de tâches asynchrones
- Problème de lisibilité du code avec callbacks

💡 **Astuce** : Chaque callback contient l'appel à la fonction suivante. Le code prend une forme pyramidale.

💡 **Résultat attendu** :
```
Console : Les messages s'affichent dans l'ordre des tâches, avec un code très imbriqué
```

---

### Exercice 4 : Je te promets des voyages sans tracas ! 🤝

**Fichier** : `exercices.js` (section EXERCICE 4)

🎯 **Objectif** : Transformer les callbacks en **Promesses** pour améliorer la lisibilité.

**Contexte** : Le callback hell est difficile à lire. Les Promesses permettent de chaîner les tâches de manière plus claire.

**Consignes** :

1. **Réécris `voyagerTemps(destination)` pour retourner une Promesse** :
   - Retourne `new Promise((resolve, reject) => { ... })`
   - Appelle `resolve()` quand le voyage est terminé
   
2. **Réécris `collecterArtefact(nomArtefact)` pour retourner une Promesse** :
   - Appelle `resolve(true)` si la collecte réussit
   - Appelle `reject("Échec de la collecte")` si elle échoue

3. **Réécris `missionTemporelleComplexe()` avec le chaînage de Promesses** :
   - Utilise `.then()` pour chaîner les tâches
   - Utilise `.catch()` pour gérer les erreurs

💡 **Ce que tu vas apprendre** :
- Création de Promesses avec `new Promise()`
- Chaînage avec `.then()`
- Gestion d'erreurs avec `.catch()`
- Code plus lisible qu'avec callbacks

💡 **Astuce** : Chaque `.then()` peut retourner une nouvelle Promesse pour continuer le chaînage.

💡 **Résultat attendu** :
```
Console : Même résultat qu'avant, mais le code est linéaire et plus lisible
```

---

### Exercice 5 : La Mission Finale Asynchrone ⚡

**Fichier** : `exercices.js` (section EXERCICE 5)

🎯 **Objectif** : Utiliser la syntaxe moderne **async/await** pour simplifier encore plus le code.

**Contexte** : `async/await` est du sucre syntaxique sur les Promesses. Le code ressemble à du code synchrone.

**Consignes** :

1. **Rends `missionTemporelleComplexe()` asynchrone** :
   - Ajoute le mot-clé `async` devant la fonction
   
2. **Remplace les `.then()` par `await`** :
   - `await voyagerTemps("medievale")`
   - `await collecterArtefact("épée de chevalier")`
   - etc.

3. **Gère les erreurs avec `try/catch`** :
   - Entoure le code de `try { ... } catch (erreur) { ... }`

💡 **Ce que tu vas apprendre** :
- Syntaxe `async/await`
- Gestion d'erreurs avec `try/catch`
- Code asynchrone qui ressemble à du code synchrone

💡 **Astuce** : `await` ne fonctionne que dans une fonction `async`. Il "attend" que la Promesse soit résolue avant de continuer.

💡 **Résultat attendu** :
```
Console : Même résultat, mais le code est encore plus simple et lisible
```

---

### Exercice 6 : Chargement Asynchrone des Époques 🌐

**Fichier** : `exercices.js` (section EXERCICE 6)

🎯 **Objectif** : Utiliser **`fetch()`** pour charger des données depuis un fichier JSON.

**Contexte** : Les époques ne sont plus en dur dans le code. Elles sont chargées depuis un fichier JSON.

**Consignes** :

1. **Dans la fonction `main()`, remplace les époques en dur** :
   - Utilise `fetch('data/epoques.json')` pour charger le fichier
   - Convertis la réponse en JSON avec `.json()`
   - Stocke le résultat dans la constante `epoques`
   - Appelle `creerLesChoixEpoque(epoques)` avec les données chargées

2. **Rends `main()` asynchrone** pour utiliser `await`

💡 **Ce que tu vas apprendre** :
- `fetch()` : faire des requêtes HTTP
- `.json()` : parser une réponse JSON
- Chargement de données externes
- Onglet Network des DevTools

💡 **Astuce** : `fetch()` retourne une Promesse. La méthode `.json()` retourne aussi une Promesse, donc tu dois utiliser `await` deux fois.

💡 **Résultat attendu** :
```
Page : Les époques se chargent depuis le fichier JSON
Network (DevTools) : Tu vois la requête HTTP vers data/epoques.json
```

---

## 🎉 Félicitations !

Tu as terminé les exercices sur l'asynchrone ! Tu maîtrises maintenant :

- ✅ **Callbacks** : fonctions de rappel pour gérer l'asynchrone
- ✅ **setTimeout()** : exécuter du code après un délai
- ✅ **Promesses** : gérer l'asynchrone de manière plus lisible
- ✅ **Chaînage** : `.then()` et `.catch()`
- ✅ **Async/Await** : syntaxe moderne et élégante
- ✅ **Fetch API** : charger des données depuis le réseau
- ✅ **Gestion d'erreurs** : `.catch()` et `try/catch`

Tu es prêt(e) à gérer des opérations asynchrones complexes ! 🚀
