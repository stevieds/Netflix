import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from 'src/app/services/film.service';
import { GenreService } from 'src/app/services/genre.service';
import { ActorService } from 'src/app/services/actor.service';
import { Film } from '../../models/film';
import { Genre } from '../../models/genre';
import { Actor } from '../../models/actor';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {
  film?: Film | undefined;
  genres: Genre[] = [];
  actors: Actor[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService,
    private genreService: GenreService,
    private location: Location,
    private actorService: ActorService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getGenres();
    this.getActors();
    this.getFilm();
  }

  getFilm(): void {
    // Prendo il valore corrispondente al segnaposto id dall'url
    let id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    id = isNaN(id) ? 0 : id;

    // Filtro il film con il metodo find
    this.filmService.getFilms().subscribe(films => {
      this.film = films.find(x => x.id == id);
      this.genres.forEach((genreA) => this.film?.genres.forEach((genreB) => {
        if (genreA.id === genreB.id) {
          genreA.selected = true;
        }
      }));
      this.actors.forEach((actorA) => this.film?.actors.forEach((actorB) => {
        if (actorA.id === actorB.id) {
          actorA.selected = true;
        }
      }));


    }
    );
  }

  getGenres(): void {
    this.genreService.getGenres().subscribe(genres => this.genres = genres);
  }

  getActors(): void {
    this.actorService.getActors().subscribe(actors => this.actors = actors);
  }

  

  edit() {
    let url="/filmd/"+this.film!.id;
    


    this.film!.actors=this.actors.filter(x => x.selected);
    this.film!.genres=this.genres.filter(x => x.selected);
    
    this.filmService.editFilm(this.film!).subscribe(response => {
        if (response.success && response.success==true) {
          this.router.navigate([url]);    
          }
    
    
    });

  }



}
