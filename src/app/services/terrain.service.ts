import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Terrain } from '../entities/Terrain';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  private baseUrl="http://localhost:8080";
  constructor(private http: HttpClient){}
  getTerrains(): Observable<Terrain[]>{
    return this.http.get<Terrain[]>(this.baseUrl+'/findAllTerrains');
  }
  addTerrain(data:any):Observable<any>{
    return this.http.post(this.baseUrl+'/addTerrain',data);
  }
  deleteTerrain(idTerrain:any):Observable<any>{
    return this.http.delete(this.baseUrl+'/deleteTerrain/'+idTerrain)
  }
  getTerrainById(idTerrain:any):Observable<Terrain[]>{
    return this.http.get<Terrain[]>(this.baseUrl+'/findTerrainById/'+idTerrain);
  }
  updateTerrain(idTerrain:any,data:any):Observable<any>{
    return this.http.put(this.baseUrl+'/updateTerrain/'+idTerrain,data)
  }
}
