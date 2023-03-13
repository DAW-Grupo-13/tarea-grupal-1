import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { UsersService } from '../users/users.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isAdmin = false;
  nombreUsuario:any = "";

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private userService: UsersService, private authService: AuthService) {}

  ngOnInit(): void {
    
  }

  onToggleSidenav(): void{
    this.toggleSidenav.emit();
  }

  getUsuario(): string{
    let username = this.authService.getUsername;

    if(this.isLogged()){
      this.nombreUsuario = username;
      this.isAdmin = true;

    }
    else{
      this.isAdmin= false;
    
    }

    return this.nombreUsuario;
  }

  logout(): void{
    this.userService.logout();
    this.isAdmin = false;
    
  }

  isLogged(): boolean{
    return !!localStorage.getItem('token_value');
  }

}
