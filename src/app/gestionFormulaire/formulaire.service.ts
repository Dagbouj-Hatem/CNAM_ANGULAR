import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  constructor() { }

  save(inputs) {
    console.log(inputs);
  }
}
