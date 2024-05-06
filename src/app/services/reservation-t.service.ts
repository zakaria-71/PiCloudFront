import { Injectable } from '@angular/core';
import { ReservationT } from '../entities/ReservationT';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/User';
@Injectable({
  providedIn: 'root'
})
export class ReservationTService {
  private baseUrl="http://localhost:8080";
  constructor(private http: HttpClient){}
  getReservationTs(): Observable<ReservationT[]>{
    return this.http.get<ReservationT[]>(this.baseUrl+'/findAllReservationT');
  }
  addReservationT(data:any):Observable<any>{
    return this.http.post(this.baseUrl+'/addReservationT',data);
  }
  deleteReservationT(idResT:any):Observable<any>{
    return this.http.delete(this.baseUrl+'/deleteReservationT/'+idResT);
  }
  getReservationTById(idResT:any):Observable<ReservationT[]>{
    return this.http.get<ReservationT[]>(this.baseUrl+'/findReservationTById/'+idResT);
  }
  updateReservationT(idResT:any,data:any):Observable<any>{
    return this.http.put(this.baseUrl+'/updateReservationT/'+idResT,data)
  }
  reserve(idResT:number, idUser: any){
    return this.http.get(this.baseUrl+'/terrains/reserve/'+idUser+'/'+idResT);
  }
  getAvailableReservations(): Observable<ReservationT[]>{
    return this.http.get<ReservationT[]>(this.baseUrl+'/reservations/available');
  }
  findUserById(idUser: number):Observable<any>{
    return this.http.get<any>(this.baseUrl+'/findUserById/'+idUser);
  }
  getReservationsByUser(idUser:number):Observable<ReservationT[]>{
    return this.http.get<ReservationT[]>(this.baseUrl+'/reservationTs/'+idUser)
  }
  getReservationByTerrain(idTerrain:number):Observable<ReservationT[]>{
    return this.http.get<ReservationT[]>(this.baseUrl+'/reservationTs/terrain/'+idTerrain);
  }
  
}
