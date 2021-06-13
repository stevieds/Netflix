import { Component, OnInit } from '@angular/core';
import { Actor } from '../../models/actor';
// Importo l'interfaccia con le variabili proprietà
import { ActorService } from 'src/app/services/actor.service';
// Importo il service che andrà a pescare il JSON di attori dall'API

import { LocalStorageService } from 'ngx-localstorage';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors: Actor[] = [];
  alphabet: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z"]

  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    // Questa proprietà nel costruttore serve a far funzionare il service.
    private actorService: ActorService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // Tutte le volte che il componente è inizializzato eseguirà questa funzione
    this.getActors();
  }



  getActors():void{
    this.actorService.getActors().subscribe(actors => 
      {this.actors = actors;
      this.actors.sort((a, b) => a.lastname < b.lastname ? -1 : 1)
    });
    
  };

}

