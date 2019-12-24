import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  config: any;
  fullpage_api: any;
  @ViewChild("fullpageRef") fp_directive: ElementRef;

  constructor() {
    this.config = {
      licenseKey: null,
      anchors: ["firstPage", "secondPage"],
      navigation: false
    };
  }

  ngOnInit() {}

  getRef(fullPageRef) {
    // set ref (fullpage_api) for fullpage.js to use API methods in future
    this.fullpage_api = fullPageRef;
  }
}
