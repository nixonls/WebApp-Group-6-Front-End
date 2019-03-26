import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-smoker-ui',
  templateUrl: './smoker-ui.component.html',
  styleUrls: ['./smoker-ui.component.scss']
})
export class SmokerUiComponent implements OnInit {
  users: User[] = [];
  
  constructor(private userService: UserService, private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle('Smokoff | Dashboard');
    this.userService.get().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

}
