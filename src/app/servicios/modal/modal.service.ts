import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  cargar(archivos:string[]){
    for (let archivo of archivos) {
      let script =document.createElement("script");
      script.src="../../../assets/js/modal/"+archivo+ ".js";

      let body=document.getElementsByTagName("body")[0];
      body.appendChild(script)
 
      
    }
  }
}
