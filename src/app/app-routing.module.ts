import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';
import { GenreDetailsComponent } from './components/genre-details/genre-details.component';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { AddGenreComponent } from './components/add-genre/add-genre.component';
import { AddActorComponent } from './components/add-actor/add-actor.component';

const routes: Routes = [
  { path: 'films', component: FilmListComponent },
  { path: 'actors', component: ActorListComponent },
  { path: 'genres', component: GenreListComponent },
  { path: 'filmd/:id', component: FilmDetailsComponent },
  { path: 'actord/:id', component: ActorDetailsComponent },
  { path: 'genred/:id', component: GenreDetailsComponent },
  { path: 'addf', component: AddFilmComponent },
  { path: 'addA', component: AddActorComponent },
  { path: 'addG', component: AddGenreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
