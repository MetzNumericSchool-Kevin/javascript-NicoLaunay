// Calcul du prix total d'une commande de potion 🪙
// **Fichier** : `exercices/04_calcul_prix_total.js`

// Demande avec `prompt` une quantité de potion de soin, et affiche ensuite dans la `console` => `Prix de <quantite_potion> potions de soins : <prix_total> 🪙 mon cher Aventurier. 💸`.
// Variables des exercices précédents (modifie selon tes valeurs)
let price_health_potion = 50;
let nb_order = prompt('Combien de potions de soin ?')
console.log(`Prix de ${nb_order} potions de soins : ${nb_order*price_health_potion} 🪙 mon cher Aventurier. 💸`)
