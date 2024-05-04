import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ReservationTService } from 'src/app/services/reservation-t.service';
@Component({
  selector: 'app-details-r',
  templateUrl: './details-r.component.html',
  styleUrls: ['./details-r.component.css']
})
export class DetailsRComponent implements OnInit {
  id:any;
  reservationT:any;
  ngOnInit():void{
    this.id=this.route.snapshot.params['idResT'];
    this.reservationTService.getReservationTById(this.id).subscribe(
      data=>{
        this.reservationT=data;
      }
    )
  }
  constructor(
    private reservationTService : ReservationTService,
    public route: ActivatedRoute
  ){}

}
