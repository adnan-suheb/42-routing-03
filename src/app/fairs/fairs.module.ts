import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FairsDashComponent } from './fairs-dash/fairs-dash.component';
import { FairsCardComponent } from './fairs-card/fairs-card.component';
import { FairsDetailsComponent } from './fairs-details/fairs-details.component';
import { MaterialModule } from '../material/material.module';
import { AppRouting } from '../app-routing.routing';



@NgModule({
  declarations: [
    FairsDashComponent,
    FairsCardComponent,
    FairsDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRouting
  ]
})
export class FairsModule { }
