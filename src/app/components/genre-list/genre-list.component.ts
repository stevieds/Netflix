import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genre';
import { GenreService } from 'src/app/services/genre.service';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'ngx-localstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  genres: Genre[] = [];

  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private genreService: GenreService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getGenres();

  }



  getGenres():void{
    this.genreService.getGenres().subscribe(genres => this.genres = genres);
  };


}