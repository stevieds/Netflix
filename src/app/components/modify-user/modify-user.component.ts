import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { Actor } from 'src/app/models/actor';
import { Genre } from 'src/app/models/genre';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';
import { ActorService } from 'src/app/services/actor.service';
import { GenreService } from 'src/app/services/genre.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {
  user?: User | null;
  genres: Genre[] = [];
  actors: Actor[] = [];
  films: Film[] = [];
  faEdit = faEdit;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private filmService: FilmService,
    private actorService: ActorService,
    private genreService: GenreService) { }

  ngOnInit(): void {
    this.getUserDetails();
    this.getGenres();
    this.getFilms();
    this.getActors();
  }

  getUserDetails (): void {
    this.user = this.userService.loggedUser;

    this.genres.forEach((genreA) => this.user?.favorite_genres.forEach((genreB) => {
      if (genreA.id === genreB) {
        genreA.selected = true;
      }
    }));
    this.actors.forEach((actorA) => this.user?.favorite_actors.forEach((actorB) => {
      if (actorA.id === actorB) {
        actorA.selected = true;
      }
    }));
    

    

    
  }

  getGenres(): void {
    this.genreService.getGenres().subscribe(genres => this.genres = genres);
  }

  getActors(): void {
    this.actorService.getActors().subscribe(actors => this.actors = actors);
  }

  getFilms(): void {
    this.filmService.getFilms().subscribe(films => this.films = films);
  }


  edit() {
    let url="/user-details/";


    
    this.userService.editUser(this.user!).subscribe(response => {
      if (response !== null) {
        this.user = this.userService.loggedUser;

        this.router.navigate([url]);
    
    
          }
    
    
    });
  }

  favFilms() {
    let url="/user-details/";
    this.user!.favorite_actors=this.actors.filter(x => x.selected).map(actor => actor.id);
    this.userService.editUser(this.user!).subscribe(response => {
      if (response !== null) {
        this.router.navigate([url]);
    
    
          }
    
    
    });

  }



}
