import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule, provideHttpClient } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeadrerFrontComponent } from './FrontOffice/headrer-front/headrer-front.component';
import { BodyComponent } from './FrontOffice/body/body.component';
import {CompetitionComponent} from "./BackOffice/gestion competition/competition/competition.component";
import {AddComponent} from "./BackOffice/gestion competition/competition/add/add.component";
import {EditComponent} from "./BackOffice/gestion competition/competition/edit/edit.component";
import {TeamComponent} from "./BackOffice/gestion competition/team/team.component";
import {AddtComponent} from "./BackOffice/gestion competition/team/addt/addt.component";
import {EdittComponent} from "./BackOffice/gestion competition/team/editt/editt.component";
import {DetailsComponent} from "./BackOffice/gestion competition/competition/details/details.component";
import {VoteComponent} from "./BackOffice/gestion competition/vote/vote.component";
import {CalendarComponent} from "./BackOffice/gestion competition/calendar/calendar.component";
import {ToastrModule} from "ngx-toastr";
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),

  ],
  providers: [
    provideHttpClient()
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
