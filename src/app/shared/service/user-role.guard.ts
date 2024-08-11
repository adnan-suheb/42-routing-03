import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  constructor(private _router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //get actual userRole from local storage
    let actualUserRole: string = localStorage.getItem('userRole')!;

    //get userRole from static data
    let userRoleArr: string[] = route.data['userRole'];
    if (userRoleArr.includes(actualUserRole)) {
      return true;
    } else {
      return this._router.createUrlTree(['home'])
    }




    return true;
  }

}
