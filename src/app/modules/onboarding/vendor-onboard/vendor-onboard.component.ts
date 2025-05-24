import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-vendor-onboard',
  standalone: true,
  imports: [],
  templateUrl: './vendor-onboard.component.html',
  styleUrl: './vendor-onboard.component.scss'
})

export class VendorOnboardComponent {
  tabIndex: number = 0;
  

  constructor(private router: Router) {}

  setTab(index: number) {
    this.tabIndex = index;
  }

nextTab() {
  if (this.tabIndex < 3) this.tabIndex++;
}

prevTab() {
  if (this.tabIndex > 0) this.tabIndex--;
}
resetStepper() {
  this.tabIndex = 0;
}


  
  submitForm() {
    console.log('Form submitted!');
    this.router.navigate(['/all-courses'])
  }
}
