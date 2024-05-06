import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../service/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private jwtService: JwtService, private router: Router) {}
  canActivate(): boolean {
    if (this.jwtService.isAdmin()) {
      return true; // Allow navigation
    } else {
      this.router.navigateByUrl('/'); // Redirect non-admin users to another page
      return false; // Block navigation
    }
  }
  
}
