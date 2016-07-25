import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";

import { PostComponent } from './components/posts/posts.component'

@Component({
    selector: 'my-app',
    directives: [PostComponent],
    providers:[ HTTP_PROVIDERS ],
    template: `
      <h1>My First Angular 2 App</h1>
      <posts></posts>
      `
})
export class AppComponent { }
