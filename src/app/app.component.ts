import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService, public dialog: MatDialog) {
  }

  products: Product[] = [];
  productsSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.productsSubscription = this.apiService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addProduct(): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: {
        title: "Create new product"
      },
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.apiService.createProduct(res).subscribe(async () =>
          this.products = await this.apiService.getProducts().toPromise()
        );
      }
    });
  }

  onEditProduct(product: Product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: {
        title: "Edit product",
        product
      },
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.apiService.updateProduct(res).subscribe(async () =>
          this.products = await this.apiService.getProducts().toPromise()
        );
      }
    });
  }
}
