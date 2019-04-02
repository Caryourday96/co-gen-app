import { Component, OnInit, ViewChild  } from '@angular/core';
import {Chart} from 'chart.js';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-co2-weekly',
  templateUrl: './co2-weekly.page.html',
  styleUrls: ['./co2-weekly.page.scss'],
})
export class CO2WeeklyPage implements OnInit {

  @ViewChild('barCanvas') barCanvas
  barChart: any;
  constructor(public navCtrl : NavController) { }

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
          labels: ["BJP", "INC", "AAP", "CPI", "CPI-M", "NCP"],
          datasets: [{
              label: '# Daily Annotation',
              data: [200, 50, 30, 15, 20, 34],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  
  });
  }
  }
  
  
