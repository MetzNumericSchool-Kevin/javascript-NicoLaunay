// Affichage conditionnel
// ### Exercice 2 : Affichage conditionnel

// **Fichier** : `exercices/02_affichage_conditionnel.js`

// Affiche dans ta `console` => `Bienvenue dans la boutique <nom_boutique> Aventurier ! 🎉` si la boutique est ouverte, sinon affiche `La boutique <nom_boutique> est fermée, revenez plus tard Aventurier ! 😴`
// Variables de l'exercice précédent (modifie selon tes valeurs)
const SHOP_NAME = "La Cruche Fêlée"
var nb_health_potion = 5
var price_health_potion = 20
var is_shop_open = false
if (is_shop_open) {
    console.log(`Bienvenue dans la boutique ${SHOP_NAME} Aventurier ! 🎉`)
} else {
    console.log(`La boutique ${SHOP_NAME} est fermée, revenez plus tard Aventurier ! 😴`)
}
