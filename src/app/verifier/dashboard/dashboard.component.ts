import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProcessingService } from '../processing/processing.service';
import { Subscription } from 'rxjs';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  ipsl: boolean = false;
  finacle: boolean = false;
  finacleData: any;
  ipslData: any;
  data: any
  loading: Boolean = false
  constructor(
    private service: ProcessingService,
    private webService: WebSocketService

  ) { }


  ngOnInit(): void {
    // this.finacle=true
    // this.ipsl=true
    this.finacleAnalytics()
    this.ipslAnalytics()
  }
  ngOnDestroy(): void {
    this.webService.disconnect();
  }

  finacleAnalytics() {
    // this.webService.connect((message: string) => {
    //   this.finacle = true
    //   if (typeof message === 'string') {
    //     this.data = JSON.parse(message);
    //   }
    //   this.finacleData=this.data.item
    //   console.log("FInalce data is ", this.finacleData)
    // })
    this.loading = true
    this.service.getAnalyticsFinacle().subscribe(
      (res) => {
        this.loading = false
        // console.log(res)
        if (res) {

          this.finacle = true
          this.finacleData = res[0]
        }

      }
    )
  }

  ipslAnalytics() {
    // this.webService.connectPesalinkData((message: string) => {
    //   this.ipsl = true
    //   if (typeof message === 'string') {

    //     this.ipslData = JSON.parse(message).item;


    //   }
    //   console.log("Pesalink data is ", this.ipslData)

    // })
    this.service.getAnalyticsPesalink().subscribe(
      (res) =>{
        console.log(res)
        if(res){
          this.ipsl=true
          this.ipslData=res[0]

        }

      }
    )
  }



  // private updateProcessedData(data: any): void {


  // }
  // private updatePesalinkData(data: any): void {
  //   if (typeof data === 'string') {
  //     data = JSON.parse(data);

  //   }
  //   this.ipsl = true
  //   this.ipslData = data
  // }
}
