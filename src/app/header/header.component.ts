import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from '../users/users.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isAdmin = false;
  nombreUsuario = "";

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    
  }

  onToggleSidenav(): void{
    this.toggleSidenav.emit();
  }

  getUsuario(): string{
    let username = this.userService.getName();

    if(this.isLogged()){
      this.nombreUsuario = username;
      this.isAdmin = true;

    }
    else{
      this.isAdmin= false;
    
    }

    return username;
  }

  logout(): void{
    this.userService.logout();
    this.isAdmin = false;
    
  }

  isLogged(): boolean{
    let username = this.userService.getName();
    let flag = false;
    if(username != undefined && username != null && username != ""){
      flag = true;
    }
    return flag;
  }

}
