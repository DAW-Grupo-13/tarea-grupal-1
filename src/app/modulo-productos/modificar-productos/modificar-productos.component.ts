import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-modificar-productos',
  templateUrl: './modificar-productos.component.html',
  styleUrls: ['./modificar-productos.component.css']
})
export class ModificarProductosComponent {

  constructor(@Inject(MAT_DIALOG_DATA)public data: {comp: any}, private router: Router, private dialogRef: MatDialogRef<ModificarProductosComponent>) { }

  ngOnInit(): void {
    
  }

  //navigationExtras: NavigationExtras={};

  productoNuevo = new FormGroup({
    codigo: new FormControl('',Validators.required),
    categoria: new FormControl('',Validators.required),
    idProveedor: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    presioVenta: new FormControl('', Validators.required),
    presioCompra: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required)
  })

  
  onSubmit(valor: any) {
    let objToSend: NavigationExtras = {
      queryParams: {
        codigo: this.productoNuevo.value.codigo,
        categoria: this.productoNuevo.value.categoria,
        idProveedor: this.productoNuevo.value.idProveedor,
        descripcion: this.productoNuevo.value.descripcion,
        presioVenta: this.productoNuevo.value.presioVenta,
        presioCompra: this.productoNuevo.value.presioCompra,
        stock: this.productoNuevo.value.stock,
        opciones: 'modificar'
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    
    if(valor != undefined && valor!= null){
      this.redirectTo('/productos', objToSend);
    }
  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosproductos: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
