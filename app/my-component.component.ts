import { Component } from '@angular/core';


@Component({
  selector: 'my-component',
  template: `
  <h1>hello : {{name}}</h1>
  `
})
export class MyComponent {
  name: string;
  constructor() {
    this.name = 'tal';
  }
}
