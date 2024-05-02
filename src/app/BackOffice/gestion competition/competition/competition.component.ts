import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; // Importez ToastrService
import { Competition } from '../models/competition.model';
import { CompetitionService } from '../services/competition.service';
import { Router } from '@angular/router';
import {Team} from "../models/team.model";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
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

  // Méthode pour vérifier les compétitions d'aujourd'hui
  checkTodayCompetition() {
    const today = new Date();
    this.ToShow.forEach((competition) => {
      const competitionDate = new Date(competition.dateDebut);
      if (this.isSameDate(competitionDate, today)) {
        this.toastr.success('Une compétition a lieu aujourd\'hui !', 'Information', { timeOut: 3000 });
      }
    });
  }

  // Méthode pour vérifier si deux dates sont les mêmes (ignorant l'heure)
  isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  edit(competitionId: any) {
    this.router.navigate(['admin/competitions/edit/' + competitionId]);
  }

  delete(competitionId: any) {
    this.competitionService.deleteCompetition(competitionId).subscribe(() => {
      window.location.reload();
    });
  }

  details(competitionId: any) {
    this.router.navigate(['admin/competitions/more/' + competitionId]);
  }
  filterOffers() {
    console.log('Filtering teams...');
    this.filteredTeams = this.ToShow.filter(team =>
      team.nom && team.nom.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
