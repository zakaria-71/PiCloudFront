import { Component } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ReservationT } from 'src/app/entities/ReservationT';
import { ReservationTService } from 'src/app/services/reservation-t.service';
import { Etat } from 'src/app/entities/Etats';
import { TerrainService } from 'src/app/services/terrain.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-r',
  templateUrl: './add-r.component.html',
  styleUrls: ['./add-r.component.css']
})
export class AddRComponent {
  reservationTForm : FormGroup;
  submitted=false;
  etatValues = Object.values(Etat);
  terrainValues : any[]=[];
  constructor(
    private router: Router,
    private reservationTService: ReservationTService,
    private fb: FormBuilder,
    private terrainService : TerrainService
  ){
    this.reservationTForm= this.fb.group({
      date_debut:[null,[Validators.required]],
      date_fin:[null,[Validators.required]],
      nbre:['',[Validators.required]],
      etat:['',Validators.required],
      terrain:['',Validators.required]
    });
    this.terrainService.getTerrains().subscribe(values=>{
      this.terrainValues = values;
    });
  }
  saveReservation():void{
    if(this.reservationTForm.valid){
       const reservation: ReservationT={
        date_debut: new Date(this.reservationTForm.value.date_debut),
        date_fin: new Date(this.reservationTForm.value.date_fin),
        nbre: this.reservationTForm.value.nbre,
        terrain : this.terrainValues.find(terrain=>terrain.name===this.reservationTForm.value.terrain),
        etat: this.reservationTForm.value.etat
      };
      this.reservationTService
      .addReservationT(reservation)
      .subscribe((data)=>{
        this.submitted=true;
      });
      setTimeout(()=>{
        alert("la réservation a été crée avec succés")
        this.router.navigate(['reservationTs']);
      },1000);
    }else{
      this.reservationTForm.markAllAsTouched();
    }
  }

}
