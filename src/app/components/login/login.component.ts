import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import {   CanActivate, Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanActivateChild,
	UrlTree } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

@Injectable({
	providedIn: 'root',
  })

export class LoginComponent implements OnInit, CanActivate {
	userId: number=0;
	username: string = '';
	password: string = '';
	rememberMe: boolean = false;
	constructor(
		public userService: UserService,
		private router: Router
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): true|UrlTree {
		const url: string = state.url;
	
		return this.checkLogin(url);
	  }

	  checkLogin(url: string): true|UrlTree {
		if (this.userService.loggedIn || this.userService.getLoggedUser() ) { 
			return true; }
		else {     
			return this.router.createUrlTree(['/login']);
	}

	  }

	ngOnInit(): void {
		this.userService.getLoggedUser();

	}



	login() {
    this.userService.login(this.username, this.password, this.rememberMe).subscribe(response => {
      if (response !== null) {
		this.router.navigate(['/dashboard']);


      } else {
        alert("Login NON riuscito!");
      }
    }
    );

	}



	logout() {
		this.userService.logout();
  }

}