import { PowerService } from "./../services/power.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import { NavController } from "@ionic/angular";
import { dataset } from '../dataset';

@Component({
  selector: "app-e-weekly",
  templateUrl: "./e-weekly.page.html",
  styleUrls: ["./e-weekly.page.scss"]
})
export class EWeeklyPage implements OnInit {
  @ViewChild("bubbleCanvas") bubbleCanvas;
  bubbleChart: any;
  data: any;
  constructor(
    public navCtrl: NavController,
    private powerService: PowerService
  ) {}

  async ngOnInit() {
    // this.powerService.writeData(dataset);

    this.data = await this.powerService.load();

    this.bubbleChart = new Chart(this.bubbleCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["BJP", "INC", "AAP", "CPI", "CPI-M", "NCP"],
        datasets: [
          {
            label: "# Daily Annotation",
            data: [200, 50, 30, 15, 20, 34],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
