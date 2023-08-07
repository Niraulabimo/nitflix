import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-arrayform',
  templateUrl: './arrayform.component.html',
  styleUrls: ['./arrayform.component.css'],
})
export class ArrayformComponent {
  form = new FormGroup({
    cities: new FormArray([new FormControl('SF'), new FormControl('NY')]),
  });

  get cities(): FormArray {
    return this.form.get('cities') as FormArray;
  }

  addCity() {
    this.cities.push(new FormControl());
  }

  onSubmit() {
    console.log(this.cities.value); // ['SF', 'NY']
    console.log(this.form.value); // { cities: ['SF', 'NY'] }
  }

  setPreset() {
    this.cities.patchValue(['LA', 'MTV']);
  }
}
