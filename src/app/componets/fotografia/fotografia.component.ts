import { Component, OnInit } from '@angular/core';
import { GaleraiascriptService } from 'src/app/servicios/galeria/galeraiascript.service';
@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {

  
  constructor(private galeria:GaleraiascriptService) { 
    galeria.cargar(["main"]);
  }
  

  ngOnInit(): void {
  }

}
