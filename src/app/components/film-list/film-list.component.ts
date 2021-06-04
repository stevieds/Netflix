import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { FilmService } from 'src/app/services/film.service';
import { LocalStorageService } from 'ngx-localstorage';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Film[] = [];



  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private filmService: FilmService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    //this.checkLogin();
    this.getFilms();
  }

  getFilms():void{
    this.filmService.getFilms().subscribe(films => this.films = films);
  };
 



  

}
