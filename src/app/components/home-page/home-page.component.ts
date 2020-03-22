import { Component, OnInit } from "@angular/core";
import { ReactiveService } from "src/app/services/reactive.service";

@Component({
  selector: "home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  fullPageConfig: any;
  isNavOpen: boolean = false;

  constructor(public reactiveService: ReactiveService) {
    this.fullPageConfig = {
      licenseKey: null,
      anchors: ["main", "information", "work", "contacts"],
      navigation: false,
      scrollOverflow: true,
      onLeave: (index, nextIndex, direction) => {
        if (index.anchor === "information" && direction === "up") {
          this.reactiveService.isHeaderSticky.next(false);
        } else {
          this.reactiveService.isHeaderSticky.next(true);
        }
      }
    };
  }

  ngOnInit() {
    this.reactiveService.isNavOpen.subscribe(val => (this.isNavOpen = val));
  }

  getRef(fullPageRef) {
    this.reactiveService.fullPageApi.next(fullPageRef);
  }
}
