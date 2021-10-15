//Definicion de una funcion
const sum = function(a: number, b: number): number {
    return a+b;
}

sum(1, 5);

// Uso de parametros opcionales y valores por defecto
function printFullName(name: string, lastName?: string): string{
    if(lastName) return name+ " " + lastName;
    else return name;
}

printFullName('Mateo');
printFullName('Mateo', 'Baena');

function printDefaultFullName(name: string, lastName: string = "Baena"): string{
    if(lastName) return name+ " " + lastName;
    else return name;
}

printFullName('Mateo');
printFullName('Pedro');

// Parametros REST
function printFullNameRest (name: string, ...restName: string[]): string{
    return name + " " + restName.join(' ');
}
// A partir del segundo parametro, son valores que identifican nuestro array de tipo rest
console.log(printFullNameRest('Mateo', 'Del', 'Jesus'))