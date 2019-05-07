import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormulaireService } from '../formulaire.service';

@Component({
  selector: 'app-gestion-formulaire-edit',
  templateUrl: './gestion-formulaire-edit.component.html',
  styleUrls: ['./gestion-formulaire-edit.component.scss']
})
export class GestionFormulaireEditComponent implements OnInit {

  formulaireForm: FormGroup;
  submitted = false; 

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private formulaireservice: FormulaireService) { }

  ngOnInit() {
    // create the validation
    this.formulaireForm = this.formBuilder.group({
      num_dossier: ['', Validators.required, Validators.maxLength(10) ], 
      convention: ['', Validators.required, ],
      matricule: ['', Validators.required, ],
      nom: ['', Validators.required, ],
      prenom: ['', Validators.required, ],
      date_etablissement: ['', Validators.required, ],
      date_debut: ['', Validators.required, ],
      date_fin: ['', Validators.required, ],
      code_caisse: ['', Validators.required, ],
      type_formulaire: ['', Validators.required, ],
    });
  }

  
  // get the forum control 
  get formControls() { return this.formulaireForm.controls; }

  // save in data base with service
  save()
  {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formulaireForm.invalid) {
            return;
        }

        // save with service 
        this.formulaireservice.save(this.formulaireForm.value);
  }

}
