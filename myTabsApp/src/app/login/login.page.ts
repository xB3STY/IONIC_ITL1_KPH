import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Toast } from '@capacitor/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: false
})
export class LoginPage {
  username = '';
  password = '';
  message = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    // try login with entered username and password
    this.auth.login(this.username, this.password).subscribe(async (res: any) => {
      console.log('Login response:', res);

      // if login is valid, store data and go to app
      if (res.success) {
        this.auth.saveToken(res.token);
        this.auth.saveUser(res.user);

        this.message = 'Login successful';

        await Toast.show({
          text: 'Login successful'
        });

        this.router.navigateByUrl('/tabs/tab1');
      } else {
        // show error if login failed
        this.message = 'Login failed';

        await Toast.show({
          text: 'Login failed'
        });
      }
    });
  }
}
