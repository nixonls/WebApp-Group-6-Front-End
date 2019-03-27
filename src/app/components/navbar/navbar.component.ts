import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) {}
// private user:string
  ngOnInit() {
    this.userService.getUser();
  }
}
