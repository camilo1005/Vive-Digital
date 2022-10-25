import { Component, OnInit } from '@angular/core';
import { CargarService } from 'src/app/servicios/buscador/cargar.service';


@Component({
  selector: 'app-digital-web',
  templateUrl: './digital-web.component.html',
  styleUrls: ['./digital-web.component.css']
})
export class DigitalWebComponent implements OnInit {

  constructor(private cargarscript:CargarService) { 
    cargarscript.cargar(["hola"]);
  }

  ngOnInit(): void {
  }

}
