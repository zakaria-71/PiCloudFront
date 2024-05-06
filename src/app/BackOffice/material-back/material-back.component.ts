import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ScriptLoaderService } from '../../services/script-loader.service';
import { MaterialService } from "../../services/material.service";
import {ReservationMService} from "../../services/reservation-m.service";
import axios from 'axios';
@Component({
  selector: 'app-material-back',
  templateUrl: './material-back.component.html',
  styleUrls: ['./material-back.component.scss'],
})
export class MaterialBackComponent implements OnInit {
  searchTerm: string = '';
  reservation: any;
  showMaterial: boolean = true;
  table1Data: any;
  table2Data: any;
  materialForm!: FormGroup;
  reservationForm!: FormGroup;
  material: any;
  addMaterialButton = "Add a material"; 
  materialToEdit:number = 0
  file: File | undefined = undefined;
  fileName: string = ''; 
  constructor(private materialService: MaterialService, private ReservationMService: ReservationMService,private scriptLoaderService: ScriptLoaderService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    const scriptUrls = [
      "../../../../assets/BackOffice/js/bootstrap.js",
      "../../../../assets/BackOffice/assets/vendor/libs/jquery/jquery.js",
      "../../../../assets/BackOffice/assets/vendor/libs/popper/popper.js",
      "../../../../assets/BackOffice/assets/vendor/js/bootstrap.js",
      "../../../../assets/BackOffice/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js",
      "../../../../assets/BackOffice/assets/vendor/js/menu.js",
      "../../../../assets/BackOffice/assets/js/main.js",
      "../../../../assets/BackOffice/assets/js/ui-modals.js",
    ];
    this.loadScripts(scriptUrls);
    this.materialForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      image: ['']
    });
    
    this.getData()

  }

  getData(): void {
    this.materialService.retrieveAll().subscribe((data) => {
      this.table1Data = data.filter((item: any) =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.table2Data = this.table1Data;
    });
  }
  updateSearchTerm(event: any): void {
    this.searchTerm = event.target.value;
    this.getData();
  }

  toggleMaterialVisibility(item?:any): void {
    this.showMaterial = !this.showMaterial;
    this.addMaterialButton = this.showMaterial ? "Add a material" : "View Material list";
   if (item)
   { 
    this.materialToEdit = item.idMaterial,
     this.materialForm.patchValue({
      name: item.name,
      description: item.description,
    }) ; return   
  } 
  this.materialToEdit=0
  this.materialForm.reset()
  }

  loadScripts(scriptUrls: string[]): void {
    this.scriptLoaderService.loadScripts(scriptUrls)
      .then(() => {
        console.log('All scripts loaded successfully.');
      })
      .catch(error => {
        console.error('Error loading scripts:', error);
      });
  }


  showReservation(row: any): void {
    this.reservation = row.reservationMS;
  }

  deleteMaterial(material: any): void {
    
    this.materialService.deleteMaterial(material.idMaterial).subscribe(
      (data) => {
        this.getData()
  
       
      });
  }

  get materialNameControl() {
    return this.materialForm.get('name');
  }

  

  uploadFile(file?: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      // Replace 'YOUR_UPLOAD_PRESET' and 'YOUR_CLOUD_NAME' with your Cloudinary credentials
      const uploadPreset = 'ml_default';
      const cloudName = 'dqfcnslya';
  
      // Prepare the data to be sent to Cloudinary
      const formData = new FormData();
     if (file) formData.append('file', file);
      formData.append('upload_preset', uploadPreset);
  
      // Make a POST request to Cloudinary's upload API
      axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, formData)
        .then(response => {
          // Cloudinary will return the URL of the uploaded file in the response
          const imageUrl = response.data.secure_url;
          resolve(imageUrl); // Resolve the promise with the URL
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Cloudinary error response:', error.response.data);
            console.error('Status code:', error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received from Cloudinary:', error.request);
          } else {
            // Something else happened while setting up the request
            console.error('Error setting up Cloudinary request:', error.message);
          }
          reject(error); // Reject the promise with the error
        });
    });
  }
  
  addMaterial(): void {
    if (this.materialForm.valid && this.file) {
      // Upload the file to Cloudinary
      this.uploadFile(this.file).then(imageUrl => {
        // Prepare material data with form data and image URL
        const materialData = {
          ...this.materialForm.value, // Form data
          image: imageUrl // Image URL from Cloudinary
        };
  
        // Add material data to the API
        this.materialService.addMaterial(materialData).subscribe(
          (data) => {
            // Handle successful addition
            this.getData();
            this.toggleMaterialVisibility(); 
            this.materialForm.reset();
            this.file = undefined; // Reset file after successful addition
            this.fileName = ''; // Reset file name after successful addition
          },
          error => {
            console.error('Failed to add material:', error);
            // You can handle errors here, such as displaying an error message to the user.
          }
        );
      }).catch(error => {
        console.error('Failed to upload file:', error);
      });
    } else {
      console.error('Invalid form data or no file selected.');
      // You can handle this case if necessary, e.g., display a message to the user.
    }
  }
  
  
  
  fileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) { // Check if files are selected
      this.file = fileList[0];
      this.fileName = this.file.name;
    }
  }
  
  
  
  editMateriel(): void {
    if (this.materialForm.valid) {
      // Upload the file to Cloudinary

      this.uploadFile(this.file ).then(imageUrl => {
        // Prepare material data with form data and image URL
        console.log("i=",imageUrl)
        const materialData = {
          ...this.materialForm.value, // Form data
          image: imageUrl // Image URL from Cloudinary
        };
  
        // Update material data using the materialToEdit ID
        this.materialService.updateMaterial(materialData, this.materialToEdit).subscribe(
          () => {
            // Handle successful edit
            this.getData();
            this.toggleMaterialVisibility();
            this.materialForm.reset();
          },
          error => {
            console.error('Failed to update material:', error);
            // You can handle errors here, such as displaying an error message to the user.
          }
        );
      }).catch(error => {
        console.error('Failed to upload file:', error);
      });
    } else {
      this.materialForm.markAllAsTouched();
    }
  }
  
  cancelReservation(id:number):void {
    console.log(id)

      this.ReservationMService.deleteReservationM(id).subscribe(
        () => {
          this.getData()
        });
    
  }
  submit ():void{
    this.materialToEdit!==0 ? this.editMateriel() : this.addMaterial()
  }
}
