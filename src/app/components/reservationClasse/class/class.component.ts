import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BlocComponent } from '../bloc/bloc.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { ClassService } from 'src/app/service/class.service';
import { AbstractControl, FormBuilder , FormGroup , ValidationErrors, Validators } from '@angular/forms';
import {Class} from "../../../modals/class.model";
import {Observable} from "rxjs";
import {Bloc} from "../../../modals/bloc.model";
import {BlocService} from "../../../service/bloc.service";
import { Chart, ChartOptions } from 'chart.js'; // Import from 'chart.js/auto'

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent  implements OnInit, OnDestroy {
    idC!: number;
    num!: number;
    reservationCS!: ReservationComponent[];
    bloc!: BlocComponent;
    liberated!: boolean;
    classComponents: ClassComponent[]= [];
    classForm:FormGroup;
  isVisibleAddForm = false;
  isVisibleUpdateForm = false;
  currentClass: ClassComponent = {} as ClassComponent;  // Example initialization with type assertion
  blocs: Bloc[] = [];

    constructor(private ClassService: ClassService ,private BlocService: BlocService, private formBuilder :  FormBuilder,private cd: ChangeDetectorRef) {

      this.classForm = this.formBuilder.group({
        num: ['', [Validators.required, this.maxNumberValidator]],
        liberated: ['', Validators.required],
        bloc: ['', Validators.required]
      });
    }
    maxNumberValidator(control: AbstractControl): ValidationErrors | null {
      const number = Number(control.value);
      if (isNaN(number)) {
        // Return an error if the value is not a number
        return { 'notANumber': true };
      }
      if (number > 416) {
        // Return an error if the number is higher than 416
        return { 'maxNumberExceeded': true };
      }
      // Return null if validation passes
      return null;
    }
  addClass() {
    const formData = this.classForm.value;
    const idBloc = formData.bloc; // Assuming bloc is the id of the bloc

    // Reset the bloc field to null before submitting the form
    formData.bloc = null;

    this.ClassService.addClassAndAffectBloc(idBloc, formData).subscribe({
      next: (data: any) => {
        // Reload classes after adding a new one
        this.loadClasses();
        // Reset the form after successful addition
        this.classForm.reset();
      }
    });

    console.log(formData);
  }
  ngOnInit() {

    this.loadClasses();
    this.loadBlocs();
    this.classForm = this.formBuilder.group({
      // Use the custom validator for the 'number' field
      number: ['', [Validators.required, this.maxNumberValidator]],
    });
 }


    loadClasses() : void{
      console.log('loadClasses');
      this.ClassService.findAll().subscribe(classComponents => {this.classComponents = classComponents;
          this.renderChart();

        });


    }

  loadBlocs() {
    this.BlocService.getAllBlocs().subscribe({
      next: (blocs) => {
        this.blocs = blocs;
      },
      error: (err) => console.error('Failed to load blocs', err)
    });
  }

  
  deleteClass(id: number): void {
    this.ClassService.deleteClass(id).subscribe({
      next: () => this.loadClasses(),
      error: (err) => console.error(err)
    });
    this.loadClasses();

  }

  selectClassForUpdate(classDetail: ClassComponent): void {
    this.classForm.patchValue({
      num: classDetail.num,
      liberated: classDetail.liberated,
      bloc: classDetail.bloc?.idB  // Assuming you're storing the bloc ID in the form
    });
  }

  addClassAndAffectBloc(): void {
    let blocId = this.classForm.value.bloc; // Ensure this is set to the correct value
    this.ClassService.addClassAndAffectBloc(blocId, this.classForm.value).subscribe({
      next: (data: any) => {
        this.loadClasses();
        this.classForm.reset();
      },
      error: (err) => console.error(err)
    });
  }
  showAddForm(): void {
    this.isVisibleAddForm = true;
    this.isVisibleUpdateForm = false;
    this.classForm.reset();
  }

  showUpdateForm(classDetail: ClassComponent): void {
    this.isVisibleUpdateForm = true;
    this.isVisibleAddForm = false;
    this.currentClass = classDetail;
    this.classForm.patchValue(classDetail);
  }

  closeForm(): void {
    this.isVisibleAddForm = false;
    this.isVisibleUpdateForm = false;
    this.classForm.reset();
  }
 

  updateClass(idC: number): void {
    console.log('Form Value on Submit:', this.classForm.value);

    const blocId = this.classForm.value.bloc?.idB;
    this.loadClasses();

    if (!blocId) {
      console.error('Bloc ID is missing');
      return;
    }

    this.ClassService.updateClass(idC, this.classForm.value, blocId).subscribe({
      next: () => {
        this.loadClasses();
        this.closeForm();
      },
      error: (error) => {
        console.error('Failed to update class', error);
      }
    });
  }

  liberatedClassesCount: number = 0;
  nonLiberatedClassesCount: number = 0;
  chart: any;
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  renderChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('classChart', {
      type: 'bar', // Change the chart type to 'bar'
      data: {
        labels: ['Free classes', 'Reserved Classes'],
        datasets: [{
          label: 'Number of Classes',
          data: [this.liberatedClassesCount, this.nonLiberatedClassesCount],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true // Start y-axis at zero
          }
        },
        plugins: {
          legend: {
            display: false // Hide legend
          }
        },
        responsive: false,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Class Statistics'
        }
      } as ChartOptions<'bar'> // Change type assertion to 'bar'
    });
   this.calculateStatistics();
    }

  calculateStatistics(): void {
    this.liberatedClassesCount = this.classComponents.filter(c => c.liberated).length;
    this.nonLiberatedClassesCount = this.classComponents.length - this.liberatedClassesCount;
    console.log(this.liberatedClassesCount);
    console.log(this.nonLiberatedClassesCount);
    if (this.chart) {
      this.chart.data.datasets[0].data = [this.liberatedClassesCount, this.nonLiberatedClassesCount];
      this.chart.update();
      this.cd.markForCheck();
      console.log(); // Trigger change detection
    }
  }

}

