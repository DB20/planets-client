import { Injectable } from '@angular/core';
import {
  CanActivate, Router
} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetsGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    return this.checkAuth();
  }


  checkAuth() {
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
