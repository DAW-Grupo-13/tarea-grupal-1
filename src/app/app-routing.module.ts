import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './modulo-clientes/cliente/cliente.component';
import { CompraVentaComponent } from './modulo-compra-venta/compra-venta/compra-venta.component';
import { ProductosComponent } from './modulo-productos/productos/productos.component';
import { ProveedorComponent } from './modulo-proveedor/proveedor/proveedor.component';

const routes: Routes = [
  { path: 'login', 
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) 
  },
  { path: 'inicio', 
    loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule) 
  },
  { path: 'cliente', 
    component: ClienteComponent 
  },
  { path: 'compra-venta', 
  component: CompraVentaComponent 
  },
  { path: 'productos', 
    component: ProductosComponent 
  },
  { path: 'proveedor', 
    component: ProveedorComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
