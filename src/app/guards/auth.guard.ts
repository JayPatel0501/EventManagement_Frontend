import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      debugger
      if(sessionStorage.getItem('isUserLogin')?.toString()=="true"){
         //this.router.navigateByUrl('dashboard/allevents')
         return true
      }
      else{
        this.router.navigateByUrl('login')
        return false;
      }
      // this.router.navigateByUrl('login')
   

  
  }
  
}
