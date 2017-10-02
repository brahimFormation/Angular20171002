let fruits = new Set();
fruits.add('pommes').add('bananes');
let fruitsIteratorEntries = fruits.entries();
console.log(fruitsIteratorEntries);

// recupérer val suivante d'un setIterator

if (fruitsIteratorEntries.next().done) {
    console.log('itération terminée');
} else {
    console.log(fruitsIteratorEntries.next());    
}

