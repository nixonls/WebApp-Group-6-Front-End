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
  constructor(private authenticationService: AuthenticationService, private router: Router, private userService: UserService) {}

  ngOnInit() {
    // subscribe to function and set arrays to the models
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  logout(){
    this.router.navigate(['../']);
    this.authenticationService.logout();
   } 
}
