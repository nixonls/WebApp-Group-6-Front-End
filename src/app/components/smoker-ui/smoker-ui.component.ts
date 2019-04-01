import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-smoker-ui',
  templateUrl: './smoker-ui.component.html',
  styleUrls: ['./smoker-ui.component.scss']
})
export class SmokerUiComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private titleService: Title){
  }

  ngOnInit() {
    this.titleService.setTitle('Smokoff | Dashboard');  // set title page
    
    // subscribe to function and set arrays to the models
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
