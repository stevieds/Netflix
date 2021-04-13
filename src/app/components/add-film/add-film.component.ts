
import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from '../../models/genre';
import { FilmService } from 'src/app/services/film.service';
import { ActorService } from 'src/app/services/actor.service';
import { UserService } from 'src/app/services/user.service';
import { Film } from 'src/app/models/film';
import { Actor } from 'src/app/models/actor';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  allGenres: Genre[] = [];
  allActors: Actor[] = [];


  film : Film = {
    actors: [],
    cover_url: '',
    created_by: 0,
    title: "",
    description: "",
    plot: "",
    duration: 0,
    release_year: 0,
    genres:  [],
    vote: 0,
    votes: [],
    tags : "",
    id: 0,
    stars:0
  }


  constructor(
    private genreService: GenreService,
    private filmService: FilmService,
    private actorService: ActorService,
    private userService: UserService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.getGenres();
    this.getActors();
  }

  getGenres():void{
    this.genreService.getGenres().subscribe(genres => this.allGenres = genres);
  };

  getActors():void{
    this.actorService.getActors().subscribe(actors => this.allActors = actors);
  };

  addG () {
    this.film.genres.push(genre);
  }

  addA (actor: Actor) {
    this.film.actors.push(actor);
  }

  add() {
    this.filmService.addFilm(this.film).subscribe(response => {console.log(response)
    }
      );
  }

// this.userService.loggedUser.id


}