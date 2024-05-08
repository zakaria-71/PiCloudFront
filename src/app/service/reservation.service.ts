// src/app/services/reservationc.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationC } from '../modals/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationCService {
  private baseUrl: string = 'http://localhost:9090/api/reservationcs/';

  constructor(private http: HttpClient) { }

  addReservationC(reservationC: ReservationC): Observable<ReservationC> {
    return this.http.post<ReservationC>(this.baseUrl + 'add', reservationC);
  }

  getAllReservationCs(): Observable<ReservationC[]> {
    return this.http.get<ReservationC[]>(this.baseUrl + 'all');
  }

  getReservationCById(id: number): Observable<ReservationC> {
    return this.http.get<ReservationC>(`${this.baseUrl}${id}`);
  }

  updateReservationC(id: number, reservationC: ReservationC): Observable<ReservationC> {
    return this.http.put<ReservationC>(`${this.baseUrl}update/${id}`, reservationC);
  }

  deleteReservationC(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}delete/${id}`);
  }

  addReservationAffectClass(idC: number | undefined, reservationC: ReservationC): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}affect/${idC}`, reservationC);
  }
 
  updateReservationState(reservationId: number, newState: string): Observable<any> {
    const url = `${this.baseUrl}updatestatus/${reservationId}`; // Assuming this is the correct endpoint
    return this.http.put(url, { state: newState });
  }
}
