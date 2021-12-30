import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createMask } from '@ngneat/input-mask';
import { numberOfFloors, numberOfSections } from 'src/app/app-config';
import { range } from 'src/app/utils/array.helper';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css'],
})
export class ProductDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.product) {
      this.productForm.reset({ ...data.product });
      this.productForm.controls.code.disable();
    }
  }

  codeInputMask = createMask('AA[A][A] 9999[9][9]');

  productForm = new FormGroup({
    code: new FormControl(''),
    quantity: new FormControl('', Validators.required),
    floor: new FormControl('', Validators.required),
    section: new FormControl('', Validators.required),
  });

  floorOptions = range(1, numberOfFloors);
  sectionOptions = range(1, numberOfSections);
}
