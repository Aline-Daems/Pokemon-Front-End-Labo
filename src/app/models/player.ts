import {Genders} from "./enums";

export interface Player {


}


export interface loginForm{
  login:string;
  password:string;

}

export interface AuthDTO{

  pseudo:string;
  Token:string;
}


export interface registerForm{
  pseudo:string;
  mail:string;
  password:string;
  birthdate: Date;
  gender: Genders;
  badges: number;
  role: string[];
  arenaId: number[];

}
