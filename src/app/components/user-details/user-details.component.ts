import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';
import { Film } from '../../models/film';
import { Genre } from '../../models/genre';
import { Actor } from '../../models/actor';
import { FilmService } from 'src/app/services/film.service';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ActorService } from 'src/app/services/actor.service';
import { GenreService } from 'src/app/services/genre.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user?: User | null = this.userService.loggedUser;
  faEdit = faEdit;
  faEye = faEye;
  faMinus = faMinusSquare;
  favourites? : number[];
  films?: Film[];
  genres?: Genre[];
  actors?: Actor[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private messagesService: MessagesService,
    private filmService: FilmService,
    private genreService: GenreService,
    private actorService: ActorService,
    private router: Router
    
  ) {

   }

  ngOnInit(): void {
    this.getFavourites();
  }

  getUserDetails (): void {
    this.user = this.userService.loggedUser;
  }

  getFavourites(): void {
    this.filmService.getFilms().subscribe(films => {
      this.films=films.filter(film => {
        return this.user?.favorite_films.find(id => film.id == id)
      })
    }
      );

      this.actorService.getActors().subscribe(actors => {
        this.actors=actors.filter(actor => {
          return this.user?.favorite_actors.find(id => actor.id == id)
        })
      }
        );

        this.genreService.getGenres().subscribe(genres => {
          this.genres=genres.filter(genre => {
            return this.user?.favorite_genres.find(id => genre.id == id)
          })
        }
          );

     

  }

  editFavFilm(film: Film) {
    this.userService.editFavFilms(film.id, false).subscribe(response => alert(response.message));
  }

  editFavActor(actor: Actor) {
    this.userService.editFavFilms(actor.id, false).subscribe(response => alert(response.message));
  }

  editFavGenre(genre: Genre) {
    this.userService.editFavFilms(genre.id, false).subscribe(response => alert(response.message));
  }

}
