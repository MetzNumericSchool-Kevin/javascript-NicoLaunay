// Filtrage et sélection

// **Fichier** : `exercices/14_filtrage_selection.js`

// 🎯 **Objectif** : Créer de nouveaux tableaux en filtrant des données selon des critères.

// **Consignes** :

// - Créé un nouveau tableau `potions_en_stock` contenant **uniquement les potions avec stock > 0**
// - Créé un tableau `potions_abordables` avec les potions qui coûtent **moins de 40 🪙**
// - Affiche le nombre de potions dans chaque nouveau tableau
// - Affiche les tableaux créés dans la console

// 💡 **Astuce** : Utilise une boucle `for` et la méthode `push()` pour ajouter les potions qui correspondent aux critères.
// Inventaire de la boutique
const inventory = [
  { name: "Potion de soin", price: 50, stock: 10 },
  { name: "Potion de mana", price: 30, stock: 5 },
  { name: "Potion d'endurance", price: 40, stock: 0 },
  { name: "Potion de force", price: 60, stock: 3 },
  { name: "Potion de vitesse", price: 35, stock: 8 }
]

let stocked_potions = []
let cheap_potions = []

inventory.forEach(potion => {
  if (potion.stock > 0) {
    stocked_potions.push(potion)
  }
  if (potion.price < 40) {
    cheap_potions.push(potion)
  }
});

console.log(`${stocked_potions.length} potions sont disponibles à la vente`)
console.log(`${cheap_potions.length} potions sont en promotion`)
console.log(stocked_potions)
console.log(cheap_potions)
