import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/servicios/modal/modal.service';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent implements OnInit {
  constructor(private galeria:ModalService) { 
    galeria.cargar(["modal2"]);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}