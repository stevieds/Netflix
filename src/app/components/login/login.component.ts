import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



	title = 'Netflix';
	hideLogin: boolean = true;
	menuIsOpen: boolean = false;

	username: string = '';
	password: string = '';
	rememberMe: boolean = false;

	constructor(
		public userService: UserService
	) { }

	ngOnInit(): void {
		//this.userService.getLoggedUser();
	}



	login() {
    this.userService.login(this.username, this.password, this.rememberMe).subscribe(response => {
      if (response !== null) {
        
        // OK
      } else {
        alert("Login NON riuscito!");
      }
    }
    );

	}

/*	logout() {
		this.userService.logout();
		this.hideLogin = true;
  }
  */
}