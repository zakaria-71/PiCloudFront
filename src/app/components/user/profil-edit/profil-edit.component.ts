import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { JwtService } from 'src/app/service/jwt.service';
interface User {
  name: string;
  email: string;
  image: string; 
}
@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.scss']
})
export class ProfilEditComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    image: null // Initialize image property to null
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

  
  selectedFile: File | null = null;
  onFileSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit() {
    const formData: FormData = new FormData();
    formData.append('name', this.user.email);
    formData.append('file', this.selectedFile);
    this.service.uploadImage(formData).subscribe(response => {
      console.log('Profile updated successfully:', response);
    });
  }

  b64toBlob(b64Data: string, contentType = '', sliceSize = 512): Blob {
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
