import { Component, OnInit } from '@angular/core';
import { Terrain } from 'src/app/entities/Terrain';
import { TerrainService } from 'src/app/services/terrain.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-t',
  templateUrl: './details-t.component.html',
  styleUrls: ['./details-t.component.css']
})
export class DetailsTComponent implements OnInit {
  id: any;
  terrain:any;

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['idTerrain'];
    this.terrainService.getTerrainById(this.id).subscribe(
      data => {
        this.terrain = data;
      }
    )
  }
  constructor(
    private terrainService: TerrainService,
    public route: ActivatedRoute
  ) { }


}
