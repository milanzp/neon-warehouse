import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMaskModule } from '@ngneat/input-mask';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';

// Material imports
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


const materialModules = [
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatChipsModule
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDialogComponent,
    ProductFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    ...materialModules,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
