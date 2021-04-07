import { Component, OnInit } from '@angular/core';

import { FilmService } from 'src/app/services/film.service';
import { Film } from '../../models/film';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lastFilms: Film[] = [];
  firstFilms: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getLastFilms();
    this.getFirstFilms();
  }

  getLastFilms():void{
    this.filmService.getFilms().subscribe(films => this.lastFilms = films.reverse().slice(0, 4));
  };

  getFirstFilms():void{
    this.filmService.getFilms().subscribe(films => this.firstFilms = films.sort((a, b): number => { return b.vote - a.vote; }).slice(0,4));





  };

}


