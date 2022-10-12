import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  @Input() images: carouselImage[] =[]

  selectedIndex=0;

  ngOnInit(): void {
  }

}
