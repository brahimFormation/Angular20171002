let brands = new Set();

brands.add('honda')
       .add('ducati')
       .add('triomph')
       .add('honda')
       .add('kawazaki');

console.log(brands); // affiche une seule fois honda 

// créer un Set() directement à partir d'un tableau 
let brandsArray = ['honda', 'ducati', 'triomph', 'Honda', 'honda'];
let brands2 = new Set(brandsArray);

// methode has pour tester si un set contient une valeur
console.log(brands.has('honda')); // true
console.log(brands.has('Honda')); // false

// methode delete pour supprime une entrée
console.log(brands.delete('honda')); // supprime et return true
console.log(brands.delete('Honda')); // supprime rien et return false

// methode forEach pour lister un set
brands.forEach(function(val1, val2, val3) {
    console.log(val1); // cle
    console.log(val2); // valeur
    console.log(val3); // le set lui-meme
});