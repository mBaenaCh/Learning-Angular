export class Escritor{
    id: number;
    nombre: string;
    apellidos: string;
    imagen: string;
    pais: string;

    constructor(pId: number = 0, pNombre: string = '', pApellidos: string = '', pImagen = '', pPais = ''){
        this.id = pId;
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.imagen = pImagen;
        this.pais = pPais;
    }
}