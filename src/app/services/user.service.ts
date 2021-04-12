import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl = 'https://netflix.cristiancarrino.com/user/login.php';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' },)};
  	loggedUser: any | null = null;

    constructor(private http: HttpClient) { 
    }
 
    login (username: string, password: string, rememberMe:boolean): Observable<any> {
      return this.http.post(this.loginUrl, {username: username, password: password, rememberMe: rememberMe}, this.httpOptions).pipe(tap(response => {
        console.log('login', response);
        this.loggedUser = response;
      }),
      catchError(error => {console.log(error);
      this.loggedUser = null;
      return of(null);
    })
      )
    }
}