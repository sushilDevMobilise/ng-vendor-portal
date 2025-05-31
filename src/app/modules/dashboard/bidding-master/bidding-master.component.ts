import { Component } from '@angular/core';

@Component({
  selector: 'app-bidding-master',
  standalone: true,
  imports: [],
  templateUrl: './bidding-master.component.html',
  styleUrl: './bidding-master.component.scss'
})
export class BiddingMasterComponent {
  [x: string]: any;
  tabs: any = {};

  
  changeEvent(event: any): void {  
    this.resetValues();
    this.tabs.a = false;
    this.tabs[event] = true;
  }

  back(): void {
    this['location'].back();
  }

  resetValues(): void {
    this.tabs = {
      a: true,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
    };
  }
}
