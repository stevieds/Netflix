
import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from '../../models/genre';
import { FilmService } from 'src/app/services/film.service';
import { ActorService } from 'src/app/services/actor.service';
import { UserService } from 'src/app/services/user.service';
import { Film } from 'src/app/models/film';
import { Actor } from 'src/app/models/actor';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';





@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  allGenres: Genre[] = [];
  allActors: Actor[] = [];
  gen: number=0;


  film : Film = {
    actors: [],
    cover_url: '',
    created_by: 0,
    title: "",
    description: "",
    plot: "",
    duration: "",
    release_year: 0,
    genres:  [],
    vote: 0,
    votes: [],
    tags : "",
    id: 0,
    stars:0,
  }


  constructor(
    private genreService: GenreService,
    private filmService: FilmService,
    private actorService: ActorService,
    private localStorage: LocalStorageService,
    private router: Router,
    private userService: UserService

  ) { }

  ngOnInit(): void {
    this.getGenres();
    this.getActors();
  }

  getGenres():void{
    this.genreService.getGenres().subscribe(genres =>
      {
        this.allGenres = genres;
        this.allGenres.sort((a, b) => a.name < b.name ? -1 : 1)
      }
      
      );
  };


  getActors():void{
    this.actorService.getActors().subscribe(actors => {
      this.allActors = actors;
      this.allActors.sort((a, b) => a.lastname < b.lastname ? -1 : 1)
    });
  };





  add() {
    let url = "/films/"
    this.film.actors=this.allActors.filter(x => x.selected);
    this.film.genres=this.allGenres.filter(x => x.selected);
    this.filmService.addFilm(this.film).subscribe(response => {
      if (response && response.success==true) {
        this.router.navigate([url]);
      } 
    });
  }



}