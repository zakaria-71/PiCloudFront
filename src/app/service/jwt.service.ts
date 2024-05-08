import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

const BASE_URL = ["http://localhost:9090/"]

interface BanRequest {
  email: string;
  banDurationInDays: number;
}
export interface RegistrationStat {
  month: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  

  constructor(private http: HttpClient, private router: Router) { }
  register(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL+'signup', signupRequest)
  }
  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'login', loginRequest)
  }
  uploadImage(formData: FormData): Observable<any> {
    return this.http.post(BASE_URL + 'api/user', formData, {
      headers: this.createAuhtorizationHeader()
    })
  }

  currentUserData(email: string): Observable<any> {
    return this.http.get(`${BASE_URL}api/currentUserData?email=${email}`, {
      headers: this.createAuhtorizationHeader()
    });
  }
  
  hello(): Observable<any> {
    return this.http.get(BASE_URL + 'api/list', {
      headers: this.createAuhtorizationHeader()
    })
  }
  banUser(bodyBan:BanRequest): Observable<void> {
    return this.http.post<void>(`${BASE_URL}api/ban`, bodyBan, {
      headers: this.createAuhtorizationHeader()
    });
  }

  unbanUser(email: string): Observable<void> {
    return this.http.post<void>(`${BASE_URL}api/unban`,email, {
      headers: this.createAuhtorizationHeader()
    });
  }

  isUserBanned(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${BASE_URL}api/is-banned?email=${email}`, {
      headers: this.createAuhtorizationHeader()
    });
  }
  getUserRegistrationStats(): Observable<RegistrationStat[]> {
    const headers = this.createAuhtorizationHeader();
    return this.http.get<any[]>(`${BASE_URL}api/user-registration-stats`, {headers})
      .pipe(
        map(response => response.map(item => ({
          month: item[0],
          count: item[1]
        } as RegistrationStat)))
      );
  }
  getIdUserByEmail():Observable<any>{
    const email= localStorage.getItem('email');
    return this.http.get(`${BASE_URL}api/currentUserId?email=${email}`, {
      headers: this.createAuhtorizationHeader()
    });
  }

  private createAuhtorizationHeader() {
    const jwtToken1 = localStorage.getItem('jwtToken');
    if (jwtToken1) {
      console.log("JWT token found in local storage", jwtToken1);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken1
      )
    } else {
      console.log("JWT token not found in local storage");
      return new HttpHeaders();
    }
  
  }


  logout():void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('email');
    this.router.navigateByUrl("");   
  }
  isAdmin(): boolean {
    // Implement logic to check if the user is an admin based on JWT or other authentication mechanism
    const email = localStorage.getItem('email');
    return email === 'admin@example.com'; // Change this to match your admin email
  }

}