import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleraiascriptService {

  constructor() { }

  cargar(archivos:string[]){
    for (let archivo of archivos) {
      let script =document.createElement("script");
      script.src="../../../assets/js/galeria/"+archivo+ ".js";

      let body=document.getElementsByTagName("body")[0];
      body.appendChild(script)
 
      
    }
  }
}
