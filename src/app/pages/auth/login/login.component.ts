import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificacionesService } from '../../../notificaciones/notificaciones.service';
import { UsersService } from '../../../users/users.service'
import { Notificacion } from 'src/app/notificaciones/notificacion';
import { AuthService } from 'src/app/auth.service';
import { UsuarioInterface } from 'src/app/interfaces/UsuarioInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    Usuario: [''],
    Clave: ['']
  })

  usuario: any
  name: any

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
    private notificacionService: NotificacionesService, private service: AuthService){
      let name = this.userService.getName();
      if(name != null && name != ""){
        this.router.navigate(['inicio']);
      }
    }

  

  ngOnInit(): void {
    this.name = this.userService.getName();
    if(this.name == null || this.name == undefined){
      //this.router.navigate(['inicio']);
    }
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
    this.usuario = this.loginForm.value.Usuario;
    
    let userAux = {
      Id: 1,
      Usuario: this.usuario,
      Clave: this.loginForm.value.Clave
    }
    
    this.service.login(userAux as UsuarioInterface).subscribe((data:any) =>{
      
      localStorage.setItem('userName', this.usuario);
      localStorage.setItem('token_value', data);
      this.notificacionService.showToast(Notificacion.SUCCES, "Inicio de sesion exitoso", "");
      this.router.navigate(['inicio']);
    },
    (errorData) => this.notificacionService.showToast(Notificacion.DANGER, "Usuario o contraseña incorrecto", ""))    
  }


}
