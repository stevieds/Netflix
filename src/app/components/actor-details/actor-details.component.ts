import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from '../../models/actor';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {
  actor?: Actor | undefined;

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getActors();
  }

  getActors():void {
        // Prendo il valore corrispondente al segnaposto id dall'url
        let id = +(this.route.snapshot.paramMap.get('id')?? 0);
        id = isNaN(id) ? 0 : id;
    
        // Filtro il film con il metodo find
        this.actorService.getActors().subscribe(actors => {this.actor = actors.find(x => x.id == id)});
  }

}
