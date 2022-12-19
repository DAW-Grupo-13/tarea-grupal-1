import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', 
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) 
  },
  { path: 'inicio', 
    loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
