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
    AddActorComponent
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
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
