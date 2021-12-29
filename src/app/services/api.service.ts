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
    },
    {
      code: 'YZFR 1000',
      quantity: 13,
      floor: 3,
      section: 1
    },
    {
      code: 'MS 1260',
      quantity: 223,
      floor: 1,
      section: 2
    },
    {
      code: 'GSXR 1000',
      quantity: 49,
      floor: 2,
      section: 1
    },
    {
      code: 'ASDF 357912',
      quantity: 8,
      floor: 2,
      section: 2
    },
    {
      code: 'XTZ 75000',
      quantity: 54,
      floor: 2,
      section: 3
    },
    {
      code: 'MT 0009',
      quantity: 442,
      floor: 1,
      section: 3
    },
  ];
}