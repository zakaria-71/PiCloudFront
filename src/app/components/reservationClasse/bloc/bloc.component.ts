import { Component, OnInit } from '@angular/core';
import { ClassComponent } from '../class/class.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlocService } from 'src/app/service/bloc.service';
import { Bloc } from 'src/app/modals/bloc.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.scss']
})
export class BlocComponent implements OnInit{
  idB!: number;
  name!: string;
  capacity!: number;
  classes!: ClassComponent[];
  blocForm: FormGroup;
  blocs: Bloc[] = [];
  isVisibleUpdateForm: boolean = false;
  currentBloc: Bloc | null = null;

  constructor(private fb: FormBuilder, private blocService: BlocService , private router: Router) {
    // Initialize the form group
    this.blocForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]], // Adjust as necessary
      capacity: [0, [Validators.required, Validators.min(54)]], // Adjust as necessary
    });
  }

  ngOnInit(): void {
    this.loadBlocs();
  }

  loadBlocs(): void {
    this.blocService.getAllBlocs().subscribe((data: Bloc[]) => {
      this.blocs = data;
    });
  }

  onDelete(idB: number | undefined): void {
    if (idB && confirm('Are you sure you want to delete this bloc?')) {
      this.blocService.deleteBloc(idB).subscribe(() => {
        this.loadBlocs(); // Refresh the table after deletion
        console.log('Bloc deleted successfully');
      });
      this.loadBlocs();

    }
  }
  navigateToClass() {
    // Navigate to the home page
    this.router.navigate(['/class']);
  }

  onSubmit() {
    if (this.blocForm.valid) {
      const bloc: Bloc = {
        name: this.blocForm.get('name')?.value,
        capacity: this.blocForm.get('capacity')?.value,
      };

      // Call createBloc function from the Bloc service
      this.blocService.addBloc(bloc).subscribe((response) => {
        console.log('Bloc created successfully:', response);
        this.blocForm.reset(); // Clear the form after successful submission
        this.loadBlocs(); // Refresh the table after adding a new bloc
      });
    } else {
      console.warn('Form is not valid!');
    }
  }
  editBloc(bloc: Bloc): void {
    this.currentBloc = bloc;
    this.isVisibleUpdateForm = true;
    this.blocForm.patchValue(bloc);
  }

  updateBloc(id: number| undefined): void {
    if (this.currentBloc) {
      const updatedBloc: Bloc = {
        ...this.currentBloc,
        ...this.blocForm.value
      };
      this.blocService.updateBloc(id!, updatedBloc).subscribe(() => {
        this.loadBlocs(); // Refresh the list after update
        this.closeForm();
      });
    }
  }

  closeForm(): void {
    this.isVisibleUpdateForm = false;
    this.currentBloc = null;
}
}