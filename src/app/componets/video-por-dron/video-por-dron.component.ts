import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-video-por-dron',
  templateUrl: './video-por-dron.component.html',
  styleUrls: ['./video-por-dron.component.css'],
  
})
export class VideoPorDronComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
   
  }


}
