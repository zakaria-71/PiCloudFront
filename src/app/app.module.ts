import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule, provideHttpClient } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeadrerFrontComponent } from './FrontOffice/headrer-front/headrer-front.component';
import { BodyComponent } from './FrontOffice/body/body.component';
import { TerrainComponent } from './terrain/terrain.component';
import { ReservationTComponent } from './reservation-t/reservation-t.component';
import { AddRComponent } from './reservation-t/add-r/add-r.component';
import { AddTComponent } from './terrain/add-t/add-t.component';
import { DetailsRComponent } from './reservation-t/details-r/details-r.component';
import { DetailsTComponent } from './terrain/details-t/details-t.component';
import { EditRComponent } from './reservation-t/edit-r/edit-r.component';
import { EditTComponent } from './terrain/edit-t/edit-t.component';
import { ListReservationsComponent } from './reservation-t/list-reservations/list-reservations.component';
import { MyreservationsTComponent } from './reservation-t/myreservations-t/myreservations-t.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './reservation-t/rating/rating.component';
import { ChartComponent } from './reservation-t/chart/chart.component';
import { TerrainDetailComponent } from './terrain/terrain-detail/terrain-detail.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AddUComponent } from './reservation-t/add-u/add-u.component';
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
import { ReservationComponent } from './components/reservationClasse/reservation/reservation.component';
import { ClassComponent } from './components/reservationClasse/class/class.component';
import { ReservationbackComponent } from './components/reservationClasse/reservationback/reservationback.component';
import { BlocComponent } from './components/reservationClasse/bloc/bloc.component';
import { Chart } from 'chart.js';
import { CalendarResComponent } from './components/reservationClasse/reservation/calendarRes/calendarRes.component';
import { RouterLink, RouterModule } from '@angular/router';
import { CalendarModule } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { UserStatComponent } from './user-stat-component/user-stat-component.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    TerrainDetailComponent,
    AppComponent,
    AllTemplateBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeadrerFrontComponent,
    BodyComponent,
    TerrainComponent,
    ReservationTComponent,
    AddTComponent,
    AddRComponent,
    DetailsRComponent,
    DetailsTComponent,
    EditRComponent,
    EditTComponent,
    ListReservationsComponent,
    MyreservationsTComponent,
    RatingComponent,
    ChartComponent,
    TerrainDetailComponent,
    AddUComponent,
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
    ReservationComponent,
    ClassComponent,
    ReservationbackComponent,
    BlocComponent,
   CalendarResComponent,
    UserStatComponent,
    ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
    BrowserAnimationsModule,
    RouterModule ,
    RouterLink,
    CommonModule,
    CalendarModule,
    ReactiveFormsModule,ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }), 
    NgbModule,
    LeafletModule
  ],
  providers: [
    provideHttpClient()
    ],
  bootstrap: [AppComponent],

  exports: [CommonModule, CalendarModule, HttpClientModule]

})

export class AppModule { }
