import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";
import {ActivatedRoute} from "@angular/router";
import {TeamService} from "../../services/team.service";

@Component({
  selector: 'app-editt',
  templateUrl: './editt.component.html',
  styleUrls: ['./editt.component.css']
})
export class EdittComponent implements OnInit {
  id: any;
  team: any;
  formErrors: any = {};

  constructor(
    private teamService: TeamService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idTeam'];
    this.teamService.getTeam(this.id).subscribe(
      data => {
        this.team = data;
      }
    )
  }

  update(): void {
    if (this.isFormValid()) {
      this.teamService.updateTeam(this.team).subscribe(
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
    if (this.team.nom && this.team.nom.length < 5) {
      this.formErrors.team = 'Minimum 5 caractères requis.';
    }
    return Object.keys(this.formErrors).length === 0;
  }
}

