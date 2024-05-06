import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReservationM} from "../models/ReservationM";

@Injectable({
  providedIn: 'root'
})
export class ReservationMService {


  constructor(private http:HttpClient) { }

  retrieveAll():Observable<ReservationM[]>{
    return this.http.get<ReservationM[]>("http://localhost:8080/findAllReservationM")
  }
  getReservationByUser():Observable<ReservationM[]>{
    return this.http.get<ReservationM[]>("http://localhost:8080/findAllReservationM")
  }
  addReservationM(data:any):Observable<any>{
    return this.http.post("http://localhost:8080/addReservationM" ,data);
  }  

  updateReservationM(data:any,idReservationM:any):Observable<any>{
    return this.http.put("http://localhost:8080/updateReservationM/"+idReservationM ,data);
  }
  getReservationM(idReservationM:any): Observable<ReservationM[]> {
    return this.http.get<ReservationM[]>("http://localhost:8080/findReservationMById/"+idReservationM);
  }

  deleteReservationM(idReservationM:any):Observable<any>{
    return this.http.delete("http://localhost:8080/deleteReservationM/" + idReservationM)
  }
  addReservationMFront(idMaterial:any,data:any):Observable<any>{
    return this.http.post("http://localhost:8080/addReservationM/"+idMaterial ,data);
  }
  sendSMS():Observable<any>{
    return this.http.post("http://localhost:8080/send-sms","sms");
  }
}
