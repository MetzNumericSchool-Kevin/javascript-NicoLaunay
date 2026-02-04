// Aventurier, regarde tout ce que je vends !

// **Fichier** : `exercices/12_affichage_inventaire.js`

// Créer un inventaire avec 3 objets `potions` :

// - Potion de soin
// - Potion de mana
// - Potion d'endurance

// Ensuite :

// - Affiche ton inventaire à l'aventurier avec une boucle `for`
// - Pour chaque itération, affiche :
//   - `Nom: <nom_potion>`
//   - `Prix: <prix_potion>`
//   - `Stock: <stock_potion>`
// - Trouve une autre solution pour afficher **dynamiquement** chacune des propriétés de la potion **sans utiliser la notation pointée ou crochet**. Tu as plusieurs possibilités :
//   - `for` sur `Object.keys`
//   - `for ... in` sur ton objet
//   - `for ... of` sur `Object.entries`
// Variable de l'exercice précédent (modifie selon tes valeurs)
const inventory = [];

class Potion {
    constructor(name, price, stock) {
    this.name = name
    this.price = price
    this.stock = stock
  }
}

inventory.push(health_potion = new Potion("Potion de soin", 50, 10))
inventory.push(mana_potion = new Potion("Potion de mana", 60, 5))
inventory.push(stamina_potion = new Potion("Potion d'endurance", 30, 25))

inventory.forEach(potion_type => {
    console.log(`Nom: ${potion_type.name}`)
    console.log(`Prix: ${potion_type.price}`)
    console.log(`Stock: ${potion_type.stock}`)
})

inventory.forEach(potion_type => {
    for ([key, entry] of Object.entries(potion_type)) {
        console.log(entry)
    }
})
