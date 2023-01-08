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
import { ClienteComponent } from './cliente/cliente.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClienteComponent,
    ModificarClienteComponent,
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule,
    ToastNotificationsModule,
    ReactiveFormsModule
   // HomeModule
  ],
  providers: [CookieService, Toaster,
    {provide: TOAST_NOTIFICATIONS_CONFIG, useValue: {duration: 3000, position: "top-right"}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
