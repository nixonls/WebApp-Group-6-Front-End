import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<User[]>('https://backend.smokoff.me/api/auth/me', { "Authorization": "" , password });
    }
}