import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArenasService} from "../../services/arenas.service";
import {Subject, takeUntil} from "rxjs";
import {Arenas} from "../../models/arenas";

@Component({
  selector: 'app-my-arenas',
  templateUrl: './my-arenas.component.html',
  styleUrl: './my-arenas.component.css'
})
export class MyArenasComponent implements OnInit, OnDestroy{
  playerId!:number
  array!: Arenas[];
  $destroyed = new Subject<Boolean>()
  constructor(private readonly _arenaService:ArenasService) {
  }

  ngOnInit() {
  this.afficher();

  }

 ngOnDestroy() {
   this.$destroyed.next(true);
   this.$destroyed.complete();
 }

 unrollement(arenaId:number){
      this._arenaService.unenrollement(arenaId).subscribe(
          () => console.log("désinscription effectuée"))
     this.afficher();
 }

 afficher(){
     this._arenaService.myArenas().pipe(takeUntil(this.$destroyed)).subscribe( {
             next: (valeur )=>{ this.array = valeur,
                 console.log("oki koki")
             },

             error: (err) => console.log(err),
             complete: () => console.log("Chargement des arènes du player")
         }

     )
 }
}
