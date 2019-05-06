import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormulaireService } from '../formulaire.service';

@Component({
  selector: 'app-gestion-formulaire-add',
  templateUrl: './gestion-formulaire-add.component.html',
  styleUrls: ['./gestion-formulaire-add.component.scss']
})
export class GestionFormulaireAddComponent implements OnInit {

  formulaireForm: FormGroup;
  submitted = false; 
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private formulaireservice: FormulaireService) 
    { }

  ngOnInit() {
    // create the validation
    this.formulaireForm = this.formBuilder.group({
      num_dossier: ['', Validators.required , Validators.maxLength(10)], 
      convention: ['', [Validators.required, ]]
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
