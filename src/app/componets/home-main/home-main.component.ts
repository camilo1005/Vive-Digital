import { Component, Input, OnInit } from '@angular/core';
import { GaleraiascriptService } from 'src/app/servicios/galeria/galeraiascript.service';
 interface carouselImage{
  imageAlt:string;
  imageSrc:string;
 }
@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  constructor(private galeria:GaleraiascriptService) { 
    galeria.cargar(["main"]);
  }



  ngOnInit(): void {
  }

}
