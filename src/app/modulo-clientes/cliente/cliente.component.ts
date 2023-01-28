import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from '../../interfaces/ClienteInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ModificarClienteComponent } from '../modificar-cliente/modificar-cliente.component';
import { MatDialogRef } from '@angular/material/dialog';
import { toArray } from 'rxjs';
import { ClienteServiceService } from '../service/cliente-service.service';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  dataSource: any = [];
  displayedColumns: string[] = ['cedula','nombres', 'apellidos','direccion','edad','opciones']
    
  nuevoCliente:any;
  nav: any;
  listCliente:any[] = [];

  constructor(private router: Router, public dialog:MatDialog, private clienteService: ClienteServiceService) { 
    
    this.cargarDetalle();
    
  };

  ngOnInit(): void {
    this.cargarDetalle();
  }

  cargarDetalle(){
    this.listCliente = this.clienteService.getDetalle();
    this.dataSource = new MatTableDataSource(this.listCliente);
  }
  
  openDialogAgregar(){
    this.dialog.open(ModificarClienteComponent, {
      width: '50%',
      data: {
        comp: {},
        flag: true
      }
    })
  }

  modificarCliente(element:any, index: number){


    this.dialog.open(ModificarClienteComponent, {
      width: '50%',
      data: {
        comp: element,
        flag: false,
        index: index
      }
    })

  }

  eliminarCliente(index: number){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.clienteService.eliminar(index);
        this.cargarDetalle();
      }
    });

    
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  
    
};

