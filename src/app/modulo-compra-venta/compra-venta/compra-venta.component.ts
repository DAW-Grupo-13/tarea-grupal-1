import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AgregarDetalleComponent } from '../agregar-detalle/agregar-detalle.component';
import { ComprobanteService } from '../service/comprobante.service';

@Component({
  selector: 'app-compra-venta',
  templateUrl: './compra-venta.component.html',
  styleUrls: ['./compra-venta.component.css']
})
export class CompraVentaComponent {

  displayedColumns: string[] = ['numero','producto', 'cantidad','precioUnitario','precioTotal','opciones']
  dataSource:any = MatTableDataSource<any>;
  listDetalle:any[] = [];
  detalleAux:any;
  nav: any;

  constructor(private comprobanteService: ComprobanteService,
              private router: Router, public dialog:MatDialog){

                this.cargarDetalle();
    
              }

  ngOnInit(): void{
    this.cargarDetalle();
  }

  cargarDetalle(){
    this.listDetalle = this.comprobanteService.getDetalle();
    this.dataSource = new MatTableDataSource(this.listDetalle);
  }

  eliminarDetalle(index: number){
    this.comprobanteService.eliminarDetalle(index);
    this.cargarDetalle();
  }

  openDialogAgregar(){
    this.dialog.open(AgregarDetalleComponent, {
      width: '50%',
      data: {comp: {}}
    })
  }

  modificarDetalle(element:any, index: number){


    this.dialog.open(AgregarDetalleComponent, {
      width: '50%',
      data: {comp: element}
    })

    this.comprobanteService.eliminarDetalle(index);

  }


}
