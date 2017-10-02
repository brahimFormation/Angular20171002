// http://reactivex.io/rxjs/manual/overview.html#choose-an-operator

let Observable = Rx.Observable;

// create observable with method of
let values = Observable.of('Hello', 'World', 2017);

// souscription 
values.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed !'),
);

// l'operateur of crée un observable qui emet toutes les valeurs
// passées en arguments les unes après les autres et qui termine 
// par emetre une notification pour le complete

// créer un observable à partir d'un tableau avec l'operator from
let fruitsArray = ['fraises','pommes','bananes'];
let fruitsObservable = Observable.from(fruitsArray);
fruitsObservable.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed !')
);

// créer un observable avec l'operator from depuis une promise
// on va utiliser l'api github pour récupérer les emojis
let url = 'https://api.github.com/emojis';
let emojisObservable = Observable.from($.getJSON(url));

emojisObservable.subscribe(
    (emojis) => console.log(emojis),
    (error) => console.log(error),
    () => console.log('completed !')
);