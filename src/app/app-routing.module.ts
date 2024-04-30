import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import {MaterialBackComponent} from "./BackOffice/material-back/material-back.component";


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
  {path:"material", component:MaterialBackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
