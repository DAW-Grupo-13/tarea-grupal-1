
import { Component, OnInit } from '@angular/core';
// import { ProveedorInterface } from '../../interfaces/ProveedorInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ModificarProveedorComponent } from '../modificar-proveedor/modificar-proveedor.component';
import { MatDialogRef } from '@angular/material/dialog';
import { toArray } from 'rxjs';
import { ProveedorService } from '../service/proveedor.service';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit{
  dataSource: any = [];
  displayedColumns: string[] = ['codigo','ruc','nombres', 'direccion','telefono','email','opciones']
  
  listProveedor:any[] = [];
  
  nuevoProveedor:any;
  nav: any;

  constructor(private router: Router, public dialog:MatDialog, private proveedorService: ProveedorService) { 
    
       
    this.cargarDetalle();
    
  };

  ngOnInit(): void {
    this.cargarDetalle();
  }

  cargarDetalle(){
    this.listProveedor = this.proveedorService.getDetalle();
    this.dataSource = new MatTableDataSource(this.listProveedor);
  }
  
  openDialogAgregar(){
    this.dialog.open(ModificarProveedorComponent, {
      width: '50%',
      data: {
        comp: {},
        flag: true
      }
    })
  }

  modificarProveedor(element:any, index: number){


    this.dialog.open(ModificarProveedorComponent, {
      width: '50%',
      data: {
        comp: element,
        flag: false,
        index: index
      }
    })

  }

  eliminarProveedor(index: number){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.proveedorService.eliminar(index);
        this.cargarDetalle();
      }
    });
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  
    
};



