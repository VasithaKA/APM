import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/products/services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Detail'
  errorMessage: any
  product: IProduct

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProduct(+this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.product = res
    })
  }

  onBack() {
    this.location.back();
  }

}
