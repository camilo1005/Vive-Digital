import { Component, OnInit } from '@angular/core';
import { GaleraiascriptService } from 'src/app/servicios/galeria/galeraiascript.service';
@Component({
  selector: 'app-impresos',
  templateUrl: './impresos.component.html',
  styleUrls: ['./impresos.component.css']
})
export class ImpresosComponent implements OnInit {

  constructor(private galeria:GaleraiascriptService) { 
    galeria.cargar(["main"]);
  }
  

  ngOnInit(): void {
  }

}
