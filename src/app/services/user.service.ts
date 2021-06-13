import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-localstorage';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl = 'https://netflix.cristiancarrino.com/user/login.php';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' },)};
  loggedUser?: User | null;
  loggedIn : boolean = false;
  loggedId : number | undefined;

  constructor(
      private http: HttpClient,
      private localStorage: LocalStorageService) { 
    }
 
    login (username: string, password: string, rememberMe:boolean): Observable<User | null> {
      return this.http.post<User | null>(this.loginUrl, {username: username, password: password, rememberMe: rememberMe}, this.httpOptions).pipe(tap(response => {
                
        this.loggedUser = response;
        this.loggedUser!.id = parseInt(response!.id!.toString());


        if (response!.favorite_films) {
          this.loggedUser!.favorite_films=response!.favorite_films.toString().split(",").map(x=> parseInt(x)).filter(x => Number.isInteger(x));
        } else {
            this.loggedUser!.favorite_films = [];
        }

        if (response!.favorite_actors) {
          this.loggedUser!.favorite_actors=response!.favorite_actors.toString().split(",").map(x=> parseInt(x)).filter(x => Number.isInteger(x));
        } else {
            this.loggedUser!.favorite_actors = [];
        }

        if (response!.favorite_genres) {
          this.loggedUser!.favorite_genres=response!.favorite_genres.toString().split(",").map(x=> parseInt(x)).filter(x => Number.isInteger(x));
        } else {
            this.loggedUser!.favorite_genres = [];
        }
        
      console.log('login', response);

      this.loggedIn = true;
        if (rememberMe) {
        this.localStorage.set('loggedUser', response);
      }
      }),
      catchError(error => {console.log(error);
      this.logout();
      return of(null);
    })
      )
    }

    logout () {
      this.loggedUser=null;
      this.localStorage.remove('loggedUser');
      this.loggedIn=false;
    }

    getLoggedUser(): User | null {
      this.loggedUser = this.localStorage.get('loggedUser');
      
      return this.loggedUser!;
    }

    editUser (user: User):Observable<User | null> {
      return this.http.post<User>('https://netflix.cristiancarrino.com/user/edit.php', user, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.loggedUser ? this.loggedUser.token : ''
        })
      }).pipe(tap(response => {
        alert("Utente modificato correttamente");
        this.loggedUser! = response;
        this.localStorage.set('loggedUser', response);
      }),
      catchError(error => {alert(error.error);
      return of(null);
    })
      )
      
      ;
    }


   // login (username: string, password: string, rememberMe:boolean): Observable<User | null> {
     // return this.http.post<User | null>(this.loginUrl, {username: username, password: password, rememberMe: 

    editFavFilms(filmId: number, check: boolean ):Observable<any> {
      if (check) {
        this.loggedUser!.favorite_films.push(filmId);
      } else {
        this.loggedUser!.favorite_films.splice(filmId);
      }
      let favourites = {"ids": this.loggedUser!.favorite_films.toString()};

      return this.http.post<any>('https://netflix.cristiancarrino.com/user/favorite-films.php', favourites, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.loggedUser ? this.loggedUser.token : ''
        })
      }).pipe(tap(response => {
        alert(response.message);
      }),
      catchError(error => {alert(error.error);
      return of(null);
    })
      )
      
      ;
    }


    editFavActors(actorId: number, check: boolean ):Observable<any> {
      if (check) {
        this.loggedUser!.favorite_actors.push(actorId);
      } else {
        this.loggedUser!.favorite_actors.splice(actorId);
      }
      let favourites = {"ids": this.loggedUser!.favorite_actors.toString()};

      return this.http.post<any>('https://netflix.cristiancarrino.com/user/favorite-actors.php', favourites, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.loggedUser ? this.loggedUser.token : ''
        })
      }).pipe(tap(response => {
       alert(response.message);
      }),
      catchError(error => {alert(error.error);
      return of(null);
    })
      )
      
      ;
    }

    editFavGenres(genreId: number, check: boolean ):Observable<any> {
      if (check) {
        this.loggedUser!.favorite_genres.push(genreId);
      } else {
        this.loggedUser!.favorite_genres.splice(genreId);
      }
      let favourites = {"ids": this.loggedUser!.favorite_genres.toString()};

      return this.http.post<any>('https://netflix.cristiancarrino.com/user/favorite-genres.php', favourites, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.loggedUser ? this.loggedUser.token : ''
        })
      }).pipe(tap(response => {
       alert(response.message);
      }),
      catchError(error => {alert(error.error);
      return of(null);
    })
      )
      
      ;
    }


    getFav(): number[] {
      return this.loggedUser!.favorite_films;
    }
  









}