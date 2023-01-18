import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../service/producto.service';
import { ProveedorService } from 'src/app/modulo-proveedor/service/proveedor.service';


@Component({
  selector: 'app-modificar-productos',
  templateUrl: './modificar-productos.component.html',
  styleUrls: ['./modificar-productos.component.css']
})
export class ModificarProductosComponent {

  listaProveedor = [
    {
      codigo: '1001',
      ruc: '0151245245001',      
      nombres: 'Finpac S.A',
      direccion: 'Guayaquil, Ecuador',
      telefono: '0940745894',
      email: 'finpac@hotmail.com'
     
    }
  ]

  constructor(@Inject(MAT_DIALOG_DATA)public data: {comp: any, flag: any, index: any}, private router: Router, private dialogRef: MatDialogRef<ModificarProductosComponent>,
  private productoService: ProductoService, private proveedorService: ProveedorService) {
    this.getProveedor();
  }

  ngOnInit(): void {
    this.getProveedor();
  }

  listaCategoria = ["Plomeria", "Manual", "Electrica", "Iluminacion"];

  //navigationExtras: NavigationExtras={};

  productoNuevo = new FormGroup({
    codigo: new FormControl('',Validators.required),
    categoria: new FormControl(this.data.comp.categoria,Validators.required),
    idProveedor: new FormControl(this.data.comp.idProveedor, Validators.required),
    descripcion: new FormControl('', Validators.required),
    presioVenta: new FormControl('', Validators.required),
    presioCompra: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required)
  })

  
  onSubmit(flag: any, index: any) {
    const detalle = {
      codigo: this.productoNuevo.value.codigo,
      categoria: this.productoNuevo.value.categoria,
      idProveedor: this.productoNuevo.value.idProveedor,
      descripcion: this.productoNuevo.value.descripcion,
      presioVenta: this.productoNuevo.value.presioVenta,
      presioCompra: this.productoNuevo.value.presioCompra,
      stock: this.productoNuevo.value.stock
    };

    //Si flag es true crea un nuevo registro
    //Caso contrario lo actualiza 
    if(flag == true){
      this.productoService.agregar(detalle);
    } else {
      this.productoService.modificar(detalle, index);
    }
    
    this.redirectTo('/productos', detalle);
    this.dialogRef.close();
    
  }
    
  redirectTo(uri:string, detalle: any){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { data: detalle}}));
  }

  getProveedor(){
    this.listaProveedor = this.proveedorService.getDetalle();
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
