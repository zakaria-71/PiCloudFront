import { ReservationT } from '../entities/ReservationT';
import { Terrain } from '../entities/Terrain';
import { ReservationTService } from '../services/reservation-t.service';
import { TerrainService } from '../services/terrain.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit{
  terrains!: Terrain[];
  
  constructor(private terrainService:TerrainService,private router:Router, private reservationTService : ReservationTService){}
  ngOnInit():void{
    this.terrainService.getTerrains().subscribe((data:Terrain[])=>{
      console.log(data);
      this.terrains=data;
    });
  }
  delete(idTerrain:any){

  this.terrainService.deleteTerrain(idTerrain).subscribe(
    data=>{
      window.location.reload();
      alert("Le terrain a été supprimé avec succés");
    }
  )

}      
    

    
  details(idTerrain: any) {
    this.router.navigate(['terrains/more/' + idTerrain]);
  }
  edit(idTerrain:any){
    this.router.navigate(['terrains/edit/'+idTerrain]);
  }


}
