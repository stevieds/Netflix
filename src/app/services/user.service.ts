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

    constructor(
      private http: HttpClient,
      private localStorage: LocalStorageService) { 
    }
 
    login (username: string, password: string, rememberMe:boolean): Observable<User | null> {
      return this.http.post<User | null>(this.loginUrl, {username: username, password: password, rememberMe: rememberMe}, this.httpOptions).pipe(tap(response => {
        console.log('login', response);
        this.loggedUser = response;
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
    }

    getLoggedUser(): User | null {
      this.loggedUser = this.localStorage.get('loggedUser');
      return this.loggedUser;
    }
}