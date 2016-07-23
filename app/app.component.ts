import { Component } from '@angular/core';
import { MyComponent } from './my-component.component'

@Component({
    selector: 'my-app',
    directives: [MyComponent],
    template: `
      <h1>My First Angular 2 App</h1>
      <my-component></my-component>
      `
})
export class AppComponent { }
