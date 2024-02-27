import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArenasComponent} from "./arenas.component";
import {RegisterComponent} from "../register/register.component";
import {ArenasListComponent} from "./arenas-list/arenas-list.component";
import {ArenaFormComponent} from "./arena-form/arena-form.component";
import {OneArenaComponent} from "./one-arena/one-arena.component";

const routes: Routes = [
  {
    path:'',
    component: ArenasComponent,
    children:[
      {path:"register", component:RegisterComponent},
      {path:"all", component:ArenasListComponent},
      {path:"new", component:ArenaFormComponent},
      {path:":arenaId", component: OneArenaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArenasRoutingModule { }
