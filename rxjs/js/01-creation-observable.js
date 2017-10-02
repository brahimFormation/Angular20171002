let Observable = Rx.Observable;

// create observable 
let values = Observable.create((observer) => {
    observer.next("Hello");
    observer.next("World");
    setTimeout(() => console.log('yello les zamis !'), 5000);
});

values.subscribe((data) => console.log(data));

// next() push des donnees 
// la difference avec generator es6 c'est que le generator 
// renvoie un iterator sur lequel la methode next() récupère (pull)
// des données alors que next() sur un observer push des données