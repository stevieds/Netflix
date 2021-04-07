import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, max, take, filter } from 'rxjs/operators';



import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private filmsUrl = 'https://netflix.cristiancarrino.com/film/read.php';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient) { 
   }

   getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsUrl);
  }
}









  






   

