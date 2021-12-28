import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './services/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (private apiService: ApiService, public dialog: MatDialog) {
  }

  products: any[] = [];
  productsSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.productsSubscription = this.apiService.getProducts().subscribe(products => {
      this.products = products
    });
  }
  
  addProduct(): void {
    console.log('ojsa')
    this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: {
        title: "Create new product"
      },
    })
  }
}
