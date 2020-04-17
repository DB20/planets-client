import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  error: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  public login() {
    if (this.userName){
      this.authService.login(this.userName)
    } else {
      this.error = 'Username must not be empty !'
    }

  }
}
