import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import {CompetitionComponent} from "./BackOffice/gestion competition/competition/competition.component";
import {AddComponent} from "./BackOffice/gestion competition/competition/add/add.component";
import {EditComponent} from "./BackOffice/gestion competition/competition/edit/edit.component";
import {TeamComponent} from "./BackOffice/gestion competition/team/team.component";
import {AddtComponent} from "./BackOffice/gestion competition/team/addt/addt.component";
import {EdittComponent} from "./BackOffice/gestion competition/team/editt/editt.component";
import {DetailsComponent} from "./BackOffice/gestion competition/competition/details/details.component";
import {CalendarComponent} from "./BackOffice/gestion competition/calendar/calendar.component";
import { ReservationTComponent } from './reservation-t/reservation-t.component';
import { ListReservationsComponent } from './reservation-t/list-reservations/list-reservations.component';
import { TerrainComponent } from './terrain/terrain.component';
import { AddTComponent } from './terrain/add-t/add-t.component';
import { AddRComponent } from './reservation-t/add-r/add-r.component';
import { DetailsRComponent } from './reservation-t/details-r/details-r.component';
import { DetailsTComponent } from './terrain/details-t/details-t.component';
import { EditRComponent } from './reservation-t/edit-r/edit-r.component';
import { EditTComponent } from './terrain/edit-t/edit-t.component';
import { MyreservationsTComponent } from './reservation-t/myreservations-t/myreservations-t.component';
import { RatingComponent } from './reservation-t/rating/rating.component';
import { ChartComponent } from './reservation-t/chart/chart.component';
import { TerrainDetailComponent } from './terrain-detail/terrain-detail.component';


const routes: Routes = [

  {path:"",component:AllTemplateFrontComponent,
    // children:[
    // {
    //   path:"user",
    //   Component:BodyCop
    // }
    // ]
  },
  {path:"admin",component:AllTemplateBackComponent},
  { path: 'competitions', component: CompetitionComponent },
  { path: 'competitions/ajouterCompt', component: AddComponent },
  { path: 'competitions/edit/:competitionId',component:EditComponent},
  { path: 'competitions/more/:competitionId',component:DetailsComponent},
  { path: 'teams', component: TeamComponent },
  { path: 'teams/ajouterTeam', component: AddtComponent },
  { path: 'teams/editt/:idTeam',component:EdittComponent},
  { path : 'calendar', component:CalendarComponent },
  {path:"reservationTs", component: ReservationTComponent},
  {path:"reservation",component:ListReservationsComponent},
  {path:"terrains",component:TerrainComponent},
  {path:"terrains/addTerrain",component:AddTComponent},
  {path:"reservationTs/addReservationT",component:AddRComponent},
  {path:"reservationTs/more/:idResT",component:DetailsRComponent},
  {path:"terrains/more/:idTerrain",component:DetailsTComponent},
  {path:"reservationTs/edit/:idResT",component:EditRComponent},
  {path:"terrains/edit/:idTerrain",component:EditTComponent},
  {path:"myReservations",component:MyreservationsTComponent},
  {path:"reservation/rate",component:RatingComponent},
  {path:"reservationTs/chart",component:ChartComponent},
  {path: "terrain-detail/:idTerrain", component: TerrainDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
