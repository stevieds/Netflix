import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, max, take } from 'rxjs/operators';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private genresUrl = 'https://netflix.cristiancarrino.com/genre/read.php';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient) { 
   }

   getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genresUrl);
   }
  }