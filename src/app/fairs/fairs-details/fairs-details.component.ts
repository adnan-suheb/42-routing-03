import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ifair } from 'src/app/shared/model/fairs.interface';
import { FairsService } from 'src/app/shared/service/fairs.service';

@Component({
  selector: 'app-fairs-details',
  templateUrl: './fairs-details.component.html',
  styleUrls: ['./fairs-details.component.scss']
})
export class FairsDetailsComponent implements OnInit {

  fairId!: string;
  fairsObj!: Ifair;

  constructor(
    private _routes: ActivatedRoute,
    private _fairsService: FairsService
  ) { }

  ngOnInit(): void {


    this._routes.params.subscribe(res => {
      this.fairId = res['fairsId'];
      if (this.fairId) {
        this._fairsService.getSelectedfair(this.fairId)
          .subscribe(res => {
            this.fairsObj = res!
          })
      }
    })


  }

}
