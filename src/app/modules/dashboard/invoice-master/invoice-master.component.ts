import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-master',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-master.component.html',
  styleUrl: './invoice-master.component.scss'
})
export class InvoiceMasterComponent {
  cards = [
  {
    label: 'Submitted',
    icon: 'bi bi-check-circle',
    color: 'bg-success',
    amount: '3.36k',
    count: '04'
  },
  {
    label: 'Booked',
    icon: 'bi bi-file-earmark-check',
    color: 'bg-purple',
    amount: '3.36k',
    count: '04'
  },
  {
    label: 'Hold',
    icon: 'bi bi-pause-circle',
    color: 'bg-danger',
    amount: '3.36k',
    count: '04'
  },
  {
    label: 'Rejected',
    icon: 'bi bi-x-circle',
    color: 'bg-warning',
    amount: '3.36k',
    count: '04'
  },
  {
    label: 'Paid',
    icon: 'bi bi-receipt',
    color: 'bg-info',
    amount: '3.36k',
    count: '04'
  }
];

}
