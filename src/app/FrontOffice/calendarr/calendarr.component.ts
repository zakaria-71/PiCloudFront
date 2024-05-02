import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Calendar} from "@fullcalendar/core";
import {CompetitionService} from "../../BackOffice/gestion competition/services/competition.service";
import dayGridPlugin from "@fullcalendar/daygrid";

@Component({
  selector: 'app-calendarr',
  templateUrl: './calendarr.component.html',
  styleUrls: ['./calendarr.component.scss']
})
export class CalendarrComponent implements OnInit  , AfterViewInit {
  @ViewChild('calendar') calendarComponent: any;
  calendar: Calendar;

  constructor(private competitionService: CompetitionService) {
    this.calendar = {} as Calendar;
  }

  ngOnInit(): void {
    // Do any initialization that doesn't rely on the view
  }

  ngAfterViewInit(): void {
    // Access the view and its elements safely here
    this.competitionService.retrieveAll().subscribe((competitions: any) => {
      const events = competitions.map((competition: any) => ({
        title: competition.nom,
        start: competition.dateDebut,
        end: competition.dateDebut
      }));

      this.calendar = new Calendar(this.calendarComponent.nativeElement, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: events
      });

      this.calendar.render();
    });
  }
}
