// Affichons les informations de la potion

// **Fichier** : `exercices/11_affichage_infos_potion.js`

// - Affiche le nom de la potion en utilisant la notation pointée `.`
// - Affiche le prix de la potion en utilisant la notation crochet `[]`
// Variable de l'exercice précédent (modifie selon tes valeurs)
const health_potion = {
  name: "Potion de soin",
  price: 50,
  stock: 10,
};
console.log(health_potion.name)
console.log(health_potion["name"])
