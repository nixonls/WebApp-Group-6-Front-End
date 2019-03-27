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
  user:any;
  constructor(private userService: UserService, private titleService: Title){
    // user:any  = this.userService.getUser();
  }
  ngOnInit() {
    this.titleService.setTitle('Smokoff | Dashboard');
    this.user = JSON.parse(JSON.stringify(this.userService.getUser()));
    console.log(this.user);
  }
}
