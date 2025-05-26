import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-registration',
  standalone: true,
  imports: [],
  templateUrl: './vendor-registration.component.html',
  styleUrl: './vendor-registration.component.scss'
})
export class VendorRegistrationComponent {
 tabIndex: number = 0;
  

  constructor(private router: Router) {}

  setTab(index: number) {
    this.tabIndex = index;
  }

nextTab() {
  if (this.tabIndex < 8) this.tabIndex++;
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
