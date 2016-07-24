import { Component } from '@angular/core';
import { MyTodos } from '../todos/my-todos.component'

@Component({
    selector: 'my-app',
    directives: [MyTodos],
    template: `
      <h1>My First Angular 2 App</h1>
      <my-todos></my-todos>
      `
})
export class AppComponent { }
