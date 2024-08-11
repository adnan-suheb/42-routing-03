import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private _routes:ActivatedRoute
  ) { }

  msg!:string

  ngOnInit(): void {
    this.msg = this._routes.snapshot.data['msg'];
  }

}
