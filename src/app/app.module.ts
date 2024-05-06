import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

>>>>>>> origin/main

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeadrerFrontComponent } from './FrontOffice/headrer-front/headrer-front.component';
import { BodyComponent } from './FrontOffice/body/body.component';
<<<<<<< HEAD
import { MaterialFrontComponent } from './FrontOffice/material-front/material-front.component';
import { MaterialBackComponent } from './BackOffice/material-back/material-back.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ReservationMBackComponent } from './BackOffice/reservation-m-back/reservation-m-back.component';
import { ReservationMFrontComponent } from './FrontOffice/reservation-m-front/reservation-m-front.component';
=======
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfilComponent } from './components/user/profil/profil.component';
import { ProfilEditComponent } from './components/user/profil-edit/profil-edit.component';
import { RegisterComponent } from './components/user/register/register.component';

import {CompetitionComponent} from "./components/gestion competition/competition/competition.component";
import {AddComponent} from "./components/gestion competition/competition/add/add.component";
import {EditComponent} from "./components/gestion competition/competition/edit/edit.component";
import {TeamComponent} from "./components/gestion competition/team/team.component";
import {AddtComponent} from "./components/gestion competition/team/addt/addt.component";
import {EdittComponent} from "./components/gestion competition/team/editt/editt.component";
import {DetailsComponent} from "./components/gestion competition/competition/details/details.component";
import {VoteComponent} from "./components/gestion competition/vote/vote.component";
import {CalendarComponent} from "./components/gestion competition/calendar/calendar.component";
import {ToastrModule} from "ngx-toastr";
import { CompetitionssComponent } from './FrontOffice/competitionss/competitionss.component';
import { TeamssComponent } from './FrontOffice/teamss/teamss.component';
import { HomeComponent } from './BackOffice/home/home.component';
import { CalendarrComponent } from './FrontOffice/calendarr/calendarr.component';
import {NgChartsModule} from "ng2-charts";
>>>>>>> origin/main

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeadrerFrontComponent,
    BodyComponent,
<<<<<<< HEAD
    MaterialFrontComponent,
    MaterialBackComponent,
    ReservationMBackComponent,
    ReservationMFrontComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
=======
    DashboardComponent,
    LoginComponent,
    ProfilComponent,
    ProfilEditComponent,
    RegisterComponent,
    CompetitionComponent,
    AddComponent,
    EditComponent,
    TeamComponent,
    AddtComponent,
    EdittComponent,
    DetailsComponent,
    VoteComponent,
    CalendarComponent,
    CompetitionssComponent,
    TeamssComponent,
    HomeComponent,
    CalendarrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',

    }),
  ],
>>>>>>> origin/main
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
