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
  id=3;
  user!:User;
  constructor(private reservationService:ReservationTService, private router:Router){

  }
  ngOnInit():void{
    this.reservationService.getReservationsByUser(this.id).subscribe((data:ReservationT[])=>{
      console.log(data);
      this.reservationTs=data;
    });

}
delete(idResT:any){
  this.reservationService.deleteReservationT(idResT).subscribe(
    data=>{
      window.location.reload();
      alert("La réservation a été supprimée avec succés");
    }
  )
}

}
