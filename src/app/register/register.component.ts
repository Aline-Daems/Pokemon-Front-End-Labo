import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, Subject, takeUntil} from "rxjs";
import {PlayerService} from "../services/player.service";
import {Router} from "@angular/router";
import {ArenasService} from "../services/arenas.service";
import {Arenas} from "../models/arenas";
import {Genders, Roles} from "../models/enums";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit, OnDestroy{

  registerForm : FormGroup;

  array!: Arenas[];
  arenas !: Observable<Arenas>;
  genders = Object.values(Genders)

  roles  = Object.values(Roles);

  $destroyed = new Subject<Boolean>()


  constructor(private readonly _playerService : PlayerService, private readonly _formBuilder:FormBuilder, private readonly _router:Router, private _arenaService:ArenasService, private renderer : Renderer2) {

  this.registerForm = this._formBuilder.group({

  pseudo:this._formBuilder.control('', Validators.required),
  mail:this._formBuilder.control('', Validators.required),
  password:this._formBuilder.control('', Validators.required),
  birthdate:this._formBuilder.control('', Validators.required),
  gender:this._formBuilder.control('', Validators.required),
  badges:this._formBuilder.control('', Validators.required),
  role:this._formBuilder.control('', Validators.required),
  arenaId:this._formBuilder.control('', Validators.required),


})

  }

  register(){

    const pseudoValue:string = this.registerForm.get('pseudo')!.value;
    this._playerService.register(this.registerForm.value).subscribe(()=> alert('Joueur '+ pseudoValue +' enregistré' ))
  }

  ngOnInit() {

    this._arenaService.getAll().pipe(takeUntil(this.$destroyed)).subscribe({
      next:(valeur) =>  this.array=valeur,
      error:(err)=>console.log(err.err()),
      complete:()=>console.log("Chargement des arènes effectué")

    })


  };

  ngOnDestroy(){

    this.$destroyed.next(true);
    this.$destroyed.complete();

  }


}
