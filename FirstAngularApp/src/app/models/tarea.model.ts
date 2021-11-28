export class Tarea {
    titulo: string;
    descripcion: string;
    estaCompleta: boolean;

    constructor(pTitulo = '', pDescripcion = ''){
        this.titulo = pTitulo;
        this.descripcion = pDescripcion;
        this.estaCompleta = false;
    } 
}