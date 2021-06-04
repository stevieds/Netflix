import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genre';
import { GenreService } from 'src/app/services/genre.service';



@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  

  genre : Genre = 
  {
    id: 0,
    name: "",
    created_by: 0,
    selected: false,
    films: []
};

  constructor(
    private genreService: GenreService
  ) { }

  ngOnInit(): void {
  }

  addGenre() {
    this.genreService.addGenre(this.genre).subscribe(response => {console.log(response)});
  }

}
