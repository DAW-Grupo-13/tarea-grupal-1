import { Component, OnInit } from '@angular/core';
import { ProductosInterface } from '../../interfaces/ProductosInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ModificarProductosComponent } from '../modificar-productos/modificar-productos.component';
import { MatDialogRef } from '@angular/material/dialog';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  dataSource: any = [];
  displayedColumns: string[] = ['codigo','categoria', 'idProveedor','descripcion','presioVenta','presioCompra','stock','opciones']
  
  data = [{
        codigo: '10025',      
        categoria: 'Electrica',
        idProveedor: '1001',
        descripcion: 'Taladro Domestico',
        presioVenta: 50,
        presioCompra: 45,
        stock: 50,
        opciones:'modificar'
       
      },
      {
        codigo: '10026',      
        categoria: 'Plomeria',
        idProveedor: '1001',
        descripcion: 'Tubo PLastico',
        presioVenta: 12,
        presioCompra: 10,
        stock: 25,
        opciones:'modificar'
       
      },
      {
        codigo: '10027',      
        categoria: 'Manual',
        idProveedor: '1001',
        descripcion: 'Destornillador Plano',
        presioVenta: 5,
        presioCompra: 3.5,
        stock: 200,
        opciones:'modificar'
       
      },
      {
        codigo: '10028',      
        categoria: 'Iluminacion',
        idProveedor: '1001',
        descripcion: 'Boquilla de ceramica',
        presioVenta: 20,
        presioCompra: 18,
        stock: 100,
        opciones:'modificar'
       
      }
    ];
  
  nuevoProductos:any;
  nav: any;

  constructor(private router: Router, public dialog:MatDialog) { 
    
    this.nav = this.router.getCurrentNavigation();
    this.nuevoProductos = this.nav.extras.state;
    let aux = this.data.filter(a=> a!= undefined);
    this.data = aux;
    if (this.nuevoProductos != null)
    {      
      console.log(this.nuevoProductos.datosProductos.queryParams);
      this.data.push(this.nuevoProductos.datosProductos.queryParams);
    }
    
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ProductosInterface>(this.data as ProductosInterface[]);
    console.log(this.data);
  }
  
  openDialogAgregar(){
    this.dialog.open(ModificarProductosComponent, {
      width: '50%',
      data: {comp: {}}
    })
  }

  modificarProductos(element: any, i: any){
    console.log(i);

    let aux = this.data.filter(a=> a!= this.data[i]);
    this.data = aux;


    this.dialog.open(ModificarProductosComponent, {
      width: '50%',
      data: {comp: element}
    })

    console.log(this.data);

    //this.redirectTo('/productos', objToSend);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  
    
};

