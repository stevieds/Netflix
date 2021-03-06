import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Film } from '../models/film';
import { catchError, tap } from 'rxjs/operators';

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
     let responses = this.http.get<any[]>(this.filmsUrl).pipe(tap(response => {
       response.forEach(f => {
         f.id = parseInt(f.id);
         f.created_by = parseInt(f.created_by);
         f.vote = parseFloat(f.vote);
       })
     }));
      return responses;
  }

  addFilm (film: Film) {
    return this.http.post<any>('https://netflix.cristiancarrino.com/film/create.php', film, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.userService.loggedUser ? this.userService.loggedUser.token : ''
      })
    }).pipe(tap(response => {
      if (response && response.success == true) {
        alert(response.message);
      }
    }),
    catchError(error => {alert(error.error);
    return of(null);
  })
    );
  }

  editFilm (film: Film):Observable<any> {
    return this.http.post<any>('https://netflix.cristiancarrino.com/film/update.php', film, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.userService.loggedUser ? this.userService.loggedUser.token : ''
      })
    }).pipe(tap(response => {
      if (response && response.success == true) {
        alert(response.message);
      }
    }),
    catchError(error => {alert(error.error);
    return of(null);
  })
    )
    
    ;
  }

  deleteFilm (film: Film):Observable<any> {
    return this.http.post<any>('https://netflix.cristiancarrino.com/film/delete.php', film, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.userService.loggedUser ? this.userService.loggedUser.token : ''
      })
    }).pipe(tap(response => {
      if (response && response.success == true) {
        alert(response.message);
      }
    }),
    catchError(error => {alert(error.error);
    return of(null);
  })
    )
    
    ;
  }



}









  






   

