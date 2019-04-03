import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit, ViewChild  } from '@angular/core';
import {Chart} from 'chart.js';
import {ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-co2-monthly',
  templateUrl: './co2-monthly.page.html',
  styleUrls: ['./co2-monthly.page.scss'],
})
export class Co2MonthlyPage implements OnInit {

  @ViewChild('barCanvas') barCanvas
  barChart: any;
  constructor(public navCtrl : NavController) { }

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August" , "September" , "October" , "November" , "December"],
          datasets: [{
              label: '# Co2 ',
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
  
