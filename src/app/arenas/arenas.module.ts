import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArenasRoutingModule } from './arenas-routing.module';
import { ArenasListComponent } from './arenas-list/arenas-list.component';


@NgModule({
  declarations: [
    ArenasListComponent
  ],
  exports: [
    ArenasListComponent
  ],
  imports: [
    CommonModule,
    ArenasRoutingModule
  ]
})
export class ArenasModule { }
