import { Injectable } from '@angular/core';
import { Product } from './product';
import { Products} from './mock-product';

@Injectable()
export class ProductService {

  getProducts(): Product[] {
    return Products;
  }
  constructor() { }

}
