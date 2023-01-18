import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ClienteServiceService } from '../service/cliente-service.service';


@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent {

  constructor(@Inject(MAT_DIALOG_DATA)public data: {comp: any, flag: any, index: any}, private router: Router, private dialogRef: MatDialogRef<ModificarClienteComponent>,
  private clienteService: ClienteServiceService) { }

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

  
  onSubmit(flag: any, index: any) {
    const detalle = {
      cedula: this.usuarioNuevo.value.cedula,
      nombres: this.usuarioNuevo.value.nombres,
      apellidos: this.usuarioNuevo.value.apellidos,
      direccion: this.usuarioNuevo.value.direccion,
      edad: this.usuarioNuevo.value.edad
    };

    //Si flag es true crea un nuevo registro
    //Caso contrario lo actualiza 
    if(flag == true){
      this.clienteService.agregar(detalle);
    } else {
      this.clienteService.modificar(detalle, index);
    }
    
    this.redirectTo('/cliente', detalle);
    this.dialogRef.close();
    
  }

  redirectTo(uri:string, detalle: any){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { data: detalle}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
