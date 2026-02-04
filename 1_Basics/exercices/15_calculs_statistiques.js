// Calculs et statistiques

// **Fichier** : `exercices/15_calculs_statistiques.js`

// 🎯 **Objectif** : Effectuer des calculs sur l'ensemble de l'inventaire.

// **Consignes** :

// - Calcule la **valeur totale de l'inventaire** (somme de `prix × stock` pour chaque potion)
// - Calcule le **prix moyen** des potions
// - Calcule le **stock total** de toutes les potions
// - Affiche tous ces résultats dans la console
// Inventaire de la boutique
const inventory = [
  { name: "Potion de soin", price: 50, stock: 10 },
  { name: "Potion de mana", price: 30, stock: 5 },
  { name: "Potion d'endurance", price: 40, stock: 7 },
  { name: "Potion de force", price: 60, stock: 3 }
]

let inventory_value = 0
let nb_potions = 0

inventory.forEach(potion => {
  inventory_value += potion.price*potion.stock
  nb_potions += potion.stock
});

console.log(`Valeur de l'inventaire : ${inventory_value} 🪙`)
console.log(`Prix moyen : ${inventory_value/nb_potions} 🪙`)
console.log(`Stock total : ${nb_potions} potions`)




