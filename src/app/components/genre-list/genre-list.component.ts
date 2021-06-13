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
  alphabet: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z"]

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
    this.genreService.getGenres().subscribe(genres =>
      {
        this.genres = genres;
        this.genres.sort((a, b) => a.name < b.name ? -1 : 1)
      }
      
      );
  };


}