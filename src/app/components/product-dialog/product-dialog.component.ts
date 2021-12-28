import { Component, Inject, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { numberOfFloors, numberOfSections } from "src/app/app-config";

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) {}

  productForm = new FormGroup({
    code: new FormControl(''),
    quantity: new FormControl(''),
    floor: new FormControl(''),
    section: new FormControl(''),
  });

  floorOptions = Array(numberOfFloors).fill(0).map((_, i) => i);
  sectionOptions = Array(numberOfSections).fill(0).map((_, i) => i);
}