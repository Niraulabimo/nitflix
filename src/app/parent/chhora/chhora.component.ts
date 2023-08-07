import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chhora',
  templateUrl: './chhora.component.html',
  styleUrls: ['./chhora.component.css'],
})
export class ChhoraComponent {
  @Input() message: any = 'hello';
  clickme() {
    alert('button clicked!!');
  }
}
