import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class ApiService {
  constructor() {}

  getProducts(): Observable<any[]> {
    return of([
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
    ])
  }
}