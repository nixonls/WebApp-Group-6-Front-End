import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UserPlan } from 'src/app/models/userplan';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  user:User;
  userplans:UserPlan[];
  plan:Plan[];
  success = false;
  error = '';
  constructor(
    private titleService: Title,
    private userService: UserService,
    private planService: PlanService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Smokoff | Planner');  // set title page
    this.userService.getUser().subscribe(user => {    // get user
      this.user = user;
      this.planService.getUserPlans().subscribe(userplan =>{  // get userplan
        this.userplans = userplan;
      });
    }); 
    
    this.planService.getPlans().subscribe(plan => {
      this.plan = plan;
    });
  }

  deleteUserPlan(userplanId: number) {
    let options = {
			headers: {
				'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).access_token}`
			}
    }
    
    let apiUrl = 'https://backend.smokoff.me/api/userplan/' + userplanId;

    return this.http.delete<any>(apiUrl, options)
		.pipe(map(r => {return r})).subscribe(
      data => {
        this.success = true;
        setTimeout(()=>this.success = false, 5000);
      },
      // if error
		  	error => {
        this.error = error;
        // console.log(this.error);
      });
    
  }
}
