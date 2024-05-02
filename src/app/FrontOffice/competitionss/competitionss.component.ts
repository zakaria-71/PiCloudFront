import {Component, OnInit} from '@angular/core';
import {Competition} from "../../BackOffice/gestion competition/models/competition.model";
import {Router} from "@angular/router";
import {CompetitionService} from "../../BackOffice/gestion competition/services/competition.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-competitionss',
  templateUrl: './competitionss.component.html',
  styleUrls: ['./competitionss.component.scss']
})
export class CompetitionssComponent implements OnInit{
  ToShow: Competition[] = [];
  filteredTeams: Competition[] = [];
  filterText: string = '';

  constructor(
    private router: Router,
    private competitionService: CompetitionService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.competitionService.retrieveAll().subscribe((data) => {
      this.ToShow = data;
      this.filteredTeams = data;
      this.checkTodayCompetition();
    });
  }


  checkTodayCompetition() {
    const today = new Date();
    this.ToShow.forEach((competition) => {
      const competitionDate = new Date(competition.dateDebut);
      if (this.isSameDate(competitionDate, today)) {
        this.toastr.success('Une compétition a lieu aujourd\'hui !', 'Information', { timeOut: 3000 });
      }
    });
  }


  isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }


  filterOffers() {
    console.log('Filtering teams...');
    this.filteredTeams = this.ToShow.filter(team =>
      team.nom && team.nom.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
