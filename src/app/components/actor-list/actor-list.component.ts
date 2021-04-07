import { Component, OnInit } from '@angular/core';
import { Actor } from '../../models/actor';
// Importo l'interfaccia con le variabili proprietà
import { ActorService } from 'src/app/services/actor.service';
// Importo il service che andrà a pescare il JSON di attori dall'API

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors: Actor[] = [];
  // Unica proprietà del componente che verrà poi popolata tramite la funzione apposita getActor

  constructor(
    // Questa proprietà nel costruttore serve a far funzionare il service.
    private actorService: ActorService
  ) { }

  ngOnInit(): void {
    // Tutte le volte che il componente è inizializzato eseguirà questa funzione
    this.getActors();
  }

  getActors():void{
    this.actorService.getActors().subscribe(actors => this.actors = actors);
  };

}
