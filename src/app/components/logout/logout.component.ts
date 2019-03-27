import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, 
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.logout();
  }

  logout(){
    this.router.navigate(['../']);
    this.authenticationService.logout();
   } 
}
