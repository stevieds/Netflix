import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { FilmService } from 'src/app/services/film.service';



@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Film[] = [];

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms():void{
    this.filmService.getFilms().subscribe(films => this.films = films);
  };


  

}
