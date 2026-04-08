import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: false
})
export class LoginPage {
  username = '';
  password = '';
  message = '';

  constructor(private auth: AuthService) {}

  login() {
    this.auth.login(this.username, this.password).subscribe(async (res: any) => {
      console.log('Login response:', res);

      if (res.success) {
        await this.auth.saveToken(res.token ?? 'dummy-token'); //added
        this.message = 'Login successful';

        await Toast.show({
          text: 'Login successful'
        });
      } else {
        this.message = 'Login failed';

        await Toast.show({
          text: 'Login failed'
        });
      }
    });
  }
}
