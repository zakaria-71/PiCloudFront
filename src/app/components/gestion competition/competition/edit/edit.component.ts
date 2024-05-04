import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CompetitionService} from "../../services/competition.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls:['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  competition: any;
  formErrors: any = {};

  constructor(
    private compService: CompetitionService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['competitionId'];
    this.compService.getCompetition(this.id).subscribe(
      data => {
        this.competition = data;
      }
    )
  }

  update(): void {
    if (this.isFormValid()) {
      this.compService.updateCompetition(this.competition).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
    }
  }
  isFormValid(): boolean {
    this.formErrors = {};
    if (this.competition.nom && this.competition.nom.length < 5) {
      this.formErrors.team = 'Minimum 5 caractères requis.';
    }
    return Object.keys(this.formErrors).length === 0;
  }
}
