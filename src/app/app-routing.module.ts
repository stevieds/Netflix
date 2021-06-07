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
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EditFilmComponent } from './components/edit-film/edit-film.component';
import { EditActorComponent } from './components/edit-actor/edit-actor.component';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';
import { EditGenreComponent } from './components/edit-genre/edit-genre.component';

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
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'edit-film/:id', component: EditFilmComponent },
  { path: 'modify-user', component: ModifyUserComponent },
  { path: 'edit-actor/:id', component: EditActorComponent },
  { path: 'edit-genre/:id', component: EditGenreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
