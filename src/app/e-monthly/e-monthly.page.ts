import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-e-monthly',
  templateUrl: './e-monthly.page.html',
  styleUrls: ['./e-monthly.page.scss'],
})
export class EMonthlyPage implements OnInit {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
  
      type: 'bar',
      data: {
          labels: ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm","3:00 pm","4:00 pm","5:00 pm","6:00 pm","7:00 pm", "8:00 pm","9:00 pm"],
          datasets: [{
              label: 'CO2 ',
              data: [12, 200, 200, 5, 2,7,32,34,53,34,567,432,23],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 162, 64, 0.2)',
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
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 162, 64, 0.2)',
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
