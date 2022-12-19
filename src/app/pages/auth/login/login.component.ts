import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
      "username" : "dgallard",
      "password" : "123",
    },
    {
      "id": "2",
      "name": "Ronal Preciado",
      "username" : "rpreciado",
      "password" : "123",
    }
  ]

  constructor(private fb: FormBuilder, private router: Router){}

  

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

  //Inicia sesion
  onLogin(): void{
    const formValue = this.loginForm.value;

    let isValid = this.validateUser(formValue.username, formValue.password);

    if(isValid){
      this.router.navigate(['']);
    }
    
  }


}
