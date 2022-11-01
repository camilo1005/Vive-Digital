import { Component, OnInit } from '@angular/core';
import { GaleraiascriptService } from 'src/app/servicios/galeria/galeraiascript.service';
@Component({
  selector: 'app-animacion-digital',
  templateUrl: './animacion-digital.component.html',
  styleUrls: ['./animacion-digital.component.css']
})
export class AnimacionDigitalComponent implements OnInit {

  constructor(private galeria:GaleraiascriptService) { 
    galeria.cargar([""]);
  }
  

  ngOnInit(): void {
  }

}
