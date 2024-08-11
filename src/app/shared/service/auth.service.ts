import { Injectable } from '@angular/core';
import { Ilogin } from '../model/login.const';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router: Router,
    private _snackbar: SnackbarService
  ) { }

  userLoginState: boolean = false;
  loginStatusSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isAuthenticated() {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        // if local storage has token then resolve true or resolve false
        if (localStorage.getItem('token')) {
          this.userLoginState = true;
        }
        else {
          this.userLoginState = false;
          this._router.navigate([''])
          console.log(this.userLoginState);
        }

        this.loginStatusSubject$.next(this.userLoginState);
        resolve(this.userLoginState)

      }, 500);
    })
  }

  loginToApp(obj: any) {
    if (obj.email === 'john@gmail.com' && obj.password === 'zaq1ZAQ!') {
      localStorage.setItem('userRole', 'buyer');
      this.userLoginState = true;
      localStorage.setItem('token', 'JWT token');
      this._router.navigate(['home']);
    }
    else if (obj.email === 'june@gmail.com' && obj.password === 'zaq1ZAQ!') {
      localStorage.setItem('userRole', 'admin');
      this.userLoginState = true;
      localStorage.setItem('token', 'JWT token');
      this._router.navigate(['home']);
    }
    else if (obj.email === 'may@gmail.com' && obj.password === 'zaq1ZAQ!') {
      localStorage.setItem('userRole', 'superAdmin');
      this.userLoginState = true;
      localStorage.setItem('token', 'JWT token');
      this._router.navigate(['home']);
    } else {
      this._snackbar.openSnackbar('Invalid email or password!!!')
    }

  }

  logoutFromApp() {
    localStorage.removeItem('userRole');
    localStorage.removeItem('token');
    this.userLoginState = false;
    this.loginStatusSubject$.next(this.userLoginState);
    this._router.navigate([''])
  }






}