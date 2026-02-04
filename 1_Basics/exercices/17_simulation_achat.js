// Mini-simulation d'achat

// **Fichier** : `exercices/17_simulation_achat.js`

// 🎯 **Objectif** : Créer une simulation interactive d'achat avec `prompt`.

// **Consignes** :

// - Affiche l'inventaire disponible à l'aventurier
// - Demande avec `prompt` quelle potion il veut acheter (utilise un numéro de choix qui servira d'identifiant)
// - Demande avec `prompt` combien il en veut
// - Vérifie si :
//   - La potion existe dans l'inventaire
//   - Il y a assez de stock
//   - L'aventurier a assez d'argent (bourse = 100 🪙)
// - Si tout est OK :
//   - Calcule le prix total
//   - Déduis le montant de la bourse
//   - Déduis le stock
//   - Affiche un message de succès avec la bourse restante
// - Sinon, affiche un message d'erreur approprié

// ---
// Inventaire de la boutique
const inventory = [
  { name: "Potion de soin", price: 40, stock: 5 },
  { name: "Potion de mana", price: 20, stock: 3 },
  { name: "Potion d'endurance", price: 30, stock: 2 }
]
// Bourse de l'aventurier
let purse_money = 100;

// Affichage inventaire
inventory.forEach(potion => {
  console.log(`${potion.name} : ${potion.price} 🪙 (${potion.stock} disponibles)`)
})

// PROMPT
// Construction menu
let buy_choices = ""
for (i in inventory) [
  buy_choices += `
${parseInt(i)+1} -> ${inventory[i].name}`
]

let choice = parseInt(prompt(`Quelles potions voulez vous acheter ? ${buy_choices}`)) - 1
let nb_order = parseInt(prompt(`Combien en voulez-vous ?`))

// TRAITEMENT ET REPONSE
if (choice >= inventory.length) {
  console.log(`Désolé, ce choix de potion n'est pas valide`)
} else if (nb_order > inventory[choice].stock) {
    console.log(`Stock insuffisant`)
} else if (purse_money < (inventory[choice].price * nb_order)) {
    console.log(`Trop pauvre !`)
} else {
    total_price = inventory[choice].price * nb_order
    inventory[choice].stock -= nb_order
    purse_money -= total_price
    console.log(`Prix de ${nb_order} ${inventory[choice].name} : ${total_price} 🪙 mon cher Aventurier. 💸
Il vous reste ${purse_money} 🪙`)
}



