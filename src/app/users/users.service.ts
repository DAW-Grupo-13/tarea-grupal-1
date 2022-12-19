import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: "root"
  })

export class UsersService {
  constructor(private cookies: CookieService) {}

  setUserName(user: string){
    this.cookies.set("username", user);
  }
  
  getUserName(){
    return this.cookies.get("username");
  }

  setName(name: string){
    this.cookies.set("name", name);
  }

  getName(){
    return this.cookies.get("name");
  }

  logout(){
    this.cookies.deleteAll();
  }

}