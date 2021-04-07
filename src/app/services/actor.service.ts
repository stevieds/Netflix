import { Injectable } from '@angular/core';
// Per fare in modo che actor.serice possa iniettare correttamente (ovvero essere utilizzato ovunque)
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Per utilizzare il metodo HTTP per le chiamate
import { Observable, of } from 'rxjs';
// Per sta roba Observable 
import { Actor } from '../models/actor';
// La struttura dell'interfaccia

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

  constructor(private http: HttpClient)
  // Per far funzionare httpClient
   { }

   getActors(): Observable<Actor[]> {
     // Restituisce un array Observable
    return this.http.get<Actor[]>(this.actorUrl);
    // Facendo utilizzando la funzione get di http, passandogli come parametro l'url
   }
}
