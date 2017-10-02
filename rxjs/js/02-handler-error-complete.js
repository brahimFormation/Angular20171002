let Observable = Rx.Observable;

// create observable 
let values = Observable.create((observer) => {
    try {
        observer.next("Hello");
        observer.next("World");
        observer.complete();
    } catch(e) {
        observer.error(e);
    }
}); 

values.subscribe(
    // récupère les données
    (data) => console.log(data),
    // 2e handler pour récupérer les erreurs
    (error) => console.log(data),
    () => console.log('completed !')
);

