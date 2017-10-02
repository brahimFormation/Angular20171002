let books = new Map();

books.set('Umberto Eco','Le nom de la rose');
books.set('Michel Tournier','Le roi des Aulnes');
console.log(books);
// propriété size pour récupérer la taille d'une Map()
console.log(books.size);

// methode get pour lire valeur d'un Map en lui passant un clé
console.log(books.get('Umberto Eco'));

// methode forEach 
books.forEach(function(cle, val, map) {
    console.log(cle); // cle
    console.log(val); // valeur
    console.log(map); // le set lui-meme
});

console.log(books.keys()); 
console.log(books.values()); 
console.log(books.entries()); 






