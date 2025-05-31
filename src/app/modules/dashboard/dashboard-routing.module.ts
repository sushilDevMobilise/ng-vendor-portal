import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { BiddingMasterComponent } from './bidding-master/bidding-master.component';
import { InvoiceMasterComponent } from './invoice-master/invoice-master.component';
import { LiveEventInnerComponent } from './bidding-master/live-event-inner/live-event-inner.component';

const routes: Routes = [
  {
    path: '',
    component:MainDashboardComponent
  },
  {
    path: 'bidding',
    component:BiddingMasterComponent
  },
  {
    path: 'invoice-master',
    component:InvoiceMasterComponent
  },
  {
    path: 'live-event',
    component:LiveEventInnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
