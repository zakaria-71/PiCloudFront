import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from '../app/FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from '../app/BackOffice/all-template-back/all-template-back.component';
import { RegisterComponent } from './components/user/register/register.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfilEditComponent } from './components/user/profil-edit/profil-edit.component';
import { ProfilComponent } from './components/user/profil/profil.component';
import { AdminGuard } from './guards/admin.guard'; // Import the AdminGuard

const routes: Routes = [
  { path: "", component: AllTemplateFrontComponent },
  { path: "admin", component: AllTemplateBackComponent, canActivate: [AdminGuard] }, // Apply AdminGuard here
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent,canActivate: [AdminGuard] },
  { path: "profil", component: ProfilComponent },
  { path: "profil-edit", component: ProfilEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }