// Tri simple

// **Fichier** : `exercices/16_tri_simple.js`

// 🎯 **Objectif** : Trier un tableau d'objets par ordre croissant de prix.

// **Consignes** :

// - Trie les potions par **prix croissant** (du moins cher au plus cher)
// - Affiche l'inventaire trié dans la console
// - Affiche un message pour chaque potion : `"<nom> : <prix> 🪙"`

// 💡 **Astuce** : Utilise deux boucles `for` imbriquées pour comparer et échanger les éléments (algorithme de tri à bulles simplifié). Pour échanger deux éléments d'un tableau :

// ```js
// let temp = inventaire[i];
// inventaire[i] = inventaire[j];
// inventaire[j] = temp;
// ```
// Inventaire de la boutique (non trié)
const inventory = [
  { name: "Potion de force", price: 60, stock: 3 },
  { name: "Potion de mana", price: 30, stock: 5 },
  { name: "Potion de soin", price: 50, stock: 10 },
  { name: "Potion d'endurance", price: 40, stock: 7 }
]

inventory.sort((a, b) => a.price - b.price);
inventory.forEach(potion => {
  console.log(`${potion.name} : ${potion.price} 🪙`)
});