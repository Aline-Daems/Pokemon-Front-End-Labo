import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ArenasComponent} from "./arenas/arenas.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: "" , component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"arenas", loadChildren:()=>import('./arenas/arenas.module').then(m=>m.ArenasModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
