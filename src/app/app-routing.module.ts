import { Component, NgModule } from '@angular/core';
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
  {path: "terrain-detail/:idTerrain", component: TerrainDetailComponent},
  {path:"reserver/:idUser", component:AddUComponent},
  {path:"return",component:HeadrerFrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
