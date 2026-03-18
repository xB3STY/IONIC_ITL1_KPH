import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Preferences } from '@capacitor/preferences';

const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API = 'http://localhost:8101';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${this.API}/login`, {
      username,
      password
    });
  }

  async saveToken(token: string) {
    await Preferences.set({
      key: TOKEN_KEY,
      value: token
    });
  }
}
