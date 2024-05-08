import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
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
import { TerrainDetailComponent } from './terrain/terrain-detail/terrain-detail.component';
import { AddUComponent } from './reservation-t/add-u/add-u.component';
import { HeadrerFrontComponent } from './FrontOffice/headrer-front/headrer-front.component';
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
import { ReservationComponent } from './components/reservationClasse/reservation/reservation.component';
import { CalendarResComponent } from './components/reservationClasse/reservation/calendarRes/calendarRes.component';
import { UserStatComponent } from './user-stat-component/user-stat-component.component';
const routes: Routes = [

  {path:"",component:AllTemplateFrontComponent,

     children:[
    {
       path:"competitionss", component:CompetitionssComponent
     },
       { path: 'teamss', component: TeamssComponent },
       {
         path:'',component:BodyComponent
       },
       { path : 'calendarr', component:CalendarrComponent },

     ]
     
  },
  {path:"admin",component:AllTemplateBackComponent},
  {path:"reservation",component:ListReservationsComponent},
  {path:"terrains/addTerrain",component:AddTComponent},
  
  {path:"myReservations",component:MyreservationsTComponent},
  {path:"reservation/rate",component:RatingComponent},
  {path:"reserver/:idUser", component:AddUComponent},
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
      {path:"reservationTs", component: ReservationTComponent},
      {path:"terrains",component:TerrainComponent},
      {path:"reservationTs/addReservationT",component:AddRComponent},
      {path:"reservationTs/more/:idResT",component:DetailsRComponent},
      {path:"terrains/more/:idTerrain",component:DetailsTComponent},
      {path:"reservationTs/edit/:idResT",component:EditRComponent},
      {path:"terrains/edit/:idTerrain",component:EditTComponent},
      {path:"reservationTs/chart",component:ChartComponent},
      {path: "terrain-detail/:idTerrain", component: TerrainDetailComponent}
    ]},

  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent,canActivate: [AdminGuard] },
  { path: "profil", component: ProfilComponent },
  { path: "profil-edit", component: ProfilEditComponent },
  {path:'reservationc',component:ReservationComponent},
  {path:'reservationCalander',component:  CalendarResComponent},
  {path:'UserStatComponent',component:UserStatComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }