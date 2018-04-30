import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {CheckoutComponent} from '../checkout/checkout.component';
import {ConfirmComponent} from '../confirm/confirm.component';
import {MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];
  NewCartTotal: number;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
    this.NewCartTotal = 0;
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  getCartTotal(): number {
    this.NewCartTotal = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.NewCartTotal = this.NewCartTotal + (this.products[i]).total;
    }
    for (let i = 0; i < this.products.length; i++) {
      (this.products[i]).grandtotal = this.NewCartTotal;
    }

    return this.NewCartTotal;
  }

}
