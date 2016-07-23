import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
  <h1>hello : {{name}}</h1>
  <img [src] = "imageUrl"/>
  <br/>
  <button (click) = "changeMessage()" >button</button>
  <h2>{{clickMessage}}</h2>
  <input [(ngModel)] = "name" (ngModelChange) = "setUpperCase($event)"/>
  `
})
export class MyComponent {
  clickMessage;
  name: string;
  imageUrl: string;
  isActive: boolean;
  constructor() {
    this.name = 'tal';
    this.imageUrl = 'http://lorempixel.com/400/200';
    this.isActive = true;
  }

  changeMessage(){
    this.clickMessage = 'hellow world';
  }
  setUpperCase(e){
    this.name = e.toUpperCase()
  }

}
