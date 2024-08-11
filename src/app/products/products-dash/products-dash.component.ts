import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-products-dash',
  templateUrl: './products-dash.component.html',
  styleUrls: ['./products-dash.component.scss']
})
export class ProductsDashComponent implements OnInit {

  constructor(
    private _productService: ProductsService,
    private _router: Router
  ) { }

  productsArr!: Iproduct[];

  ngOnInit(): void {
    this.getAllProducts();
    this._router.navigate(['products', this.productsArr[0].prodId], {
      queryParams: { canReturn: this.productsArr[0].canReturn },
      queryParamsHandling: 'merge'
    })

  }

  getAllProducts() {
    this._productService.fetchAllProducts().subscribe(res => {
      this.productsArr = res;
    })
  }

}
