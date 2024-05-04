import { Component, OnInit } from '@angular/core';
import { ReservationT } from 'src/app/entities/ReservationT';
import { ReservationTService } from 'src/app/services/reservation-t.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entities/User';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css']
})
export class ListReservationsComponent implements OnInit{
  reservationTs!: ReservationT[];
  id:any;
  //reservationT:any;
  user!:User;
  constructor(private reservationService:ReservationTService, private router:Router,public route: ActivatedRoute){

  }
  ngOnInit():void{
    this.reservationService.findUserById(1).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
    this.reservationService.getAvailableReservations().subscribe((data:ReservationT[])=>{
      console.log(data);
      this.reservationTs=data;
    });

}
/*findReservation():void{
  this.id=this.route.snapshot.params['idResT'];
  this.reservationService.getReservationTById(this.id).subscribe(
    data=>{
      this.reservationT=data;
    },
    error => {
      console.error('Error finding reservation:', error);
    }
  );
}*/
/*findUser():void{
  this.reservationService.findUserById(1).subscribe((user)=>
    {
      console.log('User:',user);
    },
    (error)=>{
      console.error(error);
    }
  );

}*/

/*reserve(idResT:any, user:any):void{
  
  this.reservationService.reserve(idResT,user).subscribe(
    response => {
      console.log(response);
      window.location.reload();
        alert("La réservation a été effectué avec succés");
    },
    error => {
      console.log("problem occured while reserving",error);
      alert("error occured ");

    }
    
  )
}*/

reserve(idResT:any, user:User):void{
  this.reservationService.reserve(idResT,user).subscribe(
    response => {
      console.log(response);
      window.location.reload();
        alert("La réservation a été effectué avec succés");
    },
    error => {
      console.log("problem occured while reserving",error);
      window.location.reload();
      alert("La réservation a été effectué avec succés!");

    }
    
  );
}
}
