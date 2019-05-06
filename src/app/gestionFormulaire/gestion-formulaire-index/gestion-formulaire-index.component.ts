import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-formulaire-index',
  templateUrl: './gestion-formulaire-index.component.html',
  styleUrls: ['./gestion-formulaire-index.component.scss']
})
export class GestionFormulaireIndexComponent implements OnInit {

  gestionFormulaire = [
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
  constructor() { }
  ngOnInit() {
  }
   // delete formulaire 
   delete(id){
    console.log(id);
  }
}
