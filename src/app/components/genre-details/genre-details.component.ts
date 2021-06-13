
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from 'src/app/services/film.service';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from '../../models/genre';
import { Film } from '../../models/film';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { faHeart as faSHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { UserService } from 'src/app/services/user.service';

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
  bin = faTrashAlt;
  emptyHeart = faHeart;
  fullHeart = faSHeart;
  favourite: boolean = false;
  favourites: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private genreService: GenreService,
    private location: Location,
    private router: Router,
    private userService: UserService,
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

  deleteGenre() {
    let url="/genres";
  
    if(confirm('Eliminare il genere "'+ this.genre!.name +'" dal database?') == true) {
      this.genreService.deleteGenre(this.genre!).subscribe(response => {
        if (response && response.success==true) {
          this.router.navigate([url]);    
          }
    
    
    });
  
    }
  
  
  }

  toggleFav() {
    this.favourite = !this.favourite;
    this.userService.editFavGenres(this.genre!.id, this.favourite).subscribe();
  }

}