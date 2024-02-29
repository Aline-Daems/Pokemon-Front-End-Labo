import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {URLAPI} from "../urlapi";
import {Arenas} from "../models/arenas";
import {ArenaFormComponent} from "../arenas/arena-form/arena-form.component";

@Injectable({
  providedIn: 'root'
})
export class ArenasService {

  userConnected = new BehaviorSubject<string|null>(null)

  constructor(private readonly _httpClient:HttpClient, @Inject(URLAPI) private _url:string) { }

  getAll(){
    return this._httpClient.get<Arenas[]>(this._url+"arena/getAll");
  }

  newArene(arena: Arenas){
    return this._httpClient.post(this._url+"arena/create", arena);
  }

  getOne(id:number){
    return this._httpClient.get<Arenas>(this._url+`arena/${id}`)
  }

  start(id:number){
    return this._httpClient.put(this._url+`arena/start/${id}`, null);
  }

  newPlayer(arenaId:number){
    return this._httpClient.put(this._url+ `player/register/${arenaId}`, null)
  }

  unenrollement(arenaId:number){
    return this._httpClient.delete(this._url+ `player/unregister/${arenaId}`)
  }

  myArenas(){
    return this._httpClient.get<Arenas[]>(this._url+ `player/arenas/`)
  }

}

