export class Libro {
    id: number;
    titulo: string;
    publicado: number;
    imagen: string;
    escritor: number;

    constructor(pId: number = 0, pTitulo: string = '', pPublicado: number = 0, pImagen: string = '', pEscritor: number = 0){
        this.id = pId;
        this.titulo = pTitulo;
        this.publicado = pPublicado;
        this.imagen = pImagen;
        this.escritor = pEscritor;
    }
}