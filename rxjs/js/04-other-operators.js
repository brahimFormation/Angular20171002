// http://reactivex.io/rxjs/manual/overview.html#choose-an-operator

let Observable = Rx.Observable;

// create observable with method of
let interval = Observable.interval(500) // observable qui emet toutes les 500ms
                    .map(x => x * 10)
                    .take(10); // operator qui arrete l'emission après 10 itérations

interval.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed !')
)

// map() se comporte comme en js :
var numbers = [0,1,2,3,4];
console.log(numbers.map(x => x * 10));

let myString = "Aujourd'hui on voit les Observables avec RxJs";
let timer = Observable.timer(3000, 100) //1er arg = delai, 2e arg = interval
                    .do(x => console.log('avant map ', x))
                    .map(x => myString[x])
                    .do(x => console.log('après map ', x))
                    .take(myString.length);

let container = document.querySelector('#container');
timer.subscribe(
    (value) => container.innerHTML += value,
    (err) => console.log(err),
    () => console.log('completed !')
);

