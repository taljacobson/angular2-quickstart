import { Component } from '@angular/core';
import { MyComponent } from './my-component.component'
import {ROUTER_DIRECTIVES, Router, RouterConfig} from "@angular/router";
import { AlbumsComponent } from "./components/albums/albums.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { VideosComponent } from "./components/videos/videos.component";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
      <h1>My First Angular 2 App</h1>
      <h2>component router</h2>
      <nav>
        <a routerLink="/photos" >photos</a>
        <a routerLink="/albums" >albums</a>
        <a routerLink="/videos" >videos</a>
      </nav>
      <router-outlet></router-outlet>
      `
})

export class AppComponent { }
