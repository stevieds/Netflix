import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, max, take } from 'rxjs/operators';
import { Genre } from '../models/genre';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private genresUrl = 'https://netflix.cristiancarrino.com/genre/read.php';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient,
    private userService: UserService) { 
   }

   getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genresUrl);
   }


   addGenre(genre: Genre) {
    return this.http.post<any>('https://netflix.cristiancarrino.com/genre/create.php', genre, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.userService.loggedUser ? this.userService.loggedUser.token : ''
      })
    }).pipe(tap(response => {
      if (response.success && response.success == true) {
        alert(response.message);
      }
    }),
    catchError(error => {alert(error.error);
    return of(null);
  })
    );
  }

  editGenre (genre: Genre) {
    return this.http.post<any>('https://netflix.cristiancarrino.com/genre/update.php', genre, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.userService.loggedUser ? this.userService.loggedUser.token : ''
      })
    }).pipe(tap(response => {
      if (response && response.success && response.success == true) {
        alert(response.message);
      }
    }),
    catchError(error => {alert(error.error);
    return of(null);
  })
    );;
  }


  }