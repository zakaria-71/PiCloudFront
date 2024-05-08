import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassComponent } from '../components/reservationClasse/class/class.component';
import {Class} from "../modals/class.model";
import {Bloc} from "../modals/bloc.model";

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private baseUrl: string = 'http://localhost:9090/api/classes/';

  constructor(private http: HttpClient) { }
  findAll(): Observable<ClassComponent[]> {
    return this.http.get<ClassComponent []>(this.baseUrl + 'all');
  }
  addClass(body:any): Observable<ClassComponent[]> {
    return this.http.post<ClassComponent []>(this.baseUrl + 'add',body);
  }
  findById(id: number): Observable<Class> {
    return this.http.get<Class>(`${this.baseUrl}${id}`);
  }
  updateClass(id: number, clas: Class, blocId: number): Observable<Class> {
    const url = `${this.baseUrl}update/${id}?blocId=${blocId}`;  // Check if the base URL ends with '/'
    return this.http.put<Class>(url, clas);
  }




  deleteClass(id: number | undefined): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}delete/${id}`);
  }

  addClassAndAffectBloc(idBloc: number, clas: Class): Observable<Class> {
    const body = { ...clas, bloc: { idB: idBloc } }; // Ensure you're constructing the body correctly
    return this.http.post<Class>(`${this.baseUrl}addclaasAffectBloc/${idBloc}`, body);
  }


}
