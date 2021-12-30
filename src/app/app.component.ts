import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { Product, ProductFilter } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  products: Product[] = [];
  filteredProducts: Product[] = [];
  activeFilter: ProductFilter;

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  addProduct(): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: {
        title: 'Create new product',
        existingCodes: this.products.map(product => product.code),
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.apiService.createProduct(res).subscribe(() => {
          this.apiService.getProducts().subscribe((products) => {
            this.products = products;
            if (this.activeFilter) {
              this.onFilterChanged(this.activeFilter);
            }
          });
        });
      }
    });
  }

  onEditProduct(product: Product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: {
        title: 'Edit product',
        product,
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.apiService.updateProduct(res).subscribe(() => {
          this.apiService.getProducts().subscribe((products) => {
            this.products = products;
            if (this.activeFilter) {
              this.onFilterChanged(this.activeFilter);
            }
          });
        });
      }
    });
  }

  onFilterChanged(filterValues: ProductFilter): void {
    this.activeFilter = filterValues;
    let filteredProducts = this.products;
    if (filterValues.code.length) {
      filteredProducts = filteredProducts.filter((product) =>
        product.code.includes(filterValues.code)
      );
    }
    if (filterValues.floor.length) {
      filteredProducts = filteredProducts.filter((product) =>
        filterValues.floor.includes(product.floor)
      );
    }
    if (filterValues.section.length) {
      filteredProducts = filteredProducts.filter((product) =>
        filterValues.section.includes(product.section)
      );
    }
    this.filteredProducts = filteredProducts;
  }
}
