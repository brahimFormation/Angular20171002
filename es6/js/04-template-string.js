
let lastName = 'Martin';

let speech = `
Madame ${lastName}, 

Veuillez trouver ci après une liste de recommendations : 

    - directive 1
    - directive 2
    - etc...

Amicalement, 

Tonton Christophe ;-)
`;

// console.log(speech); // formaté
document.write(speech) // nom formaté
alert(speech); // formaté

let processTemplate = (param1, param2 ) => {
    console.log('param1 ' + param1);
    console.log('param2 ' + param2);
}

let speech2 = processTemplate`Madame ${lastName}, 

Veuillez trouver ci après une liste de recommendations : 

    - directive 1
    - directive 2
    - etc...

Amicalement, 

Tonton Christophe ;-)`;