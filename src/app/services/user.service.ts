import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    
    constructor(private http: HttpClient) { }

    getUser() {
        let options = {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).access_token}`
            }
        }

        return this.http.get('https://backend.smokoff.me/api/auth/me', options)
        .subscribe(data => {console.log(data)});
    }
}