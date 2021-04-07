import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from 'src/app/services/film.service';
import { Film } from '../../models/film';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film?: Film | undefined;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFilm();
  }

  getFilm(): void {
    // Prendo il valore corrispondente al segnaposto id dall'url
    let id = +(this.route.snapshot.paramMap.get('id')?? 0);
    id = isNaN(id) ? 0 : id;

    // Filtro il film con il metodo find
    this.filmService.getFilms().subscribe(films => {this.film = films.find(x => x.id == id)});
}

}
