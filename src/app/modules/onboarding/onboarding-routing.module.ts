import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorOnboardComponent } from './vendor-onboard/vendor-onboard.component';

const routes: Routes = [
   {
      path: '',
      component:VendorOnboardComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
