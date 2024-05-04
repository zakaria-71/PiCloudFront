import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Competition} from "../models/competition.model";
import {Team} from "../models/team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }

  retrieveAll():Observable<Team[]>{
    return this.http.get<Team[]>("http://localhost:9090/getAllTeams")
  }
  addTeam(data:any):Observable<any>{
    return this.http.post("http://localhost:9090/addTeam",data);
  }
  updateTeam(data:any):Observable<any>{
    return this.http.put("http://localhost:9090/updateTeam",data);
  }
  getTeam(idTeam:any): Observable<Team[]> {
    return this.http.get<Team[]>("http://localhost:9090/getTeamById/" + idTeam);
  }

  deleteTeam(idTeam:any):Observable<any>{
    return this.http.delete("http://localhost:9090/deleteTeam/" + idTeam)
  }
}
