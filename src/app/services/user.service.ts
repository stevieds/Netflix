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
  loggedUser: User | null = null;
  loggedIn : boolean = false;
  loggedId : number | undefined;

  constructor(
      private http: HttpClient,
      private localStorage: LocalStorageService) { 
    }
 
    login (username: string, password: string, rememberMe:boolean): Observable<User | null> {
      return this.http.post<User | null>(this.loginUrl, {username: username, password: password, rememberMe: rememberMe}, this.httpOptions).pipe(tap(response => {
        
        
this.loggedUser = response;
        if (response!.favorite_films) {
          this.loggedUser!.favorite_films=response!.favorite_films.toString().split(",").map(x=> parseInt(x)).filter(x => Number.isInteger(x));
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
      
      return this.loggedUser;
    }

    editUser (user: User):Observable<User | null> {
      return this.http.post<User>('https://netflix.cristiancarrino.com/user/edit.php', user, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.loggedUser ? this.loggedUser.token : ''
        })
      }).pipe(tap(response => {
        console.log(response);
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

    editFavFilms(filmId: number ):Observable<any> {
      if (this.loggedUser!.favorite_films != null) {
        this.loggedUser!.favorite_films.push(filmId);
      } else {
        this.loggedUser!.favorite_films = [];
        this.loggedUser!.favorite_films.push(filmId);
      }
      let favourites = {"ids": this.loggedUser?.favorite_films.toString()};



      
      


      return this.http.post<any>('https://netflix.cristiancarrino.com/user/favorite-films.php', favourites, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.loggedUser ? this.loggedUser.token : ''
        })
      }).pipe(tap(response => {
        console.log(response);
      }),
      catchError(error => {alert(error.error);
      return of(null);
    })
      )
      
      ;
    }


    getFav(): Observable<number[]> {
      return this.http.get<number[]>('https://netflix.cristiancarrino.com/user/favorite-films.php', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.loggedUser ? this.loggedUser.token : ''
        })
      });
    }
  









}