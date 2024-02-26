import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {PlayerService} from "../services/player.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{

  registerForm : FormGroup;


  $destroyed = new Subject<Boolean>()

  constructor(private readonly _playerService : PlayerService, private readonly _formBuilder:FormBuilder, private readonly _router:Router) {

this.registerForm = this._formBuilder.group({

  pseudo:this._formBuilder.control('', Validators.required),
  mail:this._formBuilder.control('', Validators.required),
  password:this._formBuilder.control('', Validators.required),
  birthdate:this._formBuilder.control('', Validators.required),
  gender:this._formBuilder.control('', Validators.required),
  badges:this._formBuilder.control('', Validators.required),
  role:this._formBuilder.control('', Validators.required),
  arenaId:this._formBuilder.control('', Validators.required)


})

  }

  register(){

    const pseudoValue:string = this.registerForm.get('pseudo')!.value;


    this._playerService.register(this.registerForm.value).subscribe(()=> alert('Joueur'+ pseudoValue +'enregistré' ))
  }

}
