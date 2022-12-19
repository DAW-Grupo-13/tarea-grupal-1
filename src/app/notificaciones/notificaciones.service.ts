import { Injectable } from '@angular/core';
import { Toaster, ToastType } from "ngx-toast-notifications";

@Injectable({
    providedIn: "root"
  })

export class NotificacionesService {

    
    constructor(private toaster: Toaster) {
    }
 
    showToast(tipo: ToastType, titulo: string, resumen: string ) {
        
        this.toaster.open({
          text: resumen,
          caption: titulo,
          type: tipo,
        });
      }
}