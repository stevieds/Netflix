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
import { EditFilmComponent } from './components/edit-film/edit-film.component';
import { EditActorComponent } from './components/edit-actor/edit-actor.component';
import { EditGenreComponent } from './components/edit-genre/edit-genre.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';

const routes: Routes = [
  { path: 'films', component: FilmListComponent, canActivate: [LoginComponent] },
  { path: 'actors', component: ActorListComponent, canActivate: [LoginComponent] },
  { path: 'genres', component: GenreListComponent, canActivate: [LoginComponent] },
  { path: 'filmd/:id', component: FilmDetailsComponent, canActivate: [LoginComponent] },
  { path: 'actord/:id', component: ActorDetailsComponent, canActivate: [LoginComponent] },
  { path: 'genred/:id', component: GenreDetailsComponent, canActivate: [LoginComponent] },
  { path: 'addf', component: AddFilmComponent, canActivate: [LoginComponent] },
  { path: 'addA', component: AddActorComponent, canActivate: [LoginComponent] },
  { path: 'addG', component: AddGenreComponent, canActivate: [LoginComponent] },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginComponent] },
  { path: 'edit-film/:id', component: EditFilmComponent, canActivate: [LoginComponent] },
  { path: 'edit-actor/:id', component: EditActorComponent, canActivate: [LoginComponent]},
  { path: 'edit-genre/:id', component: EditGenreComponent, canActivate: [LoginComponent]},
  { path: 'user-details', component: UserDetailsComponent, canActivate: [LoginComponent]},
  { path: 'modify-user', component: ModifyUserComponent, canActivate: [LoginComponent]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
