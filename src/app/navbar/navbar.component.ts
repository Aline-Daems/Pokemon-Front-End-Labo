import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../services/player.service";
import {HttpClient} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";
import {ComponentInfo} from "@angular/compiler-cli/src/ngtsc/indexer/src/context";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit{

  pseudo:string=""
  constructor(_playerService:PlayerService, private readonly _http: HttpClient) {


  }

  ngOnInit() {

    this.getPseudoConnected()
  }


  getPseudoConnected(){

    const token = localStorage.getItem('Token');
    const pseudoToken = localStorage.getItem('pseudo')
      if(pseudoToken){
        this.pseudo = pseudoToken;
      }






  }

}
