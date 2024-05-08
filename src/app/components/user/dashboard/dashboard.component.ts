import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { JwtService } from 'src/app/service/jwt.service';
import { Observable, forkJoin } from 'rxjs';
interface User {
  name: string;
  email: string;
  image: string;
  imageUrl?: SafeUrl;
  isBanned?: boolean; // Add isBanned property
  isAdmin?: boolean;
}
interface BanRequest {
  email: string;
  banDurationInDays: number;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];

  constructor(private service: JwtService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.fetchUserData();
  }

  fetchUserData(): void {
    this.service.hello().subscribe(
      (response) => {
        this.users = response;
        console.log(this.users);
  
        // Create an array of observables to fetch ban status for each user
        const banStatusObservables = this.users.map(user => this.service.isUserBanned(user.email));
  
        // Use forkJoin to execute all observables concurrently
        forkJoin(banStatusObservables).subscribe(
          (banStatuses: boolean[]) => {
            // Update the isBanned property for each user based on the fetched ban statuses
            this.users.forEach((user, index) => {
              user.isBanned = banStatuses[index];
            });
          },
          (error) => {
            console.error('Error fetching ban status:', error);
          }
        );
  
        // Additional processing for each user (e.g., setting isAdmin and imageUrl) can be done here
        this.users.forEach((user) => {
          user.isAdmin = this.isAdmin(user.email);
          user.imageUrl = this.sanitizeImageUrl(user.image);
        });
      }
    );
  }

  isAdmin(email: string): boolean {
    return email === 'admin@example.com';
  }

  sanitizeImageUrl(imageData: string): SafeUrl {
    const objectURL = URL.createObjectURL(this.b64toBlob(imageData));
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  b64toBlob(b64Data: string, contentType = ''): Blob {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  banUser(email: string): void {
    const banRequest: BanRequest = {
      email: email,
      banDurationInDays: 7 // Example ban duration
    };

    this.service.banUser(banRequest).subscribe(() => {
      const user = this.users.find(u => u.email === email);
      console.log(user);
      if (user) {
        user.isBanned = true;
        console.log('User banned successfully');
      }
    });
  }

  unbanUser(email: string): void {
    this.service.unbanUser(email).subscribe(() => {
      const user = this.users.find(u => u.email === email);
      if (user) {
        user.isBanned = false;
        console.log('User unbanned successfully');
      }
    });
  }

  
  
}