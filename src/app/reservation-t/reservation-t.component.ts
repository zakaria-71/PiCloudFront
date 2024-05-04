import { ReservationT } from '../entities/ReservationT';
import { ReservationTService } from '../services/reservation-t.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-reservation-t',
  templateUrl: './reservation-t.component.html',
  styleUrls: ['./reservation-t.component.css']
})
export class ReservationTComponent implements OnInit{
  reservationTs!: ReservationT[];
  constructor(private reservationService:ReservationTService, private router:Router){}
  ngOnInit():void{
    this.reservationService.getReservationTs().subscribe((data:ReservationT[])=>{
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
  details(idResT:any){
    this.router.navigate(['reservationTs/more/'+idResT]);
  }
  edit(idResT:any){
    this.router.navigate(['reservationTs/edit/'+idResT]);
  }



}
