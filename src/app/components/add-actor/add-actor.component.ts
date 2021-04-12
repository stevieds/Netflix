import { Component, OnInit } from '@angular/core';
import { Actor } from '../../models/actor';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {
  firstname: string ="";
  lastname: string ="";
  birthdate: Date = new Date;

  constructor() { }

  ngOnInit(): void {
  }

}
