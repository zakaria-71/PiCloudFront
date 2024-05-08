import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  submitForm() {
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        if (response.jwtToken != null) {
          const jwtToken = response.jwtToken;
          const email = response.email;
          localStorage.setItem('jwtToken', jwtToken);
          localStorage.setItem('email', email);
          
  
          // Vérifier si l'email est "admin@example.com" et le mot de passe est "King123"
          if (email === 'admin@example.com' && this.loginForm?.controls['password'].value === 'King123') {
            
            
            // Rediriger l'utilisateur vers "/admin"
            this.router.navigateByUrl("/admin");
          } else {
            // Rediriger l'utilisateur vers une autre page, par exemple, la page d'accueil
            this.router.navigateByUrl("");
          }
        }
      }
    )
  }
  

}
