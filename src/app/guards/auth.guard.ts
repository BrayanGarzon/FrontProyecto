import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/discover/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise( resolve => {
      const token = localStorage.getItem('token');
      if (token) {
        this.authService.authMe(token).subscribe( response => {
          resolve(true);
        }, error => {
          this.router.navigateByUrl('/login')
          resolve(false);
        } )
      } else {
        this.router.navigateByUrl('/login');
        resolve(false);
      }
    });
  }
  
}
