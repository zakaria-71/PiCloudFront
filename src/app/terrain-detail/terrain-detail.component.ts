import { Component, OnInit } from '@angular/core';
import { LeafletDirective } from '@asymmetrik/ngx-leaflet';
import {latLng, tileLayer, marker, Marker} from 'leaflet';
import * as L from 'leaflet';
import { TerrainService } from '../services/terrain.service';
import { Terrain } from '../entities/Terrain';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-terrain-detail',
  templateUrl: './terrain-detail.component.html',
  styleUrl: './terrain-detail.component.scss'
})
export class TerrainDetailComponent implements OnInit{
  terrain: any;
  id:any;
  long=0;
  lat=0;
  

  private map!: L.Map;
  private marker!: L.Marker;
  private centroid: L.LatLngExpression = [42.3601, -71.0589]; //
  constructor(private terrainService : TerrainService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idTerrain']

    this.terrainService.getTerrainById(this.id).subscribe(
      data => {
        this.terrain=data;
        this.long= this.terrain.longitude;
        this.lat= this.terrain.latitude; 
        this.initMap(this.lat,this.long)
        },
      error => {
        console.log(error);
      }
    );
   /*console.log(this.id);
      this.terrainService.getTerrainById(this.id).subscribe(data => {
          this.terrain=data;
        });
       
       console.log(this.long);
       this.initMap(this.lat,this.long)
       //alert(this.long);
*/
  }
  

  private initMap(lat: any, long: any): void {
    this.map = L.map('map', {
      center: [lat,long],
      zoom: 12
    });
    

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.marker = L.marker([lat, long], {icon: greenIcon}).addTo(this.map);

    // create 5 random jitteries and add them to map
    /*const jittery = Array(5).fill(this.centroid).map( 
        x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10 ]
      ).map(
        x => L.marker(x as L.LatLngExpression)
      ).forEach(
        x => x.addTo(this.map)
      );
*/
/*const marker = L.marker([lat,long]).addTo(this.map);
    tiles.addTo(this.map);*/
  
  }


  
/*options: any;
  leafletMarker !: LeafletDirective;

  constructor(public marker: Marker<any>) {}

  ngOnInit(): void {
    // Retrieve the terrain ID from the URL

    // Example coordinates (replace with dynamic data)
    const lat = 40.73061; // Example latitude
    const lng = -73.935242; // Example longitude

    // Set up map options
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap contributors',
        }),
      ],
      zoom: 14,
      center: latLng(lat, lng),
    };

    // Add a marker to the map
    this.marker = marker([lat, lng]).bindPopup('Selected Terrain');
  }*/
}
var iconUrl = 'https://w7.pngwing.com/pngs/567/857/png-transparent-red-and-gray-lever-marker-pen-computer-icons-location-place-tag-s-angle-sphere-map-thumbnail.png';
var greenIcon = L.icon({
  iconUrl: iconUrl,
  //shadowUrl: 'leaf-shadow.png',

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

