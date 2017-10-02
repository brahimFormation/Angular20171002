// en ES5

var fruits = ['bananes','pommes'];
var vegetables = ['poireaux','carottes'];

var food = [fruits, vegetables];
// on obtien un tableau à deux dimension

// pour obtenir un tableau à une dimension à partir de 2 tableaux
let food2 = [...fruits, ...vegetables];

// combiner avec d'autres string
let food3 = [...fruits, ...vegetables, 'navets'];

// utiliser les spreed operator dans une fonction
// en ES5 
var mixer = function(ing1, ing2) {
    console.log(ing1 + " avec " + ing2);
}

// en ES6
let mixer2 = (ing1, ing2) => console.log(ing1 + " avec " + ing2);
mixer2('banane', 'poire');

// avec un spreed operator 
let ingredients = ['carotte','fraise'];
mixer2(...ingredients);

let mixer3 = (...args) => console.log(args.join('-'));
mixer3('Fraise','banane','abricot'); // Fraise-banane-abricot

