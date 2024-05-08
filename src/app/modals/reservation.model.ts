// src/app/models/reservationc.model.ts
import {Class} from "./class.model";

export interface ReservationC {
  idR?: number;  // Optional for creation
  startd: Date; // Using JavaScript Date object to handle both date and time
  startHour: string; // Stored as a string in the format HH:mm
  finalHour: string; // Stored as a string in the format HH:mm
  finald: Date; // Using JavaScript Date object to handle both date and time
  state: string;
  classId?: number; // Storing the class ID only, as full class object handling is not needed here
}
