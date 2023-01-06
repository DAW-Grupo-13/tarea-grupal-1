import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificacionesService } from '../../../notificaciones/notificaciones.service';
import { UsersService } from '../../../users/users.service'
import { Notificacion } from 'src/app/notificaciones/notificacion';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [''],
    password: ['']
  })

  users = [
    {
      "id": "1",
      "name": "Douglas Gallardo",
      "username" : "dgallardo",
      "password" : "123",
    },
    {
      "id": "2",
      "name": "Ronal Preciado",
      "username" : "rpreciado",
      "password" : "123",
    },
    {
      "id": "3",
      "name": "John Guale",
      "username" : "jguale",
      "password" : "123",
    },
    {
      "id": "4",
      "name": "Washington Pastuizaca",
      "username" : "wpastuizaca",
      "password" : "123",
    }
  ]

  constructor(private fb: FormBuilder, private router: Router, private userService: UsersService, 
    private notificacionService: NotificacionesService){}

  

  ngOnInit(): void {
    
  }

  //Valida usuario de acuerdo al array de usuarios validos
  validateUser(usuario: any, clave: any): boolean{
    let flag = false;

    this.users.forEach(element => {
      if(element.username == usuario && element.password == clave){
        flag = true;
      }
    });

    return flag;

  }

  buscaUsuario(userName: any): string{
    let valor = " "
    this.users.forEach(element => {
      if(element.username == userName){
        valor = element.name;
      }
    });
    return valor;
  }

  //Inicia sesion
  onLogin(): void{
    const formValue = this.loginForm.value;
    let usuario = formValue.username;
    let clave = formValue.password;
    let isValid = this.validateUser(usuario, clave);

    if(usuario != "" && clave != ""){
      if(isValid){
        let nombre = this.buscaUsuario(usuario);
        this.userService.setUserName(usuario as string);
        this.userService.setName(nombre);
        this.notificacionService.showToast(Notificacion.SUCCES, "Inicio de sesion exitoso", "");
        this.router.navigate(['inicio']);
      } else {
        this.notificacionService.showToast(Notificacion.DANGER, "Usuario o contraseña incorrecto", "");
      }
    }
    
  }


}
