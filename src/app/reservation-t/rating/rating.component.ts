import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReservationT } from '../../entities/ReservationT';
import { ReservationTService } from '../../services/reservation-t.service';
import { Router } from '@angular/router';
import { User } from '../../entities/User';
import { Rating } from '../../entities/Rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit{
  id=3;
  constructor(private reservationService:ReservationTService, private router:Router){}
  
  ngOnInit(): void {
    
  
}

  ratingCount=0;
  totalRating=0;
  finalRating= 0;
  ratingControl = new FormControl(0);
  getRating():void{
    
    this.ratingCount++;
    this.totalRating+= this.ratingControl?.value || 0;
    //console.log(this.ratingControl.value);
    this.finalRating = (this.totalRating/this.ratingCount);
    localStorage.setItem('hasRated', 'true');
    const hasRated = localStorage.getItem('hasRated');
    if (hasRated === 'true') {
      const data: Rating={
        value: this.totalRating,
      };
      
    this.reservationService
    .addRating(this.id,data)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
      setTimeout(()=>{
        alert("Votre rating a été enregisté avec succés");
        this.router.navigate(['reservation']);
      },1000);
      return;
    }
    this.ratingControl.disable();


  }
 
}
