// Affichage des potions

// **Fichier** : `exercices/07_affichage_potions.js`

// - Affiche le nom de la première potion.
// - Affiche le nom de la dernière potion **sans utiliser l'indice directement, mais en utilisant la taille du tableau** (en utilisant la propriété length de l'objet Array).
// - Affiche le nom de chaque potions avec une boucle `for` et affiche le message `Nous avons de la <nom_potion> !`
// Variable de l'exercice précédent (modifie selon tes valeurs)
const potions = ["Potion de soin", "Potion de mana", "Potion d'endurance"];
console.log(potions[0])
console.log(potions[potions.length - 1])

potions.forEach(potion => {
    console.log(`Nous avons de la ${potion}`)
});
