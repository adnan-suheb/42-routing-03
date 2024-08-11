import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashComponent } from './products-dash/products-dash.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRouting } from '../app-routing.routing';



@NgModule({
  declarations: [
    ProductsDashComponent,
    ProductsFormComponent,
    SingleProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRouting
  ]
})
export class ProductsModule { }
