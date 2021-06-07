import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { Router } from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Netflix';
  user? : User;

  constructor(
    private localStorage: LocalStorageService,
    private router: Router) { 
  }

  ngOnInit(): void {

    this.user = this.localStorage.get('loggedUser');
    if (this.user !== null) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }

  }

}
