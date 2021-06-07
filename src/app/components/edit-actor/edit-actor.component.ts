import { Component, OnInit } from '@angular/core';
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
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {
  actor?: Actor | undefined;
  films: Film[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService,
    private genreService: GenreService,
    private location: Location,
    private actorService: ActorService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getActor();
  }

  getActor():void {
    let id = +(this.route.snapshot.paramMap.get('id')|| 0);
    id = isNaN(id) ? 0 : id;
    this.actorService.getActors().subscribe(actors => {this.actor = actors.find(x => x.id == id)});
}

editActor () {
  let url="/actord/" + this.actor!.id;

  
  this.actorService.editActor(this.actor!).subscribe(response => {
    if (response && response.success && response.success==true) {
      this.router.navigate([url]);    
      }
  });
}

}
