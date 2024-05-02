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
import {CompetitionssComponent} from "./FrontOffice/competitionss/competitionss.component";
import {TeamssComponent} from "./FrontOffice/teamss/teamss.component";
import {BodyComponent} from "./FrontOffice/body/body.component";
import {HomeComponent} from "./BackOffice/home/home.component";
import {CalendarrComponent} from "./FrontOffice/calendarr/calendarr.component";

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
       { path : 'calendarr', component:CalendarrComponent }
     ]
  },
  {path:"admin",component:AllTemplateBackComponent,
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
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
