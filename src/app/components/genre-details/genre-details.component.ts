
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from 'src/app/services/film.service';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from '../../models/genre';
import { Film } from '../../models/film';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-genre-details',
  templateUrl: './genre-details.component.html',
  styleUrls: ['./genre-details.component.css']
})
export class GenreDetailsComponent implements OnInit {
  faEdit = faEdit;
  films: Film[] = [];
  genres: Genre[] = [];
  genre: Genre | undefined;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private genreService: GenreService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFilms();
    this.getGenres();

  }

  getGenres(): void {
    let id = +(this.route.snapshot.paramMap.get('id') || 0);
    id = isNaN(id) ? 0 : id;
    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres;
      this.genre = genres.find(x => x.id == id)
    }
    );
  };



  getFilms(): void {
    let film;
    let id = +(this.route.snapshot.paramMap.get('id') || 0);
    id = isNaN(id) ? 0 : id;


    this.filmService.getFilms().subscribe(films => {
      this.films = films.filter(film => film.genres.map(genre => '' + genre.id).indexOf('' + id) > -1);
    });
  };

}