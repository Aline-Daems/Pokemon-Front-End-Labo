import {Inject, Injectable} from '@angular/core';
import {AuthDTO, loginForm, registerForm} from "../models/player";
import {HttpClient} from "@angular/common/http";
import {URLAPI} from "../urlapi";
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  userConnected = new BehaviorSubject<string| null>(null)

  constructor(private readonly _httpClient:HttpClient, @Inject(URLAPI) private _url:string) { }

  login(loginForm:loginForm){

    return this._httpClient.post<AuthDTO>(this._url+'player/login', loginForm).pipe(tap(data=>{

      localStorage.setItem("Token", data.Token);
      localStorage.setItem("pseudo", data.pseudo);
      this.userConnected.next(data.pseudo);



    }))

  }

  register(registerForm : registerForm){
    console.log(registerForm)
  return this._httpClient.post(this._url+'player/create', registerForm)
  }

}

