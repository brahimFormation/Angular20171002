// permet de créer des fonctions qu'on peut mettre en pause et faire repartir à 
// l'endroit ou on s'est arreté 

console.log('je vais à une formation Angular');
let myPromise = new Promise ( (resolve, reject) =>  {
    setTimeout( () => {
        let message = 'bravo vous êtes reçu ';
        resolve(message);
        //reject('Désolé viré !');
    }, 5000 );
});

console.log('je sort de cette formation');

myPromise.then( (data) => {
    console.log(data);
} );

console.log('après plein de choses');
