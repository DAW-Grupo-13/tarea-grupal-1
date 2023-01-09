import { state } from '@angular/animations';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ComprobanteService } from '../service/comprobante.service';

@Component({
  selector: 'app-agregar-detalle',
  templateUrl: './agregar-detalle.component.html',
  styleUrls: ['./agregar-detalle.component.css']
})
export class AgregarDetalleComponent {


  constructor(@Inject(MAT_DIALOG_DATA)public data: {comp: any}, private router: Router, private dialogRef: MatDialogRef<AgregarDetalleComponent>,
              private serviceComprobante: ComprobanteService) { }

  detalleNuevo = new FormGroup({
    numero: new FormControl('',Validators.required),
    producto: new FormControl('',Validators.required),
    cantidad: new FormControl('', Validators.required),
    precioUnitario: new FormControl('', Validators.required),
    precioTotal: new FormControl('', Validators.required)
  })


  onSubmit() {
    const detalle = {
        numero: this.detalleNuevo.value.numero,
        producto: this.detalleNuevo.value.producto,
        cantidad: this.detalleNuevo.value.cantidad,
        precioUnitario: this.detalleNuevo.value.precioUnitario,
        precioTotal: this.detalleNuevo.value.precioTotal
      };

    this.serviceComprobante.agregarDetalle(detalle);
    this.redirectTo('/compra-venta', detalle);
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
