import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TerrainService } from 'src/app/services/terrain.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Terrain } from 'src/app/entities/Terrain';

@Component({
  selector: 'app-edit-t',
  templateUrl: './edit-t.component.html',
  styleUrls: ['./edit-t.component.css']
})
export class EditTComponent {
  id: any;
  terrain: any;
  terrainForm: FormGroup;
  submitted = false;

  constructor(
    private terrainService: TerrainService,
    private route: ActivatedRoute,
    private fb : FormBuilder,
    private router: Router
  ) { this.terrainForm= this.fb.group({
    name:['',[Validators.required]],
    description:['',[Validators.required]],
    //latitude:['',[Validators.required]],
    //longitude:['',[Validators.required]]
  });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idTerrain'];
    this.loadTerrain();
  }
  initForm():void{
    this.terrainForm = this.fb.group({
      name: [this.terrain.name, Validators.required],
      description: [this.terrain.description, Validators.required],
      latitude: [this.terrain.latitude, Validators.required],
      longitude: [this.terrain.longitude, Validators.required]


        });
  }
  loadTerrain(){

    this.terrainService.getTerrainById(this.id).subscribe(
      data => {
        this.terrain=data;
        this.initForm();
      },
      error => {
        console.log(error);
      }
    );
  }
  
 

  get f(){return this.terrainForm.controls;}
  update(): void {
    this.submitted=true;
    if (this.terrainForm.valid){
      const idTerrain = this.id;
      const data: Terrain={
        name: this.terrainForm.value.name ,
        description: this.terrainForm.value.description,
        latitude: parseFloat(this.terrainForm.value.latitude),
        longitude: parseFloat(this.terrainForm.value.longitude)

      };
      this.terrainService.updateTerrain(idTerrain,data).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
        setTimeout(()=>{
          alert("Le terrain a été modifié avec succés");
          this.router.navigate(['terrains']);
        },1000);
      }else{
        this.terrainForm.markAllAsTouched();
      }
    
  }

}
