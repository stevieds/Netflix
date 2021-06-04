import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';
import { GenreDetailsComponent } from './components/genre-details/genre-details.component';
import { LoginComponent } from './components/login/login.component';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { AddGenreComponent } from './components/add-genre/add-genre.component';
import { AddActorComponent } from './components/add-actor/add-actor.component';
import {NgxLocalStorageModule} from 'ngx-localstorage';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditFilmComponent } from './components/edit-film/edit-film.component';
import { EditActorComponent } from './components/edit-actor/edit-actor.component';
import { EditGenreComponent } from './components/edit-genre/edit-genre.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    ActorListComponent,
    GenreListComponent,
    DashboardComponent,
    FilmDetailsComponent,
    ActorDetailsComponent,
    GenreDetailsComponent,
    LoginComponent,
    AddFilmComponent,
    AddGenreComponent,
    AddActorComponent,
    NavbarComponent,
    EditFilmComponent,
    EditActorComponent,
    EditGenreComponent,
    UserDetailsComponent,
    ModifyUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    NgxLocalStorageModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
