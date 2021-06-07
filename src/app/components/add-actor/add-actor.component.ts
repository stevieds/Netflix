import { Component, OnInit } from '@angular/core';
import { Actor } from '../../models/actor';
import { ActorService } from 'src/app/services/actor.service';
import { UserService } from 'src/app/services/user.service';

import { LocalStorageService } from 'ngx-localstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {
  actor : Actor = 
  {
    id: 0,
    firstname: "" ,
    lastname: "" ,
    birthdate: new Date (),
    created_by: 0,
    selected:false,
    films: [] 
  }

  constructor(private actorService: ActorService,
    private localStorage: LocalStorageService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {

  }

  addActor() {
    let urlList="/actors/";
    this.actorService.addActor(this.actor).subscribe(response => {
      if (response.success && response.success==true) {
        this.router.navigate([urlList]);
      } 
    }
      );
  }


}
