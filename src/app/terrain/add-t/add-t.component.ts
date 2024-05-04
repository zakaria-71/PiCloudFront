import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Terrain } from 'src/app/entities/Terrain';
import { TerrainService } from 'src/app/services/terrain.service';

@Component({
  selector: 'app-add-t',
  templateUrl: './add-t.component.html',
  styleUrls: ['./add-t.component.css']
})
export class AddTComponent {
  terrainForm: FormGroup;
  submitted = false;
  constructor(
    private router: Router,
    private terrainService: TerrainService,
    private fb: FormBuilder
  ){
    this.terrainForm=this.fb.group({
      name:['',[Validators.required]],
      description:[null,[Validators.required]],
      latitude:['',[Validators.required]],
      longitude:['',[Validators.required]]
    });
  }
  saveTerrain():void{
    if(this.terrainForm.valid){
      const terrain : Terrain={
        name: this.terrainForm.value.name ,
        description: this.terrainForm.value.description ,
        latitude: parseFloat(this.terrainForm.value.latitude),
        longitude: parseFloat(this.terrainForm.value.longitude)

      };
      this.terrainService
      .addTerrain(terrain)
      .subscribe((data)=>{
        this.submitted=true;
      });
      setTimeout(()=>{
        alert("le terrain a été crée avec succés")
        this.router.navigate(['terrains']);
      },1000);
    }else{
      this.terrainForm.markAllAsTouched();
    }
  }


}
