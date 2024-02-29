import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlayerService} from "../services/player.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private readonly _playerService : PlayerService, private readonly _formBuilder:FormBuilder, private readonly _router:Router) {
    localStorage.clear();
    this.loginForm = this._formBuilder.group({

      login:this._formBuilder.control('', Validators.required),
      password:this._formBuilder.control('', Validators.required)

    })
  }
    login(){
    this._playerService.login(this.loginForm.value).subscribe({
      next:(response)=> {
        this._router.navigate(["arenas"])
      },
      error:(err) => {
        if (err.error.status === 403) {
          alert(err.error.message())
        }
      }

    });
    }


}
