  
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from '../../models/actor';
import { FilmService } from 'src/app/services/film.service';
import { Film } from '../../models/film';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {
  actor?: Actor | undefined;
  films: Film[] = [];

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService,
    private location: Location,
    private filmService: FilmService,
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

}