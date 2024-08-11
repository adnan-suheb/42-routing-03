import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/component/home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { DialogComponent } from './shared/component/dialog/dialog.component';
import { MaterialModule } from './material/material.module';
import { AppRouting } from './app-routing.routing';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { FairsModule } from './fairs/fairs.module';
import { AuthFormComponent } from './shared/component/auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    DialogComponent,
    AuthFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouting,
    UsersModule,
    ProductsModule,
    FairsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
