import { Component, OnInit } from '@angular/core';
import { GaleraiascriptService } from 'src/app/servicios/galeria/galeraiascript.service';
@Component({
  selector: 'app-publicidad-exterior',
  templateUrl: './publicidad-exterior.component.html',
  styleUrls: ['./publicidad-exterior.component.css']
})
export class PublicidadExteriorComponent implements OnInit {

  constructor(private galeria:GaleraiascriptService) { 
    galeria.cargar(["main"]);
  }
  

  ngOnInit(): void {
  }

}
