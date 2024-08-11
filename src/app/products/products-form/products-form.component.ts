import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product.interface';
import { CustomRegex } from 'src/app/shared/model/validationPattern';
import { ProductsService } from 'src/app/shared/service/products.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  constructor(
    private _routes: ActivatedRoute,
    private _productService: ProductsService,
    private _router: Router,
    private _uuid: UuidService
  ) { }

  productForm!: FormGroup;
  isInEditMode: boolean = false;
  productId!: string;
  productObj!: Iproduct;
  canReturn!: string;

  ngOnInit(): void {
    this.createForm();
    this.handleProductId();
    this.handleQueryParamCanReturn();
  }

  createForm() {
    this.productForm = new FormGroup({
      brand: new FormControl(null, Validators.required),
      model: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      canReturn: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.onlyNumber)]),
    })
  }

  get controls() {
    return this.productForm.controls
  }

  handleProductId() {
    this.productId = this._routes.snapshot.params['productId'];
    if (this.productId) {
      this.isInEditMode = true;
      this._productService.getSingleProduct(this.productId)
        .subscribe((res: Iproduct) => {
          this.productObj = res;
          this.productForm.patchValue(this.productObj)
        })
    } else {
      this.isInEditMode = false
    }


  }
  handleQueryParamCanReturn() {
    this.canReturn = this._routes.snapshot.queryParams['canReturn'];
    if (this.canReturn === '0') {
      this.productForm.disable()
    } else {
      this.productForm.enable()
    }

  }

  onFormSubmit() {
    if (this.productForm.valid) {
      let newProduct = { ...this.productForm.value, prodId: this._uuid.uuid() }
      this._productService.addNewProduct(newProduct)
      console.log(newProduct);

    }


  }

  onUpdate() {
    if (this.productForm.valid) {
      let updatedObj = { ...this.productForm.value, prodId: this.productId }
      this._productService.updateProduct(updatedObj);
    }
  }
  onCancel() {
    this._router.navigate(['/products'])
  }
}
