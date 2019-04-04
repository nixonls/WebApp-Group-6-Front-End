import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  error = '';

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder, 
    private http:HttpClient,
    private router:Router 
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Smokoff | Register');  // set title page

    // build forms
    this.registerForm = this.formBuilder.group({
			first_name: ['', Validators.required],
			last_name: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', Validators.required],
			password: ['', Validators.required],
			gender: ['', Validators.required]
    });
    
  }

  get f() {
		return this.registerForm.controls;
  }
  
  onSubmit(){
		// stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
		}
    
    this.sendRegForm(
      this.f.first_name.value,
      this.f.last_name.value,
      this.f.email.value,
      this.f.password.value,
      this.f.birthday.value,
      this.f.gender.value)
		.subscribe(
			data => {
				this.router.navigate(['/auth/login']); // after submit navigate to this url
				
			},
			  
      // if error
      error => {
        this.error = error;
        console.log(this.error);
      }
    );
  }
  
  sendRegForm(fname:string, lname:string, email:string, password:string, birthday:Date, gender:string){
		// set token to headers
		// set body
		let body = {
			'first_name': fname,
			'last_name': lname,
			'email': email,
			'password': password,
      'birthday': birthday,
      'gender': gender 
		}

		let apiUrl = 'https://backend.smokoff.me/api/register';
		// return API response from userplan
		return this.http.post<any>(apiUrl, body)
		.pipe(map(r => {return r}));
	}
}
