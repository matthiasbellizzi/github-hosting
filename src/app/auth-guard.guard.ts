import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //const isUserLoggedIn: any = localStorage.getItem('isUserLoggedIn');
    const role = localStorage.getItem('returnedRole')!;
    console.log("role");
    if (role == "VET") {
      console.log("role");
      console.log(role);
      alert("Vet cannot access Add an appointment");
      this.router.navigate(['/appointment-list']);
      return false;
    }else{
      return true;
    }
  }
  
}
