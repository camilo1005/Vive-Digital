import { Component, OnInit } from '@angular/core';
import { CargarService } from 'src/app/servicios/buscador/cargar.service';
@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {


  constructor(private cargarscript:CargarService) { 
    cargarscript.cargar(["hola"]);
  }

  ngOnInit(): void {
  }

}
