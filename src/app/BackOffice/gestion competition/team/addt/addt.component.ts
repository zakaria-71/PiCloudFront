import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CompetitionService} from "../../services/competition.service";
import {Competition} from "../../models/competition.model";
import {TeamService} from "../../services/team.service";
import {Team} from "../../models/team.model";

@Component({
  selector: 'app-addt',
  templateUrl: './addt.component.html',
  styleUrls: ['./addt.component.css']
})
export class AddtComponent {
  teamForm: FormGroup;
  submitted = false;
  constructor(
    private router: Router,
    private teamService: TeamService,
    private fb: FormBuilder
  ) {
    this.teamForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(5)]],

    });
  }

  saveTeam(): void {
    if (this.teamForm.valid) {
      const team: Team = {
        nom: this.teamForm.value.nom,
      };

      this.teamService
        .addTeam(team)
        .subscribe((data) => {
          this.submitted = true;
        });

      this.router.navigate(['teams']);
    } else {

      this.teamForm.markAllAsTouched();
    }
  }

}
