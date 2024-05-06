<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from '@angular/core';

=======
import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {CompetitionService} from "../../components/gestion competition/services/competition.service";
>>>>>>> origin/main
=======
import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {CompetitionService} from "../../components/gestion competition/services/competition.service";
>>>>>>> f42ae3051736fb46935dfcdc8251d91ade8f90d3
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
<<<<<<< HEAD
<<<<<<< HEAD
export class BodyComponent {
=======
=======
>>>>>>> f42ae3051736fb46935dfcdc8251d91ade8f90d3
export class BodyComponent implements OnInit{

  constructor(private competitionService: CompetitionService) {
    // Initialiser les données pour les différentes catégories
    this.labeldata = ['FOOT', 'HAND', 'BASKET', 'HACKATHON', 'CHESS', 'ESPORTS', 'CARTE', 'BILLARD'];
    this.realdata = new Array(this.labeldata.length).fill(0);
    this.colorsesprit = ['#FFE6E3', '#F5C1C1', '#FFA07A', '#FFD700', '#ADD8E6', '#90EE90', '#F0E68C', '#DDA0DD'];
  }
  public chart: any;

  private chartInfo: any;
  private labeldata: any[] = [];
  private realdata: any[] = [];
  private colorsesprit: any[] = [];

  createChart(labeldata: any, realdata: any, colorsesprit: any) {
    this.chart = new Chart('MyChart', {
      type: 'pie',
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Le nombre des reclamtion correspondant pour chaque status',
            data: realdata,
            backgroundColor: colorsesprit,
            hoverBackgroundColor: colorsesprit,
            hoverBorderColor: colorsesprit,

          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context: any) {
                const labelIndex = context.dataIndex;
                return labeldata[labelIndex] + ': ' + realdata[labelIndex].toFixed(2) + '%';
              },
            },
          },
        },
      },
    });
  }

  totalReclamations: any;
  prepareToChart() {
    this.competitionService.retrieveAll().subscribe(
      (data) => {
        this.chartInfo = data;
        if (this.chartInfo != null) {
          this.totalReclamations = this.chartInfo.length;

          for (let i = 0; i < this.totalReclamations; i++) {
            const category = this.chartInfo[i].categorie;
            const index = this.labeldata.indexOf(category);
            if (index !== -1) {
              this.realdata[index]++;
            }
          }
          this.createChart(this.labeldata, this.realdata, this.colorsesprit);
        }
      }
    );
  }
  ngOnInit() {
    this.prepareToChart()
  }
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> f42ae3051736fb46935dfcdc8251d91ade8f90d3

}
