import {Component, OnInit} from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationMService} from "../../services/reservation-m.service";


@Component({
  selector: 'app-reservation-m-back',
  templateUrl: './reservation-m-back.component.html',
  styleUrls: ['./reservation-m-back.component.scss']
})
export class ReservationMBackComponent implements OnInit{

  reservation: any;
  showReservationM: boolean = true;
  table1Data: any;
  table2Data: any;
  form!: FormGroup;
  reservationM:any;
  addReservationButton="";
  constructor(private ReservationMService: ReservationMService, private scriptLoaderService: ScriptLoaderService,private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    const scriptUrls = [
      "../../../../assets/BackOffice/js/bootstrap.js",
      "../../../../assets/BackOffice/assets/vendor/libs/jquery/jquery.js",
      "../../../../assets/BackOffice/assets/vendor/libs/popper/popper.js",
      "../../../../assets/BackOffice/assets/vendor/js/bootstrap.js",
      "../../../../assets/BackOffice/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js",
      "../../../../assets/BackOffice/assets/vendor/js/menu.js",
      "../../../../assets/BackOffice/assets/js/main.js",
      "../../../../assets/BackOffice/assets/js/ui-modals.js",

    ];
    this.loadScripts(scriptUrls);
    this.form = this.formBuilder.group({
      name: [''],
      description: [''],
      image:['']
    });

    this.ReservationMService.retrieveAll().subscribe(
      (data) => {
        this.table1Data = data;
        this.table2Data = data;
        console.log(this.table2Data);

      });
    this.showAddButton();
  }
  showAddButton():void{
    this.showReservationM=!this.showReservationM;
    if (!this.showReservationM){
      this.addReservationButton = "View All Reservations list"
    }else
    {
      this.addReservationButton = "Add a Reservation"
    }
  }

  loadScripts(scriptUrls: string[]): void {
    this.scriptLoaderService.loadScripts(scriptUrls)
      .then(() => {
        console.log('All scripts loaded successfully.');
      })
      .catch(error => {
        console.error('Error loading scripts:', error);
      });
  }

  showReservation(row: any): void {
    this.reservation = row.reservationMS
  }

  deleteMaterial(reservationM: any): void {
    console.log(reservationM.idMaterial);
    this.ReservationMService.deleteReservationM(reservationM.idMaterial).subscribe(
      (data) => {
        console.log("deleted item", data)
      });
  }
  addMaterial(material: any): void {
    console.log(this.form.value);
    this.ReservationMService.addReservationM(this.form.value).subscribe(
      (data) => {
        console.log("added item", data)
        this.showReservationM=!this.showReservationM;
      });
  }



}
