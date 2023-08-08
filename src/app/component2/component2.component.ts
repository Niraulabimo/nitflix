import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
})
export class Component2Component {
  Component2Data: any = '';

  constructor(private DataSharing: DataSharingService) {
    this.DataSharing.SharingData.subscribe((res: any) => {
      this.Component2Data = res;
    });
  }

  onSubmit(data: { value: unknown }) {
    this.DataSharing.SharingData.next(data.value);
  }
}
