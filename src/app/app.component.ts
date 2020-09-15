import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-login-firebase';
  constructor(private auth: AuthService) {
    auth.getUser().subscribe(
      () => {

      },
      (err) => {
        console.log(err);
      }
    );
  }
}
