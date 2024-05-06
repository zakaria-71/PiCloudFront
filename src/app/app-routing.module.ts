<<<<<<< HEAD
<<<<<<< HEAD
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import {MaterialBackComponent} from "./BackOffice/material-back/material-back.component";
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
>>>>>>> f42ae3051736fb46935dfcdc8251d91ade8f90d3
import { AllTemplateFrontComponent } from '../app/FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from '../app/BackOffice/all-template-back/all-template-back.component';
import { RegisterComponent } from './components/user/register/register.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfilEditComponent } from './components/user/profil-edit/profil-edit.component';
import { ProfilComponent } from './components/user/profil/profil.component';
import { AdminGuard } from './guards/admin.guard'; // Import the AdminGuard
import {CompetitionComponent} from "./components/gestion competition/competition/competition.component";
import {AddComponent} from "./components/gestion competition/competition/add/add.component";
import {EditComponent} from "./components/gestion competition/competition/edit/edit.component";
import {TeamComponent} from "./components/gestion competition/team/team.component";
import {AddtComponent} from "./components/gestion competition/team/addt/addt.component";
import {EdittComponent} from "./components/gestion competition/team/editt/editt.component";
import {DetailsComponent} from "./components/gestion competition/competition/details/details.component";
import {CalendarComponent} from "./components/gestion competition/calendar/calendar.component";
import {CompetitionssComponent} from "./FrontOffice/competitionss/competitionss.component";
import {TeamssComponent} from "./FrontOffice/teamss/teamss.component";
import {BodyComponent} from "./FrontOffice/body/body.component";
import {HomeComponent} from "./BackOffice/home/home.component";
import {CalendarrComponent} from "./FrontOffice/calendarr/calendarr.component";
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> f42ae3051736fb46935dfcdc8251d91ade8f90d3


const routes: Routes = [

  {path:"",component:AllTemplateFrontComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    // children:[
    // {
    //   path:"user",
    //   Component:BodyCop
    // }
    // ]
  },
  {path:"admin",component:AllTemplateBackComponent},
  {path:"material", component:MaterialBackComponent}
=======
     children:[
    {
       path:"competitionss", component:CompetitionssComponent
     },
       { path: 'teamss', component: TeamssComponent },
       {
         path:'',component:BodyComponent
       },
       { path : 'calendarr', component:CalendarrComponent }
     ]
  },
=======
     children:[
    {
       path:"competitionss", component:CompetitionssComponent
     },
       { path: 'teamss', component: TeamssComponent },
       {
         path:'',component:BodyComponent
       },
       { path : 'calendarr', component:CalendarrComponent }
     ]
  },
>>>>>>> f42ae3051736fb46935dfcdc8251d91ade8f90d3
  {path:"admin",component:AllTemplateBackComponent, canActivate: [AdminGuard],
    children:[
      { path: 'competitions', component: CompetitionComponent },
      { path: 'competitions/ajouterCompt', component: AddComponent },
      { path: 'home',component:HomeComponent},
      { path: 'competitions/edit/:competitionId',component:EditComponent},
      { path: 'competitions/more/:competitionId',component:DetailsComponent},
      { path: 'teams', component: TeamComponent },
      { path: 'teams/ajouterTeam', component: AddtComponent },
      { path: 'teams/editt/:idTeam',component:EdittComponent},
      { path : 'calendar', component:CalendarComponent },

    ]
  },{ path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent,canActivate: [AdminGuard] },
  { path: "profil", component: ProfilComponent },
  { path: "profil-edit", component: ProfilEditComponent }
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> f42ae3051736fb46935dfcdc8251d91ade8f90d3

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class AppRoutingModule { }
>>>>>>> origin/main
