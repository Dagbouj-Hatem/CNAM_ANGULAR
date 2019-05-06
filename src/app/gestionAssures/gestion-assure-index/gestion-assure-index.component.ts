import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion-assure-index',
  templateUrl: './gestion-assure-index.component.html',
  styleUrls: ['./gestion-assure-index.component.scss']
})
export class GestionAssureIndexComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  assures;
  gestionAssures= [
    {
      id:1,
      Id:1,
      nom : 'ahmed',
      prenom : 'hakked',
      matricule:'202',
      date :'01/09/2019'
    },
    {
      id:2,
      Id:2,
      nom : 'chikhaoui',
      prenom : 'jihene',
      matricule:'203',
      date :'01/09/2019'
    },
    {
      id:3,
      Id:3,
      nom : 'majdoub',
      prenom : 'wafa',
      matricule:'204',
      date :'01/09/2019'
    }
  ];
  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
   
  }
  // delete assure 
  delete(id) {
    console.log(id);
  }
}
