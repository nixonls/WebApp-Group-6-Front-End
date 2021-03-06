import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>('https://backend.smokoff.me/api/auth/login', { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // // remove user
        // localStorage.removeItem('currentUser');
        // this.currentUserSubject.next(null);

        // set token to headers
        let options = {
            headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).access_token}`
            }
        }

        // remove user from local storage to log user out
        return this.http.post<any>('https://backend.smokoff.me/api/auth/logout', null, options)
        .pipe(map(res => {
            console.log(res);
            if (res && localStorage.getItem('currentUser')) {
                localStorage.removeItem('currentUser');
                this.currentUserSubject.next(null);
            }

            return res;
        }));
    }
}