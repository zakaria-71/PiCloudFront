import {Component, OnInit} from '@angular/core';
import {Team} from "../../BackOffice/gestion competition/models/team.model";
import {Competition} from "../../BackOffice/gestion competition/models/competition.model";
import {Router} from "@angular/router";
import {CompetitionService} from "../../BackOffice/gestion competition/services/competition.service";
import {TeamService} from "../../BackOffice/gestion competition/services/team.service";

@Component({
  selector: 'app-teamss',
  templateUrl: './teamss.component.html',
  styleUrls: ['./teamss.component.scss']
})
export class TeamssComponent implements OnInit {
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
