import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css'],
})
export class FormarrayComponent {
  name = 'Bimochan';

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]),
    });
  }

  quantities(): FormArray {
    return this.productForm.get('quantities') as FormArray;
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    });
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
