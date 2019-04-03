import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:User;
  constructor(private titleService: Title, private userService: UserService) { }

  ngOnInit() {
    this.titleService.setTitle('Smokoff | Profile');  // set title page
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
