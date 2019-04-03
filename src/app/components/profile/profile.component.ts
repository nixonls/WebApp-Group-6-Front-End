import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:User;
  profileForm: FormGroup;
  success = false;
  error = '';

  constructor(
    private titleService: Title,
    private userService: UserService,
    private formBuilder: FormBuilder, 
    private http:HttpClient
    ) { }

  ngOnInit() {
    this.titleService.setTitle('Smokoff | Profile');  // set title page
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });

    // build forms
		this.profileForm = this.formBuilder.group({
			email: ['', Validators.required],
			fname: ['', Validators.required],
      lname: [''],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  get f() {
		return this.profileForm.controls;
	}
	onSubmit(){
		// stop here if form is invalid
        if (this.profileForm.invalid) {
            return;
		}

		this.sendProfileForm(this.f.planTypeRadio.value, this.f.planDate.value, this.f.planNotification.value)
		.subscribe(
			data => {
				this.success = true;
				setTimeout(()=>this.success = false, 10000);
			},
			  
		  	// if error
		  	error => {
				this.error = error;
			  	console.log(this.error);
		  	});
	}

	sendProfileForm(type: string, date: Date, notification: number){
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

		let apiUrl = 'https://backend.smokoff.me/api/user/' + 'this.user.id';
		// return API response from userplan
		return this.http.post<any>(apiUrl, body, options)
		.pipe(map(r => {return r}));
	}

}
