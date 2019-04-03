import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { UserPlan } from '../models/userplan';
import { map } from 'rxjs/operators'
import { Plan } from '../models/plan';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  user:User;
  userplan:UserPlan[];
  plan:Plan[];

  constructor(private http:HttpClient, private userService:UserService) { 
    this.userService.getUser().subscribe(user => {    // get user
      this.user = user;
    }); 
   }
  getUserPlans() {
    // set token to headers
    let options = {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).access_token}`
        }
    }
    
    let apiUrl = 'https://backend.smokoff.me/api/userplan/'+ this.user.id;
    // return API response from userplan
    return this.http.get<UserPlan[]>(apiUrl, options).pipe(map(r => {return r}));
  }

  getPlans() {
    // set token to headers
    let headers = {
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).access_token}`
      }
    }
    // apiURL for Plan Type Table
    let apiUrl = 'https://backend.smokoff.me/api/plan/';
    // return API response from userplan
    return this.http.get<Plan[]>(apiUrl, headers).pipe(map(r => {return r}));
  }
}
