import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() buttonClickEvent = new EventEmitter<void>();
  childBtn() {
    alert('hello parents!!');
  }
}
