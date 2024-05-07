import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { JwtService } from 'src/app/service/jwt.service';
import { HttpClient } from '@angular/common/http';

interface User {
  name: string;
  email: string;
  image: string;
  enumClasse: string; // Add enumClasse property
  enumSpecialite: string; // Add enumSpecialite property
  number: string; // Add number property
  nationality: string; // Add nationality property
}

interface Country {
  label: string;
  value: string;
}

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.scss']
})
export class ProfilEditComponent implements OnInit {
  enumClasses: string[] = ['PREMIERE', 'DEUXIEME', 'TROISIEME', 'QUATRIEME', 'CINQUIEME'];
  enumSpecialites: string[] = ['ARCTIC', 'TWIN', 'DS', 'BI'];
   // Ajoutez toutes les nationalités que vous souhaitez inclure
   nationalities: string[] = ['Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Anguillan', 'Citizen of Antigua and Barbuda','Argentine', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian','Belarusian', 'Belgian', 'Belizean', 'Beninese', 'Bermudian', 'Bhutanese', 'Bolivian', 'Citizen of Bosnia and Herzegovina','Botswanan', 'Brazilian', 'British', 'British Virgin Islander', 'Bruneian', 'Bulgarian', 'Burkinan', 'Burmese', 'Burundian','Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Cayman Islander', 'Central African', 'Chadian', 'Chilean','Chinese', 'Colombian', 'Comoran', 'Congolese (Congo)', 'Congolese (DRC)', 'Cook Islander', 'Costa Rican', 'Croatian','Cuban', 'Cymraes', 'Cymro', 'Cypriot', 'Czech', 'Danish', 'Djiboutian', 'Dominican', 'Citizen of the Dominican Republic','Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirati', 'English', 'Equatorial Guinean', 'Eritrean', 'Estonian','Ethiopian', 'Faroese', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German','Ghanaian', 'Gibraltarian', 'Greek', 'Greenlandic', 'Grenadian', 'Guamanian', 'Guatemalan', 'Citizen of Guinea-Bissau','Guinean', 'Guyanese', 'Haitian', 'Honduran', 'Hong Konger', 'Hungarian', 'Icelandic', 'Indian', 'Indonesian', 'Iranian','Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakh', 'Kenyan', 'Kittitian','Citizen of Kiribati', 'Kosovan', 'Kuwaiti', 'Kyrgyz', 'Lao', 'Latvian', 'Lebanese', 'Liberian', 'Libyan','Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Macanese', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian','Maldivian', 'Malian', 'Maltese', 'Marshallese', 'Martiniquais', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian','Moldovan', 'Monegasque', 'Mongolian', 'Montenegrin', 'Montserratian', 'Moroccan', 'Mosotho', 'Mozambican', 'Namibian','Nauruan', 'Nepalese', 'New Zealander', 'Nicaraguan', 'Nigerian', 'Nigerien', 'Niuean', 'North Korean', 'Northern Irish','Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Palestinian', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian','Pitcairn Islander', 'Polish', 'Portuguese', 'Prydeinig', 'Puerto Rican', 'Qatari', 'Romanian', 'Russian', 'Rwandan','Salvadorean', 'Sammarinese', 'Samoan', 'Sao Tomean', 'Saudi Arabian', 'Scottish', 'Senegalese', 'Serbian','Citizen of Seychelles', 'Sierra Leonean', 'Singaporean', 'Slovak', 'Slovenian', 'Solomon Islander', 'Somali','South African', 'South Korean', 'South Sudanese', 'Spanish', 'Sri Lankan', 'St Helenian', 'St Lucian', 'Stateless','Sudanese', 'Surinamese', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese','Tongan', 'Trinidadian', 'Tristanian', 'Tunisian', 'Turkish', 'Turkmen', 'Turks and Caicos Islander', 'Tuvaluan','Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbek', 'Vatican citizen', 'Citizen of Vanuatu', 'Venezuelan', 'Vietnamese','Vincentian', 'Wallisian', 'Welsh', 'Yemeni', 'Zambian', 'Zimbabwean'];
  
  countries: Country[] = []; // Variable to hold the country list
  user: User = {
    name: '',
    email: '',
    image: null,
    enumClasse: '',
    enumSpecialite: '',
    number: '',
    nationality: '',
  };
  imageUrl: SafeUrl | null = null;
  selectedFile: File | null = null;

  constructor(
    private service: JwtService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchUserData();
 
  }

  fetchUserData(): void {
    const email = localStorage.getItem('email');
    this.service.currentUserData(email).subscribe(
      (response: User) => {
        this.user = response;
        if (this.user && this.user.image) {
          const imageBlob = this.b64toBlob(this.user.image);
          const objectURL = URL.createObjectURL(imageBlob);
          this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        }
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  onSubmit() {
    const formData: FormData = new FormData();
    formData.append('name', this.user.name);
    formData.append('file', this.selectedFile);
    formData.append('email', this.user.email);
    formData.append('enumClasse', this.user.enumClasse);
    formData.append('enumSpecialite', this.user.enumSpecialite);
    formData.append('nationality', this.user.nationality);
    formData.append('number', this.user.number);
    this.service.uploadImage(formData).subscribe(response => {
      console.log('Profile updated successfully:', response);
    });
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];
    }
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
