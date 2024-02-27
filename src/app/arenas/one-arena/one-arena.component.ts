import {Component, OnInit} from '@angular/core';
import {Arenas} from "../../models/arenas";
import {ActivatedRoute} from "@angular/router";
import {ArenasService} from "../../services/arenas.service";

@Component({
  selector: 'app-one-arena',
  templateUrl: './one-arena.component.html',
  styleUrl: './one-arena.component.css'
})
export class OneArenaComponent implements OnInit{
  arenaId!:number;
  arena!: Arenas

  constructor(private route:ActivatedRoute, private arenaService:ArenasService) {
  }

  ngOnInit(){
    this.arenaId = parseInt(this.route.snapshot.paramMap.get('arenaId') ||'', 10);
    this.getOne(this.arenaId);
  }

  getOne(id:number){
    this.arenaService.getOne(id).subscribe(
      arena=> {
        this.arena = arena
      }
    )
  }

}
