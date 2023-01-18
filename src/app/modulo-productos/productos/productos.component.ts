import { Component, OnInit } from '@angular/core';
import { ProductosInterface } from '../../interfaces/ProductosInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ModificarProductosComponent } from '../modificar-productos/modificar-productos.component';
import { MatDialogRef } from '@angular/material/dialog';
import { toArray } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  dataSource: any = [];
  displayedColumns: string[] = ['codigo','categoria', 'idProveedor','descripcion','presioVenta','presioCompra','stock','opciones']
  
  listProducto:any[] = [];
  
  nuevoProductos:any;
  nav: any;

  constructor(private router: Router, public dialog:MatDialog, private productoService: ProductoService) { 
    
    this.cargarDetalle();
    
  };


  ngOnInit(): void {
    this.cargarDetalle();
  }

  cargarDetalle(){
    this.listProducto = this.productoService.getDetalle();
    this.dataSource = new MatTableDataSource(this.listProducto);
  }
  
  openDialogAgregar(){
    this.dialog.open(ModificarProductosComponent, {
      width: '50%',
      height: '90%',
      data: {
        comp: {},
        flag: true
      }
    })
  }

  modificarProducto(element:any, index: number){


    this.dialog.open(ModificarProductosComponent, {
      width: '50%',
      data: {
        comp: element,
        flag: false,
        index: index
      }
    })

  }

  eliminarProducto(index: number){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.productoService.eliminar(index);
        this.cargarDetalle();
      }
    });

    
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  
    
};

