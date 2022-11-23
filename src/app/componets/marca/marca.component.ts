import { Component, OnInit } from '@angular/core';
import { GaleraiascriptService } from 'src/app/servicios/galeria/galeraiascript.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  constructor(private galeria:GaleraiascriptService) { 
    galeria.cargar([""]);
  }
  
  ngOnInit(): void {
  }

}
