// Recherche dans l'inventaire

// **Fichier** : `exercices/13_grand_marchand.js`

// 🎯 **Objectif** : Utiliser des boucles et conditions pour rechercher des informations dans un tableau d'objets.

// **Consignes** :

// - Trouve et affiche la potion **la plus chère** de l'inventaire
// - Trouve et affiche la potion avec **le plus de stock**
// - Compte et affiche **combien de potions ont un stock supérieur à 0**

// 💡 **Astuce** : Utilise des variables pour stocker les résultats pendant que tu parcours l'inventaire avec une boucle `for`.
// Inventaire de la boutique
const inventory = [
  { name: "Potion de soin", price: 50, stock: 10 },
  { name: "Potion de mana", price: 30, stock: 5 },
  { name: "Potion d'endurance", price: 40, stock: 0 },
  { name: "Potion de force", price: 60, stock: 3 },
]
let max_price = 0
let max_price_potion = ""
let max_stock = 0
let max_stock_potion = ""
let nb_potions_in_stock = 0

for (potion of inventory) {
  if (potion.price > max_price) {
    max_price = potion.price
    max_price_potion = potion.name
  }
  if (potion.stock > max_stock) {
    max_stock = potion.stock
    max_stock_potion = potion.name
  }
  if (potion.stock > 0) {
    nb_potions_in_stock += 1
  }
}
console.log(max_price_potion)
console.log(max_stock_potion)
console.log(nb_potions_in_stock)

