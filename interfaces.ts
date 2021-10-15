//Puedo definir TODAS las propiedas que pueden y deben implementar
//todas las instancias de esta interfaz
interface Person{
    name: string;
    lastName: string;
    age: number;
}

function printPerson(person: Person){
    console.log(person);
}

printPerson({name: 'Mateo', lastName: 'Baena', age: 25});

// Propiedades opcionales, las cuales se indican con un "?"

interface Car {
    brand: string;
    model: string;
    color?: string;
}

function printCar(car: Car){

    if(car.color){
        console.log(`Brand: ${car.brand}, Model: ${car.model}, Color: ${car.color}`);
    } else {
        console.log(`Brand: ${car.brand}, Model: ${car.model}`);
    }
}

printCar({brand: "BMW", model: "120i"});
printCar({brand: "Volkswagen", model: "Jetta", color: "White"});

//Propiedades read-only son aquellas que no pueden cambiar de valor una vez que son instanciadas
//Añadimos el valor readonly antes de la instanciacion de la variable
interface Dot{
    readonly x: number;
    readonly y: number;
}

let p1: Dot = {x: 121, y:84};
//p1.x = 45 Nos tiraria error porque ese valor inicial de x no se puede modificar

//Podemos definir funciones y asociarlas a interfaces
interface Search{
    //Indicamos que con un par de valores esperamos retornar un valor booleano
    (value: string, search: string): boolean;
}

const mySearch: Search = (v: string, s: string) => {
    const result = v.search(s);
    return result > -1;
}

console.log(mySearch('hola', 'ola'));
console.log(mySearch('hola', 'hola'));

// Uso de una interfaz en una clase
// Donde la clase debe implementar la interfaz, asi como todas sus propiedades
// Adicionalmente, una clase implementa propiedades unicas para esa clase
interface Human{
    name: string;
    age: number;
}

class Adult implements Human{
    name: string;
    age: number;
    ownsAHouse: boolean;

    constructor(pName: string, pAge: number, pOwnsAHouse: boolean){
        this.name = pName;
        this.age = pAge;
        this.ownsAHouse = pOwnsAHouse;
    }
}