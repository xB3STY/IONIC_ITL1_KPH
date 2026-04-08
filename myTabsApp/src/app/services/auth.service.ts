import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:8101';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    // send login data to backend
    return this.http.post(`${this.API_URL}/login`, {
      username,
      password
    });
  }

  saveToken(token: string) {
    // save token in local storage
    localStorage.setItem('token', token);
  }

  getToken() {
    // read token from local storage
    return localStorage.getItem('token');
  }

  saveUser(user: any) {
    // save user info for profile page
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    // load saved user info
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    // clear token and user on logout
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    // user is logged in if token exists
    return !!this.getToken();
  }
}
