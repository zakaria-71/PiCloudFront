import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-user-stat-component',
  templateUrl: './user-stat-component.component.html',
  styleUrls: ['./user-stat-component.component.scss']
})
export class UserStatComponent implements OnInit {
  chart: Chart | undefined;

  constructor(private service: JwtService) {
    Chart.register(...registerables);  // Register Chart.js components
  }

  ngOnInit(): void {
    this.service.getUserRegistrationStats().subscribe({
      next: (data) => {
        this.createChart(data);
      },
      error: (error) => {
        console.error('Error fetching registration stats:', error);
      }
    });
  }

  private createChart(data: any[]): void {
    const ctx = document.getElementById('userStatsChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => this.getMonthName(d.month)),
        datasets: [{
          label: 'User Registrations',
          data: data.map(d => d.count),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true
      }
    });
  }

  getMonthName(monthIndex: number): string {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return monthNames[monthIndex - 1];
  }
}
