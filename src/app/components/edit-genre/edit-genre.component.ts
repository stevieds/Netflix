import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from 'src/app/services/film.service';
import { GenreService } from 'src/app/services/genre.service';
import { ActorService } from 'src/app/services/actor.service';
import { Film } from '../../models/film';
import { Genre } from '../../models/genre';
import { Actor } from '../../models/actor';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {
  genre?: Genre | undefined;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private genreService: GenreService,
    private location: Location,
    private actorService: ActorService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getGenre();
  }

  getGenre():void {
    let id = +(this.route.snapshot.paramMap.get('id')|| 0);
    id = isNaN(id) ? 0 : id;
    this.genreService.getGenres().subscribe(genres => {this.genre = genres.find(x => x.id == id)});
}

editGenre () {
  let url="/genred/" + this.genre!.id;
  this.genreService.editGenre(this.genre!).subscribe(response => {
    if (response && response.success==true) {
      this.router.navigate([url]);    
      }
  });
}

}
