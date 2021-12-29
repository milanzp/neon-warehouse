import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { numberOfFloors, numberOfSections } from "src/app/app-config";
import { debounceTime } from 'rxjs/operators';
import { createMask } from "@ngneat/input-mask";
import { arrayFormTo } from "src/app/utils/array.helper";
import { ProductFilter } from "src/app/models/product.model";

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css']
})
export class ProductFiltersComponent implements OnInit {

  @Output() filterChanged = new EventEmitter<ProductFilter>();
  constructor() { }

  ngOnInit(): void {
    this.filtersForm.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(filterValue => this.filterChanged.emit(filterValue))
  }

  filtersForm = new FormGroup({
    code: new FormControl(''),
    floor: new FormControl([]),
    section: new FormControl(''),
  });

  floorOptions = arrayFormTo(1, numberOfFloors);
  sectionOptions = arrayFormTo(1, numberOfSections);

  codeFilterMask = createMask({
    mask: '[A][A][A][A] [9][9][9][9][9][9]',
    parser: (value: string) => value.trim(),
  });

  onLocationClick(locationType: string, clickedValue: number) {
    if (this.filtersForm.controls[locationType].value.includes(clickedValue)) {
      this.filtersForm.controls[locationType].setValue(this.filtersForm.controls[locationType].value.filter((f: number) => f !== clickedValue));
    }
    else {
      this.filtersForm.controls[locationType].setValue([...this.filtersForm.controls[locationType].value, clickedValue]);
    }
  }

  cancelCodeFilter(): void {
    this.filtersForm.controls.code.setValue('');
  }

}
