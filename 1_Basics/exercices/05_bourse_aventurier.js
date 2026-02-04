// Bourse de l'Aventurier 💰

// **Fichier** : `exercices/05_bourse_aventurier.js`

// - Créé une variable pour stocker l'argent de l'aventurier, initialise-la avec une valeur de ton choix.
// - Vérifie si l'aventurier a assez d'argent pour acheter la quantité de potion demandée.
// - Soustrais la quantité de potion demandée du stock et soustrais le prix total de la bourse de l'aventurier.
//   - ⚠️ **Attention**, il faut que l'aventurier ai assez d'argent pour pouvoir acheter les potions !
//   - ⚠️ **Attention**, il faut qu'il y ait assez de potion en stock pour pouvoir acheter les potions !
// Variables des exercices précédents (modifie selon tes valeurs)
let nb_health_potion = 10;
let price_health_potion = 50;
let purse_money = 250
let nb_order = prompt('Combien de potions de soin ?')
let total_price = nb_order*price_health_potion

if (nb_order > nb_health_potion) {
    console.log(`Stock insuffisant`)
} else if (purse_money < total_price) {
    console.log(`Trop pauvre !`)
} else {
    nb_health_potion = nb_health_potion - nb_order
    purse_money = purse_money - total_price
    console.log(`Prix de ${nb_order} potions de soins : ${total_price} 🪙 mon cher Aventurier. 💸`)
}