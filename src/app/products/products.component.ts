import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  displayRemain: number;
  displayRequest: number;
  title: string;
  prevRemain: number;
  cartTotal: number;
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.title = 'Not Hello';
    this.displayRemain = 0;
    this.displayRequest = 0;
    this.prevRemain = 10;
    this.cartTotal = 0;
    this.getProducts();
  }

  addToCart(i){
    this.title = 'Hello';
    (this.products[i]).remain = (this.products[i]).orig - (this.products[i].request);
    this.displayRemain = (this.products[i]).remain;
    this.displayRequest = (this.products[i]).request;
    (this.products[i]).total = ((this.products[i]).request * (this.products[i]).price);
    this.addCartProducts();
  }
  addCartProducts() {
    this.cartTotal = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.cartTotal = this.cartTotal + (this.products[i]).total;
    }
    for (let i = 0; i < this.products.length; i++) {
      (this.products[i]).grandtotal = this.cartTotal;
    }
    return this.cartTotal;
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }
}
