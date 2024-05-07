import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationTService } from '../services/reservation-t.service';
import { TerrainService } from '../services/terrain.service';
import { ReservationT } from '../entities/ReservationT';
import { Etat } from '../entities/Etats';

@Component({
  selector: 'app-add-u',
  templateUrl: './add-u.component.html',
  styleUrls: ['./add-u.component.scss']
})
export class AddUComponent implements OnInit{
  id:any;
  reservationTForm! : FormGroup;
  submitted=false;
  terrainValues : any[]=[];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['idUser'];
     
   }
  constructor(
    private router: Router,
    private reservationTService: ReservationTService,
    private fb: FormBuilder,
    private terrainService : TerrainService, private route: ActivatedRoute
  ){
    this.reservationTForm= this.fb.group({
      date_debut:[null,[Validators.required]],
      date_fin:[null,[Validators.required]],
      nbre:['',[Validators.required]],
      terrain:['',Validators.required]
    },
    {
      validator: this.dateCompareValidator // Add custom validator for date comparison
    });
  
    this.terrainService.getTerrains().subscribe(values=>{
      this.terrainValues = values;
    });
    this.saveReservation();

  }
  private dateCompareValidator(formGroup: FormGroup) {
    const dateDebut = formGroup.get('date_debut')?.value;
    const dateFin = formGroup.get('date_fin')?.value;

    if (dateDebut && dateFin && dateDebut > dateFin) {
      alert("la date de fin ne doit pas précéder la date de début"); // Return an error if date_debut > date_fin
    }

    return null; // Return null if validation passes
  }
  
  saveReservation():void{
    if(this.reservationTForm.valid){
       const reservation: ReservationT={
        date_debut: new Date(this.reservationTForm.value.date_debut),
        date_fin: new Date(this.reservationTForm.value.date_fin),
        nbre: this.reservationTForm.value.nbre,
        terrain : this.terrainValues.find(terrain=>terrain.name===this.reservationTForm.value.terrain),
        etat : Etat.RESERVED
      };
      this.reservationTService
      .reserver(reservation,this.id)
      .subscribe((data)=>{
        this.submitted=true;
      });
      setTimeout(()=>{
        alert("Votre réservation a été effectué avec succés ")
        this.router.navigate(['myReservations']);
      },1000);
    }else{
      this.reservationTForm.markAllAsTouched();
    }
  }
  



}
