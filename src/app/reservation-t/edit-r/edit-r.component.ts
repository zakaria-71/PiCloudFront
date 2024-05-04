import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { ReservationTService } from 'src/app/services/reservation-t.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationT } from 'src/app/entities/ReservationT';
import { Etat } from 'src/app/entities/Etats';
import { TerrainService } from 'src/app/services/terrain.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-edit-r',
  templateUrl: './edit-r.component.html',
  styleUrls: ['./edit-r.component.css']
})
export class EditRComponent implements OnInit {
  id: any;
  reservationT: any;
  reservationForm: FormGroup;
  submitted = false;
  etatValues = Object.values(Etat);
  terrainValues : any[]=[];
  //formErrors: any = {};

  constructor(
    private reservationTService: ReservationTService,
    private route: ActivatedRoute,
    private fb : FormBuilder,
    private terrainService : TerrainService,
    private router: Router
  ) { this.reservationForm= this.fb.group({
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

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idResT'];
    console.log('ID:', this.id); // Log the ID here
    this.loadReservation();
  }
  initForm():void{
    this.reservationForm = this.fb.group({
      date_debut: [this.reservationT.date_debut || null, Validators.required],
      date_fin: [this.reservationT.date_fin || null, Validators.required],
      nbre:[this.reservationT.nbre,Validators.required],
      etat: [this.reservationT.etat, Validators.required],
      terrain: [this.reservationT.terrain ? this.reservationT.terrain.name:'', Validators.required]
    });
  }
  loadReservation(){

    this.reservationTService.getReservationTById(this.id).subscribe(
      data => {
        this.reservationT=data;
        this.reservationT.date_debut = formatDate(new Date(this.reservationT.date_debut), 'yyyy-MM-dd', 'en-US');
        this.reservationT.date_fin = formatDate(new Date(this.reservationT.date_fin), 'yyyy-MM-dd', 'en-US');
        this.initForm();
      },
      error => {
        console.log(error);
      }
    );
  }
  
 

  get f(){return this.reservationForm.controls;}
  update(): void {
    this.submitted=true;
    if (this.reservationForm.valid){
      const idResT = this.id;
      const data: ReservationT={
        date_debut: new Date(this.reservationForm.value.date_debut),
        date_fin: new Date(this.reservationForm.value.date_fin),
        nbre: this.reservationForm.value.nbre,
        terrain : this.terrainValues.find(terrain=>terrain.name===this.reservationForm.value.terrain),
        etat: this.reservationForm.value.etat
      };
      this.reservationTService.updateReservationT(idResT,data).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
        setTimeout(()=>{
          alert("La réservation a été modifiée avec succés");
          this.router.navigate(['reservationTs']);
        },1000);
      }else{
        this.reservationForm.markAllAsTouched();
      }
    
  }

  }
