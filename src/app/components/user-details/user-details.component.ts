import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user?: User | null;
  faEdit = faEdit;
  favourites? : number[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private messagesService: MessagesService
    
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
    ///this.favourites = this.user?.favorite_films.split(",").map(Number);
    //this.editFav();
    /*
    console.log(this.user);
    this.messagesService.currentFilm.subscribe(
      message =>
        { console.log(message);
          this.favourite = message;
          //this.user!.favorite_films.push(this.favourite);
          
      }
      
      )
      */

  }

  getUserDetails (): void {
    this.user = this.userService.loggedUser;

    //this.userService.getFav().subscribe(films => this.user!.favourite_films = films);
  }


}
