import { provideRouter, RouterConfig } from '@angular/router';
import { AlbumsComponent } from "./components/albums/albums.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { VideosComponent } from "./components/videos/videos.component";

const routes: RouterConfig = [
  {path:'photos',  component: AlbumsComponent},
  {path:'albums', component: PhotosComponent},
  {path:'videos',  component: VideosComponent}
];

export const appRouterProviders = [
  provideRouter(routes)
];
