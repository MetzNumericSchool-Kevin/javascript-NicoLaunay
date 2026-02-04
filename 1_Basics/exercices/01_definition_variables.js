// Définition de variables
// ### Exercice 1 : Définition de variables

// **Fichier** : `exercices/01_definition_variables.js`

// Déclare les variables pour ta boutique de potions :

// - Déclare une constante pour le nom de ta boutique.
// - Déclare une variable pour le nombre de potions de soins en stock, la valeur par défaut de ton choix.
// - Déclare une variable pour indiquer le prix d'une potion de soin, la valeur par défaut de ton choix.
// - Déclare une variable pour indiquer si la boutique est ouverte ou non.

// Affiche dans la console les informations de ta boutique avec `console.log`.
const SHOP_NAME = "La Cruche Fêlée"
var nb_health_potion = 5
var price_health_potion = 20
var is_shop_open = true

console.log("-- " + SHOP_NAME + " --")
console.log("Potions de soin :")
console.log("Quantité : " + nb_health_potion)
console.log("Prix : " + price_health_potion)
if (is_shop_open) {
    console.log("La boutique est ouverte")
} else {
    console.log("La boutique est fermée")
}