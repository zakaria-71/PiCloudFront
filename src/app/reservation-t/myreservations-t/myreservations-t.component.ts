import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/User';
import { ReservationT } from 'src/app/entities/ReservationT';
import { ReservationTService } from 'src/app/services/reservation-t.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myreservations-t',
  templateUrl: './myreservations-t.component.html',
  styleUrls: ['./myreservations-t.component.css']
})
export class MyreservationsTComponent implements OnInit{
  reservationTs!: ReservationT[];
  id:any;
  user!:User;
  constructor(private reservationService:ReservationTService, private router:Router){

  }
  ngOnInit():void{
    this.reservationService.getReservationsByUser(1).subscribe((data:ReservationT[])=>{
      console.log(data);
      this.reservationTs=data;
    });

}

}
