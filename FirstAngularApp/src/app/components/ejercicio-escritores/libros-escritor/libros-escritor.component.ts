import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros-service.service';

@Component({
  selector: 'app-libros-escritor',
  templateUrl: './libros-escritor.component.html',
  styleUrls: ['./libros-escritor.component.css']
})
export class LibrosEscritorComponent implements OnInit {

  idEscritor: number;
  libros: Libro[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private librosService: LibrosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe(params => {
      this.idEscritor = parseInt(params.id);
    });
    this.getLibros(this.idEscritor);
  }

  async getLibros(id: number){
    this.libros = await this.librosService.getAllLibrosForEscritor(id);
  }

}
