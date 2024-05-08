import {Component, OnInit} from '@angular/core';
import {ReservationC} from "../../../modals/reservation.model";
import {ReservationCService} from "../../../service/reservation.service";
import {FormGroup, FormBuilder ,Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  newReservation: ReservationC = {
    startd: new Date(),
    startHour: '',
    finalHour: '',
    finald: new Date(),
    state: '',
    classId: 0
  };
  reservations: ReservationC[] = [];
  isVisibleUpdateForm: boolean = false;
  currentReservation: ReservationC | null = null;
  reservationForm: FormGroup;
  
  constructor(private reservationService: ReservationCService, private fb: FormBuilder) { 
    this.reservationForm = this.fb.group({
      startd: ['', Validators.required],
      startHour: ['', [Validators.required, this.validateStartHour]], // Add custom validator for startHour
      finalHour: ['', [Validators.required, this.validateFinalHour]], // Add custom validator for finalHour
      finald: ['', Validators.required],
      state: ['', Validators.required],
      classId: [0, Validators.required] 
    });
  }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations() {
    this.reservationService.getAllReservationCs().subscribe(reservations => {
      this.reservations = reservations;
      
      console.log(reservations)
    });
  }

  onSubmit() {
    this.reservationService.addReservationAffectClass(this.newReservation.classId, this.newReservation).subscribe(() => {
      this.loadReservations(); // Reload reservations after adding a new one
      this.resetForm(); // Reset the form fields after submission
    });
  }

  resetForm() {
    this.newReservation = {
      startd: new Date(), 
      startHour: '',
      finalHour: '',
      finald: new Date(),
      state: '',
      classId: 0
    };
  }
  validateStartHour(control: any) {
    const hourPattern = /^(0[8-9]|1[0-6]):[0-5][0-9]$/; // Regular expression to match hour format (08:00 - 16:59)
    if (!control.value.match(hourPattern)) {
      return { 'invalidStartHour': true }; // Return error if format is invalid
    }
    return null; // Return null if validation passes
  }

  // Custom validator function for finalHour
  validateFinalHour(control: any) {
    const hourPattern = /^(0[8-9]|1[0-6]):[0-5][0-9]$/; // Regular expression to match hour format (08:00 - 16:59)
    if (!control.value.match(hourPattern)) {
      return { 'invalidFinalHour': true }; // Return error if format is invalid
    }
    return null; // Return null if validation passes
  }
  removeReservation(idR: number | undefined): void {
    if (idR && confirm('Are you sure you want to delete this reservation?')) {
      this.reservationService.deleteReservationC(idR).subscribe(() => {
        console.log('reservation deleted successfully');
        this.loadReservations(); // Refresh the table after deletion

      });
      this.loadReservations();

    }
  }
  editReservation(reservation: ReservationC): void {
    this.currentReservation = reservation;
    this.isVisibleUpdateForm = true;
    this.reservationForm.patchValue(reservation);
  }

  updateReservation(id: number | undefined): void {
    if (this.currentReservation) {
      const updatedReservation: ReservationC = {
        ...this.currentReservation,
        ...this.reservationForm.value
      };
      this.reservationService.updateReservationC(id!, updatedReservation).subscribe(() => {
        this.loadReservations(); // Refresh the list after update
        this.closeForm();
      });
    }
  }

  closeForm(): void {
    this.isVisibleUpdateForm = false;
    this.currentReservation = null;
  }
}
