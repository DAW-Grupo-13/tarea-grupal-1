import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  listProveedor: any = [{
    codigo: '1001',
    ruc: '0151245245001',      
    nombres: 'Finpac S.A',
    direccion: 'Guayaquil, Ecuador',
    telefono: '0940745894',
    email: 'finpac@hotmail.com'
   
  },
  {
    codigo: '1002',
    ruc: '0954658913001',      
    nombres: 'Jorge Luis',
    direccion: 'Guayaquil, Ecuador',
    telefono: '0940741063',
    email: 'jorgeluis14@hotmail.com'
   
  },
  {
    codigo: '1003',
    ruc: '0957962158001',      
    nombres: 'Farmaenlace Cia. Ltda.',
    direccion: 'Guayaquil, Ecuador',
    telefono: '0930837482',
    email: 'Farmaenlace@farmaenlace.com'
   
  }
];
  constructor() { }

  getDetalle(){
    return this.listProveedor.slice();
  }

  eliminar(index: number){
    this.listProveedor.splice(index, 1)
  }

  agregar(detalle: any){
    this.listProveedor.push(detalle)
  }

  modificar(detalle: any, index: number){
    this.listProveedor[index] = detalle;
  }

}
