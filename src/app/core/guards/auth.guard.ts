import { Injectable } from '@angular/core';
import { CanActivate, Router,} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
    this.token = this.authService.getToken();
  }

  token: string | null = null;

  canActivate(): Observable<boolean> | boolean {
    if (!this.token) {
      this.router.navigate(['/login'])
      return false      
    } 

    return true
  }
}
