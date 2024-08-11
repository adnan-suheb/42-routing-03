import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Routing';


  isLogin: boolean = false;

  private _authService = inject(AuthService);

  ngOnInit(): void {
    this._authService.loginStatusSubject$
      .subscribe((res: boolean) => {
        this.isLogin = res;
        console.log(res);

      })


  }


}
