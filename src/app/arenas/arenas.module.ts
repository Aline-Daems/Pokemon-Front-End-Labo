import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArenasRoutingModule } from './arenas-routing.module';
import { ArenasListComponent } from './arenas-list/arenas-list.component';
import { ArenaFormComponent } from './arena-form/arena-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { OneArenaComponent } from './one-arena/one-arena.component';


@NgModule({
  declarations: [
    ArenasListComponent,
    ArenaFormComponent,
    OneArenaComponent
  ],
  exports: [
    ArenasListComponent
  ],
    imports: [
        CommonModule,
        ArenasRoutingModule,
        ReactiveFormsModule
    ]
})
export class ArenasModule { }
