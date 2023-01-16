import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {

  listComprobante: any = [
    // {
    //   numero: '1',
    //   producto: 'Tubo Plastico',
    //   cantidad: 2,
    //   precioUnitario: 2.00,
    //   precioTotal: 4.00
    // },
    // {
    //   numero: '2',
    //   producto: 'Taladro Domestico',
    //   cantidad: 1,
    //   precioUnitario: 24.99,
    //   precioTotal: 24.99
    // }

  ]

  constructor() { }

  getDetalle(){
    return this.listComprobante.slice();
  }

  eliminarDetalle(index: number){
    this.listComprobante.splice(index, 1)
  }

  agregarDetalle(detalle: any){
    this.listComprobante.push(detalle)
  }
}
