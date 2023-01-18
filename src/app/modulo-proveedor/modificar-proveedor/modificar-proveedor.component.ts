import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProveedorService } from '../service/proveedor.service';


@Component({
  selector: 'app-modificar-proveedor',
  templateUrl: './modificar-proveedor.component.html',
  styleUrls: ['./modificar-proveedor.component.css']
})
export class ModificarProveedorComponent {
  

  constructor(@Inject(MAT_DIALOG_DATA)public data: {comp: any, flag: any, index: any}, private router: Router, private dialogRef: MatDialogRef<ModificarProveedorComponent>,
  private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    
  }

  //navigationExtras: NavigationExtras={};

  usuarioNuevo = new FormGroup({
    codigo: new FormControl('',Validators.required),
    ruc: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  
  onSubmit(flag: any, index: any) {
    const detalle = {
      codigo: this.usuarioNuevo.value.codigo,
      ruc: this.usuarioNuevo.value.ruc,
      nombres: this.usuarioNuevo.value.nombres,
      direccion: this.usuarioNuevo.value.direccion,
      telefono: this.usuarioNuevo.value.telefono,
      email: this.usuarioNuevo.value.email
    };

    //Si flag es true crea un nuevo registro
    //Caso contrario lo actualiza 
    if(flag == true){
      this.proveedorService.agregar(detalle);
    } else {
      this.proveedorService.modificar(detalle, index);
    }
    
    this.redirectTo('/proveedor', detalle);
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
