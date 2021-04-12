
import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from '../../models/genre';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  allGenres: Genre[] = [];
  title: string = "";
  description: string = "";
  plot?: string ="";
  duration: number = 0;
  release_year: number =0;
  cover_url: string ="";
  genres: Genre[] = [];


  constructor(
    private genreService: GenreService,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres():void{
    this.genreService.getGenres().subscribe(genres => this.allGenres = genres);
  };



}