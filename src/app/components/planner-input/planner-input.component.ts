import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';


@Component({
	selector: 'app-planner-input',
	templateUrl: './planner-input.component.html',
	styleUrls: ['./planner-input.component.scss']
})
export class PlannerInputComponent implements OnInit {
	plannerForm: FormGroup;
	user: User;
	plan: Plan[];
	planNotification: number;
	error = '';
	success = false;

	constructor(
		private formBuilder: FormBuilder, 
		private http:HttpClient, 
		private userService:UserService,
		private router: Router,
		private planService:PlanService
	) { }

	ngOnInit() {
		// build forms
		this.plannerForm = this.formBuilder.group({
			planTypeRadio: ['', Validators.required],
			planDate: ['', Validators.required],
			planNotification: ['']
		});

		// get user
		this.userService.getUser().subscribe(res =>{
			this.user = res;
		})

		// get plan
		this.planService.getPlans().subscribe(res =>{
			this.plan = res;
		})
	}

	get f() {
		return this.plannerForm.controls;
	}
	onSubmit(){
		// stop here if form is invalid
        if (this.plannerForm.invalid) {
            return;
		}
		// convert bool to number
		if(this.f.planNotification.value == true){
			this.planNotification = 1;
		} else this.planNotification = 0;

		this.sendForm(this.f.planTypeRadio.value, this.f.planDate.value, this.planNotification)
		.subscribe(
			data => {
				this.router.navigate(['/dashboard/planner']); // after submit navigate to this url
				this.success = true;
				setTimeout(()=>this.success = false, 10000);
			},
			  
		  	// if error
		  	error => {
				this.error = error;
			  	console.log(this.error);
		  	});
	}

	sendForm(type: string, date: Date, notification: number){
		// set token to headers
		let options = {
			headers: {
				'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).access_token}`
			}
		}
		// set body
		let body = {
			'user_id': this.user.id,
			'plan_id': parseInt(type),
			'status': 'ongoing',
			'date': date,
			'notif_status': notification
		}

		let apiUrl = 'https://backend.smokoff.me/api/userplan';
		// return API response from userplan
		return this.http.post<any>(apiUrl, body, options)
		.pipe(map(r => {return r}));
	}
}
