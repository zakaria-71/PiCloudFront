import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { JwtService } from 'src/app/service/jwt.service';

interface User {
  name: string;
  email: string;
  image: string;
  imageUrl?: SafeUrl;
  isAdmin?:boolean // Make imageUrl property optional
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];
  
  constructor(private service: JwtService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.fetchUserData();
  }
  isAdmin(email: string): boolean {
    return email === 'admin@example.com'; 
  }

  fetchUserData(): void {
    this.service.hello().subscribe(
      (response) => {
        this.users = response;
        console.log(this.users);
        this.users.forEach((user) => {
          user.isAdmin= this.isAdmin(user.email);
          user.imageUrl = this.sanitizeImageUrl(user.image);
        });
      }
    );
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
}
