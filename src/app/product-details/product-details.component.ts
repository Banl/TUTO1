import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  idProduct: number | undefined;

  constructor(private route: ActivatedRoute) {
    this.ngOnInit();
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.idProduct = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(c => c.id == this.idProduct);
  }
}
