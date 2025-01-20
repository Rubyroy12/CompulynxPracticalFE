import { Component, OnInit } from "@angular/core";
import { DirectionService } from "src/app/core/service/direction.service";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: [],
})
export class MainLayoutComponent implements OnInit {
  direction: string;
  public config: any = {};
  constructor(private directoryService: DirectionService) {
    this.config = { layout: { rtl: false } }; // Ensure config.layout is defined
  
    this.directoryService.currentData.subscribe((currentData) => {
      if (currentData) {
        this.direction = currentData;
      } else {
        if (localStorage.getItem("isRtl")) {
          this.direction = localStorage.getItem("isRtl") === "true" ? "rtl" : "ltr";
        } else {
          this.direction = this.config?.layout?.rtl ? "rtl" : "ltr"; // Safe access
        }
      }
    });
  }
  
  ngOnInit(): void {}
}
