import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/servicios/modal/modal.service';

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

  constructor(private galeria:ModalService) { 
    galeria.cargar([""]);
  }



  ngOnInit(): void {
  }

}
