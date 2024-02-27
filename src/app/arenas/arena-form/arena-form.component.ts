import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArenasService} from "../../services/arenas.service";
import {Router} from "@angular/router";
import {Category, Status} from "../../models/enums";

@Component({
  selector: 'app-arena-form',
  templateUrl: './arena-form.component.html',
  styleUrl: './arena-form.component.css'
})
export class ArenaFormComponent {

  arenaForm: FormGroup;
  categories = Object.values(Category);
  status = Object.values(Status);

  constructor(private readonly _arenaService: ArenasService, private readonly _formBuilder:FormBuilder, private readonly _router:Router) {

  this.arenaForm = this._formBuilder.group({

    city:this._formBuilder.control('', Validators.required),
    nbMinPlayer:this._formBuilder.control('', Validators.required),
    nbMaxPlayer:this._formBuilder.control('', Validators.required),
    nbPlayer:this._formBuilder.control('', Validators.required),
    category:this._formBuilder.control('', Validators.required),
    status:this._formBuilder.control('', Validators.required),
    round:this._formBuilder.control('', Validators.required),
    badgeMin:this._formBuilder.control('', Validators.required),
    badgeMax:this._formBuilder.control('', Validators.required),
    womenOnly:this._formBuilder.control('', Validators.required),

  })

  }

  newArena(){

    const cityValue:string = this.arenaForm.get('city')!.value;
    this._arenaService.newArene(this.arenaForm.value).subscribe(()=> alert(' Une nouvelle arène a été créée dans la ville de :  '+ cityValue ))
  }

}
