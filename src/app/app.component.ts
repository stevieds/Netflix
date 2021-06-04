import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Netflix';

  constructor(
    private localStorage: LocalStorageService,
    private router: Router) { 
  }

  ngOnInit(): void {

    let user = this.localStorage.get('loggedUser');
    if (user !== null) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }

  }

}
