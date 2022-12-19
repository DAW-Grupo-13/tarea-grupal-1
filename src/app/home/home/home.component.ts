import { Component } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = "Douglas Gallardo"

  constructor(private userService: UsersService){}

  getNombre(): string{
    return this.userService.getName();
  }

}
