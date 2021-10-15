//Boolean
let isValid: boolean = true;
isValid = false;

//Number
let age: number = 16;

//String
let firstName: string = 'Mateo';
let lastName: string = 'Baena'

let fullName: string = `${firstName} ${lastName}`;

//Arrays
let numbers: number[] = [1, 2, 3, 4, 5, 6];
let anotherNumbers: Array<number> = [7, 8, 9, 10, 11, 12];

//Tuple
let site: [string, number] = ['house', 1234];

// Enum parecidos a diccionarios de python, donde puedo definir valores a distintas clases o tipos de valores
enum State{
    Offline,
    Undefined,
    Online
}

let state: State = State.Online; //La variable nos retorna la posicion o el valor de un enum especifico

// Unknown
// Son datos que no necesariamente debo definir en us tipologia, para su posterior procesado
let noType: unknown = 'Hola';

//No me permiten un asignacion directa a otra variable con una tipologia definida
let newString: string = 'A string';
//newString = noType;

// Any
// Son datos a los cuales no tengo que definir tipologia, pero que no son tan estrictos como los Unknown
let definedType: any = '';

//Las funciones tambien deben tener una tipologia definida
function logger(): void {
    console.log('Void return');
}