import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from '../../interfaces/ClienteInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ModificarClienteComponent } from '../modificar-cliente/modificar-cliente.component';
import { MatDialogRef } from '@angular/material/dialog';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  dataSource: any = [];
  displayedColumns: string[] = ['cedula','nombres', 'apellidos','direccion','edad','opciones']
  
  data = [{
        cedula: '0151245245',      
        nombres: 'Andrés Luis',
        apellidos: 'Carvajal Lozano',
        direccion: 'Quito, Ecuador',
        edad: 50,
        opciones:'modificar'
       
      },
      {
        cedula: '0954658913',      
        nombres: 'Jorge Luis',
        apellidos: 'Charco Aguirre',
        direccion: 'Guayaquil, Ecuador',
        edad: 36,
        opciones:'modificar'
       
      },
      {
        cedula: '0957962158',      
        nombres: 'Andrea Lisbeth',
        apellidos: 'Romero Haro',
        direccion: 'Guayaquil, Ecuador',
        edad: 45,
        opciones:'modificar'
       
      }
    ];
  
  nuevoCliente:any;
  nav: any;

  constructor(private router: Router, public dialog:MatDialog) { 
    
    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;
    let aux = this.data.filter(a=> a!= undefined);
    this.data = aux;
    if (this.nuevoCliente != null)
    {      
      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.data.push(this.nuevoCliente.datosCliente.queryParams);
    }
    
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ClienteInterface>(this.data as ClienteInterface[]);
    console.log(this.data);
  }
  
  openDialogAgregar(){
    this.dialog.open(ModificarClienteComponent, {
      width: '50%',
      data: {comp: {}}
    })
  }

  modificarCliente(element: any, i: any){
    console.log(i);

    let aux = this.data.filter(a=> a!= this.data[i]);
    this.data = aux;


    this.dialog.open(ModificarClienteComponent, {
      width: '50%',
      data: {comp: element}
    })

    console.log(this.data);

    //this.redirectTo('/cliente', objToSend);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  
    
};

