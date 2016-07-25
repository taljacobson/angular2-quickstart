import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
    selector: 'posts',
    directives: [],
    template: `
      <h1>post</h1>
      <div><code>{{response}}</code></div>
      `
})
export class PostComponent {
  url: string;
  response:any;
  constructor( _http: Http){
    this.url = 'https://jsonplaceholder.typicode.com/posts'
    _http.get(this.url ).subscribe((data) => {
      this.response = data._body;
    })
  }
}
