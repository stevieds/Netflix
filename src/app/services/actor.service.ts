import { Injectable } from '@angular/core';
// Per fare in modo che actor.serice possa iniettare correttamente (ovvero essere utilizzato ovunque)
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Per utilizzare il metodo HTTP per le chiamate
import { Observable, of } from 'rxjs';
// Per sta roba Observable 
import { Actor } from '../models/actor';
// La struttura dell'interfaccia

import { catchError, map, tap, max, take, filter } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
  // Sigifica che questo servizio è fornito root-wide
})
export class ActorService {
  private actorUrl = 'https://netflix.cristiancarrino.com/actor/read.php';
  // L'url da dove andare a prendere la roba
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    // per specificare l'header della richiesta

  constructor(private http: HttpClient,
    private userService: UserService)
  // Per far funzionare httpClient
   { }

   getActors(): Observable<Actor[]> {
     // Restituisce un array Observable
    return this.http.get<Actor[]>(this.actorUrl);
    // Facendo utilizzando la funzione get di http, passandogli come parametro l'url
   }

   addActor(actor: Actor) {
    return this.http.post<Actor>('https://netflix.cristiancarrino.com/actor/create.php', actor, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.userService.loggedUser ? this.userService.loggedUser.token : ''
      })
    });
  }

  editActor (actor: Actor) {
    return this.http.post<Actor>('https://netflix.cristiancarrino.com/actor/update.php', actor, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.userService.loggedUser ? this.userService.loggedUser.token : ''
      })
    });
  }

}
