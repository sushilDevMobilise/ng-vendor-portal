import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  imports: [],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
})
export class MainDashboardComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
