import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  name:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
