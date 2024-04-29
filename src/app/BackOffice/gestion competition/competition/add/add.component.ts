import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompetitionService} from "../../services/competition.service";
import {Router} from "@angular/router";
import {Competition} from "../../models/competition.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  compForm: FormGroup;
  submitted = false;
  constructor(
    private router: Router,
    private compService: CompetitionService,
    private fb: FormBuilder
  ) {
    this.compForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(5)]],
      dateDebut: [null,[Validators.required]],
      categorie:['', [Validators.required]]
    });
  }

  saveComp(): void {
    if (this.compForm.valid) {
      const comp: Competition = {
        nom: this.compForm.value.nom,
        dateDebut: new Date(this.compForm.value.dateDebut).toISOString(),
        categorie:this.compForm.value.categorie
      };

      this.compService
        .addCompetition(comp)
        .subscribe((data) => {
          this.submitted = true;
        });

      this.router.navigate(['competitions']);
    } else {

      this.compForm.markAllAsTouched();
    }
  }


}
