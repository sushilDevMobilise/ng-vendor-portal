import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorOnboardComponent } from './vendor-onboard/vendor-onboard.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';

const routes: Routes = [
   {
      path: '',
      component:VendorOnboardComponent
    },
     {
      path: 'vendor-registration',
      component:VendorRegistrationComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
