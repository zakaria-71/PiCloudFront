import { Component, OnInit } from '@angular/core';
import { ReservationTService } from '../../services/reservation-t.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { Chart } from 'angular-highcharts';
import { Chart, registerables } from 'chart.js';
import { Rating } from '../../entities/Rating';
import { ReservationT } from '../../entities/ReservationT';
import { Etat } from '../../entities/Etats';
Chart.register(...registerables)

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent  implements OnInit{
  above =0 ;
  below = 0;
  available =0 ;
  reserved = 0;
  closed = 0;
  //count!:number;
  ratings!: Rating[];
  reservationTs!: ReservationT[];
  
  constructor(private reservationService: ReservationTService){}
  ngOnInit(): void {
    this.reservationService.getReservationTs().subscribe((data:ReservationT[])=>{
      console.log(data);
      this.reservationTs=data;
      this.reservationTs.forEach((reservation: ReservationT) => {
        if (reservation.etat==Etat.AVAILABLE) {
          this.available++;
        } else if(reservation.etat==Etat.RESERVED){
          this.reserved++;
        }else{
          this.closed++;
        }
      });
    });
    this.RenderReservation(this.available,this.reserved,this.closed);   
  
    this.reservationService.getRatings().subscribe((data:Rating[])=>{
      console.log(data);
      this.ratings=data;
      this.ratings.forEach((rating: Rating) => {
        if (rating.value >= 3) {
          this.above++;
        } else {
          this.below++;
        }
      });
      this.RenderChart(this.below,this.above);   

    });
 

  }
 
  RenderChart(below:any,above:any){
    const myChart =new Chart("chart", {
      type: 'pie',
      data: {
        labels: [ 'Above 3','Below 3'],
        datasets: [{
          label: 'ratings',
          data: 
          [above,below],
          backgroundColor:[
            'rgba(54,162,235,0.2)',
            'rgba(153,102,255,0.2)'

          ],
          borderColor:[
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
  RenderReservation(available:any,reserved:any,closed:any){
    const resChart =new Chart("reschart", {
      type: 'pie',
      data: {
        labels: [ 'Available','Reserved','Closed'],
        datasets: [{
          label: 'terrains',
          data: 
          [available,reserved,closed],
          
          backgroundColor:[
            'rgba(54,162,235,0.2)',
            'rgba(153,102,255,0.2)',
            'rgba(245,102,145,0.2)'

          ],
          borderColor:[
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
 
}
