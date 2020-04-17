import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private cookieService: CookieService, private router: Router) {}

  getToken() {
    return this.cookieService.get('username');
  }

  setCookies(username) {
    this.cookieService.set('username', username, 1);
  }

  login(username) {
    this.setCookies(username);
    this.router.navigateByUrl('/planets');
  }

  logout() {
    this.cookieService.delete('username');
    this.router.navigateByUrl('/login');
  }

  isAuthenticated() {
    const token = this.getToken();
    if (token && token != null) {
      return true;
    }
    return false;
  }
}
