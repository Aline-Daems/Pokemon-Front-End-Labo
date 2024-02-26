import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArenasComponent} from "./arenas.component";
import {RegisterComponent} from "../register/register.component";

const routes: Routes = [
  {
    path:'',
    component: ArenasComponent,
    children:[
      {path:"register", component:RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArenasRoutingModule { }
