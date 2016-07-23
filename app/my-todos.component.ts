import { Component } from '@angular/core';

@Component({
  selector: 'my-todos',
  template: `
  <h1>my todos</h1>
  <ul class="item">
  <li *ngFor = "#todo of todos" >
    {{todo}}
  </li>
  </ul>
  `
})
export class MyTodos {
  todos:any;
  name:string;
  constructor() {
    this.todos = ['hoen','tal','noam'];
  }
}
