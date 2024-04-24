import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from '../app/FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from '../app/BackOffice/all-template-back/all-template-back.component';


const routes: Routes = [

  {path:"",component:AllTemplateFrontComponent,
    // children:[
    // {
    //   path:"user",
    //   Component:BodyCop
    // }
    // ]
  },
  {path:"admin",component:AllTemplateBackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
