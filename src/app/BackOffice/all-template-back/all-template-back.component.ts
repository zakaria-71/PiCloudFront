<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {ScriptLoaderService} from "../../services/script-loader.service";
=======
import { Component } from '@angular/core';
>>>>>>> origin/main

@Component({
  selector: 'app-all-template-back',
  templateUrl: './all-template-back.component.html',
  styleUrls: ['./all-template-back.component.scss']
})
<<<<<<< HEAD
export class AllTemplateBackComponent implements OnInit{

  constructor(private scriptLoaderService: ScriptLoaderService) { }

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
=======
export class AllTemplateBackComponent {

>>>>>>> origin/main
}
