import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
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
    FormsModule,
    NgChartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
