import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular playground';
  titles: string[];
  numbers: number[];
  receivedAlert: string;
  textField: string;
  someObject: any;

  constructor(){
    this.receivedAlert = '';
    this.titles = ['Angular', 'Vue', 'React'];
    this.numbers = Array.from({length: 10}, () => Math.floor(Math.random()*10));
    this.textField = 'Initial value';
    this.someObject = {};
  }

  alertReceived($event): void{
    this.receivedAlert = $event;
  }

  stopCountReceived($event): void{
    console.log($event);
  }

  onClick(): void{
    this.textField = 'Changed after the click'
  }
}
