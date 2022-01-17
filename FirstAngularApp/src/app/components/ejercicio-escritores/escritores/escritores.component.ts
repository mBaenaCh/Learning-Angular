import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-escritores',
  templateUrl: './escritores.component.html',
  styleUrls: ['./escritores.component.css']
})
export class EscritoresComponent implements OnInit {

  escritores: Escritor[];
  paises: string[];

  constructor(private escritoresService: EscritoresService, private router: Router) {
    this.escritores = [];
    this.paises = [];
  }

  ngOnInit(): void {
    this.getEscritores();
    this.getPaises();
  }

  async getPaises() {
    this.paises = await this.escritoresService.getAllPaises();
  }

  async getEscritores() {
    this.escritores = await this.escritoresService.getAllEscritores();
  }

  onClick(id: number): void {
    this.router.navigate(['escritores/' + id]);
  }

  async onChangeOptionSelected($event) {
    if ($event.target.value === '') {
      this.escritores = await this.escritoresService.getAllEscritores();
    } else {
      this.escritores = await this.escritoresService.getEscritoresByPais($event.target.value);
    }
  }

}
