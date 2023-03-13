import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { CookieService } from 'ngx-cookie-service';
import { Toaster, ToastNotificationsModule, ToastType, TOAST_NOTIFICATIONS_CONFIG } from "ngx-toast-notifications";
import { HomeModule } from './home/home/home.module';
import { HomeComponent } from './home/home/home.component';
import { ClienteComponent } from './modulo-clientes/cliente/cliente.component';
import { ModificarClienteComponent } from './modulo-clientes/modificar-cliente/modificar-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompraVentaComponent } from './modulo-compra-venta/compra-venta/compra-venta.component';
import { AgregarDetalleComponent } from './modulo-compra-venta/agregar-detalle/agregar-detalle.component';
import { ProductosComponent } from './modulo-productos/productos/productos.component';
import { ModificarProductosComponent } from './modulo-productos/modificar-productos/modificar-productos.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ProveedorComponent } from './modulo-proveedor/proveedor/proveedor.component';
import { ModificarProveedorComponent } from './modulo-proveedor/modificar-proveedor/modificar-proveedor.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClienteComponent,
    ModificarClienteComponent,
    CompraVentaComponent,
    AgregarDetalleComponent,
    ProductosComponent,
    ModificarProductosComponent,
    ConfirmationDialogComponent,
    ProveedorComponent,
    ModificarProveedorComponent
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule,
    ToastNotificationsModule,
    ReactiveFormsModule,
    HttpClientModule
   // HomeModule
  ],
  providers: [CookieService, Toaster,
    {provide: TOAST_NOTIFICATIONS_CONFIG, useValue: {duration: 3000, position: "top-right"}},
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
