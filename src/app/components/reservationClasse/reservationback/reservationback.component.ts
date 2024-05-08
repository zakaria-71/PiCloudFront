import {Component, OnInit} from '@angular/core';
import {ReservationCService} from "../../../service/reservation.service";
import {ReservationC} from "../../../modals/reservation.model";
import {Bloc} from "../../../modals/bloc.model";
import {Class} from "../../../modals/class.model";
import { AppComponent } from 'src/app/app.component';
import { NgModule } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reservationback',
  templateUrl: './reservationback.component.html',
  styleUrls: ['./reservationback.component.scss'],
  providers: []
})
export class ReservationbackComponent implements OnInit {
  reservations: ReservationC[] = [];
  class: Class[] = [];
  selectedDate: Date | null = null; // Initialize with null
  filteredReservations: ReservationC[] = [];
  searchText: string = ''; 
  // Assuming reservation.startd is a string like "2024-05-22"

  constructor(private reservationService: ReservationCService) { }


  ngOnInit(): void {
    this.loadReservations();
   
  }

  loadReservations() {
    this.reservationService.getAllReservationCs().subscribe(reservations => {
      this.reservations = reservations;
      this.filteredReservations = reservations; // Initialize filtered reservations with all reservations

      console.log(reservations);

    });
  }

  filterReservations() {
    if (this.searchText.trim() === '') {
      // If search text is empty, show all reservations
      this.filteredReservations = this.reservations;
    } else {
      // Filter reservations based on state
      this.filteredReservations = this.reservations.filter(reservation => {
        // Check if the reservation state matches the search text
        const stateMatch = reservation.state.toLowerCase();
  
        // Return true if the state matches the search text
        return stateMatch.startsWith(this.searchText.toLowerCase());
      });
    }
  }
  
  toggleConfirmation(reservation: ReservationC) {
    const newState = reservation.state === 'confirmed' ? 'unconfirmed' : 'confirmed';
    
    // Update the backend first
    this.reservationService.updateReservationState(reservation.idR!, newState).subscribe(() => {
      // If the backend update is successful, update the frontend state
      reservation.state = newState;
    }, error => {
      // Handle errors, such as if the backend update fails
      console.error('Error updating reservation state:', error);
    });
  }
  generatePDF() {
    // Wait for the HTML content to be rendered
    setTimeout(() => {
      // Get the HTML element containing the reservation list
      const element = document.getElementById('reservationList');

      // Define colors for confirmed and unconfirmed states
      const confirmedColor = '#4CAF50';
      const unconfirmedColor = '#F44336';

      // Use html2canvas to capture the HTML content as an image
      html2canvas(element!, { scale: 4, width: element!.scrollWidth, height: element!.scrollHeight }).then((canvas) => {
        // Set dimensions for the PDF with a 1.5x scaling factor
        const pdf = new jsPDF('p', 'pt', [canvas.width * 4.5, canvas.height * 6.5]);

        // Get the context of the canvas
        const ctx = canvas.getContext('2d');

        // Get table rows
        const rows = element!.querySelectorAll('tr');

        // Loop through rows to set colors for confirmed and unconfirmed states
        rows.forEach((row, rowIndex) => {
          const stateCell = row.querySelector('td:last-child');
          const state = stateCell?.textContent?.trim().toLowerCase();

          // Set background color based on state
          const bgColor = state === 'confirmed' ? confirmedColor : state === 'unconfirmed' ? unconfirmedColor : '';

          // Set background color for the entire row
          ctx!.fillStyle = bgColor;
          ctx!.fillRect(0, row.offsetTop, canvas.width, row.offsetHeight);

          // Draw the row over the canvas
          pdf.internal.scaleFactor = 1;
          pdf.addImage(canvas.toDataURL('image/png', 0.9), 'PNG', 0, 0, canvas.width, canvas.height);
        });

        // Save the PDF
        pdf.save('reservation-list.pdf');
      });
    }, 500); // Adjust the delay as needed
  }
}
