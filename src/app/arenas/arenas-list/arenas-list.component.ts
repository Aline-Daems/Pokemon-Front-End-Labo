import {Component, OnDestroy, OnInit} from '@angular/core';
import {Arenas} from "../../models/arenas";
import {Subject, takeUntil} from "rxjs";
import {ArenasService} from "../../services/arenas.service";
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-arenas-list',
  templateUrl: './arenas-list.component.html',
  styleUrl: './arenas-list.component.css'
})
export class ArenasListComponent implements OnInit, OnDestroy {

  array!: Arenas[];
  arena!: Arenas
  arenaId!: number;

  $destroyed = new Subject<Boolean>()

  constructor(private readonly _arenaService: ArenasService, private route: ActivatedRoute, private _playerService: PlayerService) {
  }

  ngOnInit() {

    this._arenaService.getAll().pipe(takeUntil(this.$destroyed)).subscribe({
      next: (valeur) => this.array = valeur,
      error: (err) => console.log(err),
      complete: () => console.log("Chargement des arènes effectué")
    })


  };

  ngOnDestroy() {

    this.$destroyed.next(true);
    this.$destroyed.complete();
  }

  newPlayer(arenaId: number) {
    this._arenaService.newPlayer(arenaId).subscribe(
      () => console.log("enregistrement effectuée"))

  }



}
