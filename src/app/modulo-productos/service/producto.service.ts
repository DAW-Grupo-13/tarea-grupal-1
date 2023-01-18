import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  listProducto = [{
    codigo: '10025',      
    categoria: 'Electrica',
    idProveedor: '1001',
    descripcion: 'Taladro Domestico',
    presioVenta: 50,
    presioCompra: 45,
    stock: 50
   
  },
  {
    codigo: '10026',      
    categoria: 'Plomeria',
    idProveedor: '1001',
    descripcion: 'Tubo PLastico',
    presioVenta: 12,
    presioCompra: 10,
    stock: 25
   
  },
  {
    codigo: '10027',      
    categoria: 'Manual',
    idProveedor: '1001',
    descripcion: 'Destornillador Plano',
    presioVenta: 5,
    presioCompra: 3.5,
    stock: 200
   
  },
  {
    codigo: '10028',      
    categoria: 'Iluminacion',
    idProveedor: '1001',
    descripcion: 'Boquilla de ceramica',
    presioVenta: 20,
    presioCompra: 18,
    stock: 100
   
  }
];

  constructor() { }

  getDetalle(){
    return this.listProducto.slice();
  }

  eliminar(index: number){
    this.listProducto.splice(index, 1)
  }

  agregar(detalle: any){
    this.listProducto.push(detalle)
  }

  modificar(detalle: any, index: number){
    this.listProducto[index] = detalle;
  }

  buscarPorCodigo(codigo: any){
    let aux:any;
    this.listProducto.forEach(element => {
      if(element.codigo == codigo){
        aux = element;
      }
    });
    return aux;
  }
}
