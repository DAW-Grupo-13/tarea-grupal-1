import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent {

  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarClienteComponent>) { }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  usuarioNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required)
  })

  
  onSubmit() {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.usuarioNuevo.value.cedula,
        nombres: this.usuarioNuevo.value.nombres,
        apellidos: this.usuarioNuevo.value.apellidos,
        direccion: this.usuarioNuevo.value.direccion,
        edad: this.usuarioNuevo.value.edad,
        opciones: 'modificar'
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/cliente', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
