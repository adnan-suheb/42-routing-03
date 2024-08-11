import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { AuthGuardGuard } from '../../service/auth-guard.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService: AuthService,
  ) { }

  userRole!: string;

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole')!;
  }





  onLogOut() {
    this._authService.logoutFromApp();
  }

}
