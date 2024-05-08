// src/app/services/bloc.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bloc } from '../modals/bloc.model';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private baseUrl: string = 'http://localhost:9090/api/blocs/';

  constructor(private http: HttpClient) { }

  // Add a new bloc
  addBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(this.baseUrl + 'add', bloc);
  }


  // Get all blocs
  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(this.baseUrl + 'all');
  }

  // Get a single bloc by ID
  getBlocById(id: number): Observable<Bloc> {
    return this.http.get<Bloc>(`${this.baseUrl}/${id}`);
  }

  // Update a bloc
  updateBloc(id: number, bloc: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.baseUrl}update/${id}`, bloc);
  }

  // Delete a bloc
  deleteBloc(id: number | undefined): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}delete/${id}`);
  }
}
