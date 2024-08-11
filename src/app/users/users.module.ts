import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashComponent } from './users-dash/users-dash.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { MaterialModule } from '../material/material.module';
import { AppRouting } from '../app-routing.routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersDashComponent,
    UsersFormComponent,
    SingleUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, AppRouting, ReactiveFormsModule
  ]
})
export class UsersModule { }
