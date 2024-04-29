import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Team } from "../models/team.model";
import { TeamService } from "../services/team.service";
import {CompetitionService} from "../services/competition.service";
import {Competition} from "../models/competition.model";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  ToShow: Team[] = [];
  filteredTeams: Team[] = [];
  filterText: string = '';
  ToShow1:Competition[]=[];
  constructor(private router: Router,private competitionService:CompetitionService ,private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.retrieveAll().subscribe(
      (data) => {
        this.ToShow = data;
        this.filteredTeams = data;
      }
    );
    this.competitionService.retrieveAll().subscribe(
      (data)=>{
        this.ToShow1=data;
      }
    )
  }

  edit(idTeam: any) {
    this.router.navigate(['teams/editt/' + idTeam]); // Corrected: Changed 'editt' to 'edit'
  }

  delete(idTeam: any) {
    this.teamService.deleteTeam(idTeam).subscribe(
      data => {
        window.location.reload();
      }
    );
  }

  filterOffers() {
    console.log('Filtering teams...');
    this.filteredTeams = this.ToShow.filter(team =>
      team.nom && team.nom.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
  save(): void {
    this.competitionService.affectTeamToCompetition(this.selectedCompetitionId, this.selectedTeamId, {}).subscribe(
      response => {
        console.log('Team assigned to competition successfully:', response);
      }
    );
  }
  selectedTeamId?: number;
  selectedCompetitionId?: number;
}
