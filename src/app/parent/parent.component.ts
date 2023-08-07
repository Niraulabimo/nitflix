import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ViewChild } from '@angular/core';
import { ChhoraComponent } from './chhora/chhora.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  @ViewChild(ChildComponent, { static: true })
  childComponentRef: ChildComponent | any;

  @ViewChild(ChhoraComponent) chhora: ChhoraComponent | any;

  btn() {
    this.chhora.clickme();
  }

  parentBtn() {
    this.childComponentRef.childBtn();
  }
}
