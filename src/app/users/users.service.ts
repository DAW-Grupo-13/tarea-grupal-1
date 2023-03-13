import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: "root"
  })

export class UsersService {
  constructor(private service: AuthService) {}
  
  getUserName(){
    return localStorage.getItem('userName');
  }

  /*setName(name: string){
    this.cookies.set("name", name);
  }*/

  getName(): any{
    return this.service.getUsername;
  }

  logout(){
    localStorage.setItem('userName', '');
    localStorage.setItem('token_value', '');
  }

}