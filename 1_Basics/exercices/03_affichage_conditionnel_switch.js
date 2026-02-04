// Affichage conditionnel avec switch
// ### Exercice 3 : Affichage conditionnel avec switch

// **Fichier** : `exercices/03_affichage_conditionnel_switch.js`

// - Affiche dans la console `Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔`
//   - `1. Le nom de la boutique`
//   - `2. Le nom du Sorcier`
//   - `3. Le prix d'un potion de soin`
//   - `4. La quantité d'une potion de soin`
// - Fais un `prompt` pour demander à l'aventurier son choix entre 1 et 4
// - Avec un `switch ... case` sur le numéro choisi par l'aventurier, affiche l'information demandée
//   - Dans le cas où cela ne correspond pas à aucun des choix, affiche `Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`
//   - ⚠️ **Attention**, `prompt` retourne une chaîne de caractère, il faudra certainement le convertir en `Number` avec `parseInt`
// Variables des exercices précédents (modifie selon tes valeurs)
const SHOP_NAME = "La Cruche Fêlée"
const WIZ_NAME = "Rincevent";
const CURRENCY = `🪙`
let nb_health_potion = 5
let price_health_potion = 20
let is_shop_open = false

let choice = parseInt(prompt(`Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔
1. Le nom de la boutique
2. Le nom du Sorcier
3. Le prix d'un potion de soin
4. La quantité d'une potion de soin`))

switch (choice) {
    case 1:
        console.log(`Le nom de la boutique est ${SHOP_NAME}`)
        break
    case 2:
        console.log(`Le nom du sorcier est ${WIZ_NAME}`)
        break
    case 3:
        console.log(`Le prix d'une potion de soin est ${price_health_potion}${CURRENCY}`)
        break
    case 4:
        console.log(`Il reste ${nb_health_potion} potions de soin`)
        break
    default:
        console.log(`Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`)
}
