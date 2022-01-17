import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';
import { Escritor } from '../models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {



  constructor() { 

  }

  getAllEscritores(): Promise<Escritor[]>{
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getAllPaises(): Promise<string[]>{
    return new Promise((resolve, reject) => {
      const paises: string[] = [];
      ESCRITORES.forEach(item => paises.push(item.pais));
      resolve(paises.filter((v, i, a) => a.indexOf(v) === i));
    });
  }

  getEscritoresByPais(pais: string): Promise<Escritor[]>{
    return new Promise((resolve, reject) =>{
      resolve(ESCRITORES.filter(item => item.pais === pais));
    });
  }

  getEscritorById(id: number): Promise<Escritor>{
    return new Promise((resolve, reject) => {
      const escritor: Escritor = ESCRITORES.find(item => {
        return item.id === id;
      });
      resolve(escritor);
    });
  }

}
