import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ReservationCService } from 'src/app/service/reservation.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Router } from '@angular/router';
import { Calendar, CalendarOptions } from 'fullcalendar';
import interactionPlugin from '@fullcalendar/interaction'; // Import the interactionPlugin

@Component({
  selector: 'app-calendar',
  templateUrl: './calendarRes.component.html',
  styleUrls: ['./calendarRes.component.scss']
})
export class CalendarResComponent implements OnInit, AfterViewInit {
  @ViewChild('calendar') calendarComponent: any;
  calendar: Calendar;

  constructor(private reservationCService: ReservationCService,  private router: Router) {
    this.calendar = {} as Calendar;
  }

  ngOnInit(): void {
    // Do any initialization that doesn't rely on the view
  }

  ngAfterViewInit(): void {
    // Access the view and its elements safely here
    this.reservationCService.getAllReservationCs().subscribe(reservations => {
      const events = reservations.map(reservation => ({
        title: 'Reservation',
        start: `${reservation.startd}T${reservation.startHour}`,
        end: `${reservation.finald}T${reservation.finalHour}`
      }));

      this.calendar = new Calendar(this.calendarComponent.nativeElement, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: events
      });

      this.calendar.render();
    });
  }

  navigateToHome() {
    // Navigate to the home page
    this.router.navigate(['/']);
  }

  navigateToReservations() {
    // Navigate to the reservations page
    this.router.navigate(['/reservations']);
  }

  handleEventClick(eventInfo: any) {
    const eventName = eventInfo.event.title || 'Reservation'; // Use title if available
    alert(`Event clicked: ${eventName}`);
  }

  handleDateClick(arg: any) {
    const clickedDate = arg.dateStr; // Adjust based on library argument structure
    alert(`Date clicked: ${clickedDate}`);
  }
}