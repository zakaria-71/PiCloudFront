import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  registered: boolean = false;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: this.passwordMatchValidator })
  }

  passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    const valid = passwordRegex.test(control.value);
    return valid ? null : { invalidPassword: true };
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }


  submitForm() {
    console.log(this.registerForm.value);
    this.service.register(this.registerForm.value).subscribe(
      (response) => {
        if (response.id != null) {
          this.router.navigateByUrl('/login');
        }
      },
      (error) => {
        if (error.status === 400) {
          alert("Email already in use");
        } 
      }
    );
  }
}