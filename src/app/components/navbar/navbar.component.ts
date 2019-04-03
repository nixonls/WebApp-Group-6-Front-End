import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	user:User;
	logged_in:User;
	constructor(
		private authenticationService: AuthenticationService,
		private router: Router,
		private userService: UserService
		) {
			this.authenticationService.currentUser.subscribe(res =>{
				this.logged_in = res;	
			});
		}

	ngOnInit() {
		this.userService.getUser().subscribe(user => {
			this.user = user;
		});
}

	logout(){
		this.authenticationService.logout();
		this.router.navigate(['../']);
	 }
}
