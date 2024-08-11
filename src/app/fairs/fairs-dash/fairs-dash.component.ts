import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ifair } from 'src/app/shared/model/fairs.interface';
import { FairsService } from 'src/app/shared/service/fairs.service';

@Component({
  selector: 'app-fairs-dash',
  templateUrl: './fairs-dash.component.html',
  styleUrls: ['./fairs-dash.component.scss']
})
export class FairsDashComponent implements OnInit {

  fairArr!: Ifair[];
  fairsObj!: Ifair;
  constructor(
    private _fairsService: FairsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._fairsService.fetchAllFairs().subscribe((res: Ifair[]) => {
      this.fairArr = res
    })
    this._router.navigate(['fairs', this.fairArr[0].fairId])
  }

}
