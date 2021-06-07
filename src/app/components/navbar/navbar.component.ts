import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Film } from '../../models/film';
import { Observable, of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    public userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {


  }

  logout() {
		this.userService.logout();
    this.router.navigate(['/login']);
  }

}
