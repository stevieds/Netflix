import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, max, take, filter } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';



import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private filmsUrl = 'https://netflix.cristiancarrino.com/film/read.php';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient,
    private userService: UserService) { 
   }

   getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsUrl);
  }

  addFilm (film: Film) {
    return this.http.post<Film>('https://netflix.cristiancarrino.com/film/create.php', film, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.userService.loggedUser ? this.userService.loggedUser.token : ''
      })
    });
  }

}









  






   

