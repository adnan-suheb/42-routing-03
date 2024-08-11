import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  constructor(
    private _routes: ActivatedRoute,
    private _prodService: ProductsService,
    private _router: Router
  ) { }

  productId!: string;
  productObj!: Iproduct;

  ngOnInit(): void {
    this.handleProductId();

  }

  handleProductId() {
    this._routes.params.subscribe(res => {
      this.productId = res['productId'];
      if (this.productId) {
        this._prodService.getSingleProduct(this.productId)
          .subscribe((res: Iproduct) => {
            this.productObj = res;
          })
      }

    })
  }

  onEdit() {
    this._router.navigate(['editProduct'], {
      relativeTo: this._routes,
      queryParamsHandling: 'preserve'
    })
  }
  onRemove(id: string) {
    this._prodService.removeProduct(id)
  }
}
