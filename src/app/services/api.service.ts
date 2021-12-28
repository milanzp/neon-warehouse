import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../models/product.model";

@Injectable()
export class ApiService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products)
  }

  createProduct(productData: Product): Observable<any> {
    this.products = [...this.products, productData];
    return of(true);
  }

  updateProduct(productData: Product): Observable<any> {
    this.products = this.products.map(product => product.code === productData.code ? productData : product);
    return of(true);
  }

  private products = [
    {
      code: 'MYTZ 123456',
      quantity: 100,
      floor: 1,
      section: 1
    },
    {
      code: 'MZ 2501',
      quantity: 62,
      floor: 2,
      section: 3
    }
  ];
}