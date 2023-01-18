import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {
    listCliente: any = [{
      cedula: '0151245245',      
      nombres: 'Andrés Luis',
      apellidos: 'Carvajal Lozano',
      direccion: 'Quito, Ecuador',
      edad: 50
    
    },
    {
      cedula: '0954658913',      
      nombres: 'Jorge Luis',
      apellidos: 'Charco Aguirre',
      direccion: 'Guayaquil, Ecuador',
      edad: 36
    
    },
    {
      cedula: '0957962158',      
      nombres: 'Andrea Lisbeth',
      apellidos: 'Romero Haro',
      direccion: 'Guayaquil, Ecuador',
      edad: 45
    
    }
  ];

  constructor() { }

  getDetalle(){
    return this.listCliente.slice();
  }

  eliminar(index: number){
    this.listCliente.splice(index, 1)
  }

  agregar(detalle: any){
    this.listCliente.push(detalle)
  }

  modificar(detalle: any, index: number){
    this.listCliente[index] = detalle;
  }
}
