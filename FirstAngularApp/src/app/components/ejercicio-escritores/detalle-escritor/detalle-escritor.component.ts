import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.css']
})
export class DetalleEscritorComponent implements OnInit {

  idEscritor: number;
  escritor: Escritor;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private escritoresService: EscritoresService) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idEscritor = parseInt(params.id);
    });
    this.getEscritor(this.idEscritor);
  }

  async getEscritor(id: number){
    this.escritor = await this.escritoresService.getEscritorById(id);
  }

  onClickRegresar(){
    this.router.navigate(['/']);
  }

  onClickLibros(){
    this.router.navigate(['/escritores/'+this.idEscritor+'/libros']);
  }
}