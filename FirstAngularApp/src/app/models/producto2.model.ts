export class Producto2{
    nombre: string;
    cantidad: number;
    departamento: string;

    constructor(pNombre: string = '', pCantidad: number = 1, pDepartamento: string = ''){
        this.nombre = pNombre;
        this.cantidad = pCantidad;
        this.departamento = pDepartamento;
    }
}