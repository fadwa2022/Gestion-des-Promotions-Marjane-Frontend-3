import { Component, OnInit } from '@angular/core';
import { Responsable } from 'src/app/models/responsable.model';
import { ResponsableService } from '../../service/responsableservice.service';

@Component({
  selector: 'app-responsable-list',
  templateUrl: './responsable-list.component.html',
  styleUrls: ['./responsable-list.component.css']
})
export class ResponsableListComponent implements OnInit {
  responsables: Responsable[] = [];

  constructor(private responsableService: ResponsableService) {}

  ngOnInit(): void {
    this.responsableService.getAllResponsables().subscribe(
      (responsables) => {
        this.responsables = responsables;
        console.log( responsables);
      },
      (error) => {
        console.error('Erreur lors de la récupération des responsables :', error);
      }
    );
  }
}
