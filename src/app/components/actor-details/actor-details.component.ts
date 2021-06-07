  
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from '../../models/actor';
import { FilmService } from 'src/app/services/film.service';
import { Film } from '../../models/film';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faSHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {
  faEdit = faEdit;
  actor?: Actor | undefined;
  favourite: boolean = false;
  favourites: number[] = [];
  emptyHeart = faHeart;
  fullHeart = faSHeart;
  films: Film[] = [];

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService,
    private location: Location,
    private filmService: FilmService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getActors();
    this.getFilms();
  }

  getActors():void {
        let id = +(this.route.snapshot.paramMap.get('id')|| 0);
        id = isNaN(id) ? 0 : id;
        this.actorService.getActors().subscribe(actors => {this.actor = actors.find(x => x.id == id)});
  }



  getFilms():void{
    let id = +(this.route.snapshot.paramMap.get('id') || 0);
    id = isNaN(id) ? 0 : id;
    this.filmService.getFilms().subscribe(
      films => {
      this.films=films.filter(film => film.actors.map(actor => ''+actor.id).indexOf(''+id)>-1);
    });
  };

  toggleFav() {
    this.favourite = !this.favourite;
    this.userService.editFavActors(this.actor!.id, this.favourite).subscribe();
  }

}