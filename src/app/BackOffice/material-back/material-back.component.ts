import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';
import {MaterialService} from "../../services/material.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-material-back',
  templateUrl: './material-back.component.html',
  styleUrls: ['./material-back.component.scss'],
})
export class MaterialBackComponent implements OnInit {

  reservation: any;
  showMaterial: boolean = true;
  table1Data: any;
  table2Data: any;
  form: FormGroup | undefined;

  constructor(private MaterialService: MaterialService, private scriptLoaderService: ScriptLoaderService,private formBuilder: FormBuilder) {
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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.MaterialService.retrieveAll().subscribe(
      (data) => {
        this.table1Data = data;
        this.table2Data = data;
        console.log(this.table2Data[0].reservationMS);

      });
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

  deleteMaterial(material: any): void {
    this.MaterialService.deleteMaterial(material).subscribe(
      (data) => {
        console.log("deleted item", data)
      });
  }


}
