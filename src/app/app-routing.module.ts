import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './modulo-clientes/cliente/cliente.component';

const routes: Routes = [
  { path: 'login', 
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) 
  },
  { path: 'inicio', 
    loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule) 
  },
  { path: 'cliente', 
    component: ClienteComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
