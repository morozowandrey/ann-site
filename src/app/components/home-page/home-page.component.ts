import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ReactiveService } from "src/app/services/reactive.service";

@Component({
  selector: "home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  config: any;
  fullpage_api: any;
  isHeaderFixed: boolean = false;
  @ViewChild("fullpageRef") fp_directive: ElementRef;

  constructor(public reactiveService: ReactiveService) {
    this.config = {
      licenseKey: null,
      anchors: ["main", "information", "portfolio"],
      navigation: false,
      scrollOverflow: true,
      onLeave: (index, nextIndex, direction) => {
        if (index.index === 1) this.reactiveService.isHeaderSticky.next(false);
        if (direction === "down")
          this.reactiveService.isHeaderSticky.next(true);
      }
    };
  }

  ngOnInit() {}

  getRef(fullPageRef) {
    // set ref (fullpage_api) for fullpage.js to use API methods in future
    this.fullpage_api = fullPageRef;
  }
}
