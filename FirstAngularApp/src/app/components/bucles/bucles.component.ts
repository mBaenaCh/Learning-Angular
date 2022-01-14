import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  cuentas: any[];

  constructor() {
    this.cuentas = [
    {usuario: 'mBaenaCh', nivel: 200, clase: 'guerrero'},
    {usuario: 'LookinBusha', nivel: 120, clase: 'dk'},
    {usuario: 'Piroplasta', nivel: 89, clase: 'mago'},
    {usuario: 'El Avisporro', nivel: 178, clase: 'healer'}
    ];
  }

  ngOnInit(): void {
  }

}
