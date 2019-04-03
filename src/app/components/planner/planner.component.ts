import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UserPlan } from 'src/app/models/userplan';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  user:User;
  userplans:UserPlan[];
  plan:Plan[];
  constructor(private titleService: Title, private userService: UserService, private planService: PlanService) { }

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
}
