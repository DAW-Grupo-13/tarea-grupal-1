import { state } from '@angular/animations';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ProductoService } from 'src/app/modulo-productos/service/producto.service';
import { ComprobanteService } from '../service/comprobante.service';

@Component({
  selector: 'app-agregar-detalle',
  templateUrl: './agregar-detalle.component.html',
  styleUrls: ['./agregar-detalle.component.css']
})
export class AgregarDetalleComponent {

  listaProductos = [{
    codigo: '10025',      
    categoria: 'Electrica',
    idProveedor: '1001',
    descripcion: 'Taladro Domestico',
    presioVenta: 50,
    presioCompra: 45,
    stock: 50
   
  }];

  constructor(@Inject(MAT_DIALOG_DATA)public data: {comp: any, flag: any, index: any}, private router: Router, private dialogRef: MatDialogRef<AgregarDetalleComponent>,
              private serviceComprobante: ComprobanteService, private productoService: ProductoService) { 
    this.getProductos();
  }
  
  ngOnInit(): void{
    this.getProductos();
  }

  detalleNuevo = new FormGroup({
    numero: new FormControl('',Validators.required),
    producto: new FormControl('',Validators.required),
    cantidad: new FormControl('', Validators.required),
    precioUnitario: new FormControl('', Validators.required),
    precioTotal: new FormControl('', Validators.required)
  })


  onSubmit(flag: any, index: any) {
    const detalle = {
        numero: this.detalleNuevo.value.numero,
        producto: this.detalleNuevo.value.producto,
        cantidad: this.detalleNuevo.value.cantidad,
        precioUnitario: this.detalleNuevo.value.precioUnitario,
        precioTotal: this.detalleNuevo.value.precioTotal
      };
    
    //Si flag es true crea un nuevo registro
    //Caso contrario lo actualiza 
    if(flag == true){
      this.serviceComprobante.agregarDetalle(detalle);
    } else {
      this.serviceComprobante.modificarDetalle(detalle, index);
    }
    
    this.redirectTo('/compra-venta', detalle);
    this.dialogRef.close(); 
    
  }

  getProductos(){
    this.listaProductos = this.productoService.getDetalle();
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
