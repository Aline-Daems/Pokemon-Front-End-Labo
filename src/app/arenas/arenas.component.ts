import {Component, OnDestroy, OnInit} from '@angular/core';
import {Arenas} from "../models/arenas";
import {Subject, takeUntil} from "rxjs";
import {ArenasService} from "../services/arenas.service";

@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrl: './arenas.component.css'
})
export class ArenasComponent  implements OnInit, OnDestroy{


  array!: Arenas[];

  $destroyed = new Subject<Boolean>()

  constructor(private readonly _arenaService:ArenasService) {
  }

  ngOnInit() {

    this._arenaService.getAll().pipe(takeUntil(this.$destroyed)).subscribe({
      next:(valeur) => this.array=valeur,
      error:(err)=>console.log(err.err()),
      complete:()=>console.log("Chargement des arènes effectué")
    })
  };


  ngOnDestroy(){

    this.$destroyed.next(true);
    this.$destroyed.complete();
  }

}
