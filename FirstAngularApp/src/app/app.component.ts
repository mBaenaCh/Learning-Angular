import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';
  titles: string[];
  numbers: number[];

  constructor(){
    this.titles = ['Angular', 'Vue', 'React'];
    this.numbers = Array.from({length: 10}, () => Math.floor(Math.random()*10));
  }
}
