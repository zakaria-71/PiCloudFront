import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { JwtService } from 'src/app/service/jwt.service';
interface User {
  name: string;
  email: string;
  image: string; 
  isAdmin: boolean,
  enumClasse: string; // Add enumClasse property
  enumSpecialite: string; // Add enumSpecialite property
  number: string; // Add number property
  nationality: string; // Add nationality property
  creationDay:Date;
}
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})

export class ProfilComponent implements OnInit{

  user: User = {
    name: '',
    email: '',
    image: null, // Initialize image property to null
    isAdmin:false,
    enumClasse: '',
    enumSpecialite: '',
    number: '',
    nationality: '',
    creationDay:  new Date()
  };

  imageUrl: SafeUrl | null=null;
  constructor( private service: JwtService, private sanitizer: DomSanitizer) {
  }
  
  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    // Make an HTTP request to fetch user data including the image URL
    const email = localStorage.getItem('email');
    this.service.currentUserData(email).subscribe(
      (response) => {
        // Assuming the response contains user data including the image URL
        this.user = response;
        // Assuming CreationDay is a string in the format "2024-05-04T23:00:00.000+00:00"
        this.user.creationDay = new Date(response.creationDate);
        this.user.isAdmin=this.service.isAdmin()
        if (this.user && this.user.image) {
        const imageBlob = this.b64toBlob(this.user.image);
        const objectURL = URL.createObjectURL(imageBlob);
        this.imageUrl=this.sanitizer.bypassSecurityTrustUrl(objectURL);
        }
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  b64toBlob(b64Data: string, contentType = '', sliceSize = 512): Blob {
    console.log(b64Data)
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
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
