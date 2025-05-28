import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // ✅ Add CommonModule
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend, Title);

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule], // ✅ Important for ngFor, ngIf, etc.
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
})
export class MainDashboardComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  timelineItems = [
    { title: '300 Partial Amount Paid On <strong>Paypal</strong>', date: '18 Jan 2025' },
    { title: 'New Expenses added <strong>#TR018756</strong>', date: '18 Jan 2025' },
    { title: 'Estimate Created <strong>#ES458789</strong>', date: '18 Jan 2025' },
    { title: '147 Created <strong>#ES458789</strong>', date: '18 Jan 2025' },
    { title: 'Estimate Created <strong>#ES458789</strong>', date: '18 Jan 2025' },
    { title: '147 Created <strong>#ES458789</strong>', date: '18 Jan 2025' },
    { title: '<strong>300</strong> Partial Amount Paid On Paypal', date: '18 Jan 2025' }
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = document.getElementById('doughnutChart') as HTMLCanvasElement;
      const ctx = canvas?.getContext('2d');

      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Paid', 'Partially', 'Unpaid', 'Overdue'],
            datasets: [
              {
                data: [35, 10, 40, 15],
                backgroundColor: ['#9b59b6', '#f1c40f', '#27ae60', '#e74c3c'],
                borderWidth: 2,
                hoverOffset: 10,
              },
            ],
          },
          options: {
            responsive: true,
            animation: {
              duration: 3000, // 3 seconds animation
              easing: 'easeOutBounce' // Feel free to try other easings like 'easeInOutQuad'
            },
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                  pointStyle: 'circle',
                },
              },
            },
            cutout: '65%',
          },
        });
      }
    }
  }
}
