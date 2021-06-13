import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from 'src/app/services/film.service';
import { Film } from '../../models/film';
import { User } from '../../models/user';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faSHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { MessagesService } from 'src/app/services/messages.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar2 } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';





@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  faEdit = faEdit;
  emptyHeart = faHeart;
  fullHeart = faSHeart;
  tags?: string[]  | undefined;
  film?: Film;
  favourite: boolean = false;
  favourites: number[] = [];
  @Output() fav = new EventEmitter<number>();
  fullStarIcon = faStar;
  emptyStarIcon = faStar2;
  halfStarIcon = faStarHalfAlt;
  fullStar: number = 0;
  emptyStar: number = 0;
  halfStar: number = 0;
  bin = faTrashAlt;



  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location,
    private userService: UserService,
    private messagesService: MessagesService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.getFilm();
    
  }



  getFilm(): void {
    // Prendo il valore corrispondente al segnaposto id dall'url
    let id = +(this.route.snapshot.paramMap.get('id')?? 0);
    id = isNaN(id) ? 0 : id;

    this.favourites = this.userService.getFav();

    // Filtro il film con il metodo find
    this.filmService.getFilms().subscribe(films => {
      this.film = films.find(x => x.id == id);
      console.log(this.film);
      this.film!.stars = this.film!.vote;

      if (this.film!.stars % 0.5 == 0) {
        this.halfStar = 1;
      }
      this.emptyStar = Math.ceil(5-this.film!.stars) - this.halfStar;
      this.fullStar = Math.ceil(this.film!.stars) - this.halfStar;

      if (this.favourites.find(x => x==this.film!.id) == this.film!.id) {
        this.favourite = true;
      };

      if (this.film!.tags) {
      this.tags = this.film!.tags.split("; ")
    }
    });
    

    // Popolo tags
    
}







toggleFav() {
  this.favourite = !this.favourite;
  this.userService.editFavFilms(this.film!.id, this.favourite).subscribe();
}

deleteFilm() {
  let url="/films";

  if(confirm('Eliminare "'+ this.film!.title +'" dal database?') == true) {
    this.filmService.deleteFilm(this.film!).subscribe(response => {
      if (response && response.success==true) {
        this.router.navigate([url]);    
        }
  
  
  });

  }


}




}
