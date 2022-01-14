export class Producto{
    nombre: string;
    valor: number;
    cantidad: number;

    constructor(pNombre: string, pValor: number){
        this.nombre = pNombre;
        this.valor = pValor;
        this.cantidad = 1;
    }
}