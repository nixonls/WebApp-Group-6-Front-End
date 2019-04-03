import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    // get user function
    getUser() {
        // set token to headers
        let options = {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).access_token}`
            }
        }
        
        // get method to get user info
        return this.http.get<User>('https://backend.smokoff.me/api/auth/me', options)
        .pipe(map(r => {return r}));
    }
}