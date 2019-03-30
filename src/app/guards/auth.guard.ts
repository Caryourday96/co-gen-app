import { Injectable, NgZone } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private ngZone: NgZone
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
 
    let userAuthenticated = false; // Get the current authentication state from a Service!
 
    if (userAuthenticated) {
      return true;
    } else {
             this.ngZone.run(() => {
         this.router.navigateByUrl('/login');
       });
      return false;
    }
  }
 }