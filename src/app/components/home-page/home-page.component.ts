import { Component, OnInit } from "@angular/core";
import { ReactiveService } from "src/app/services/reactive.service";
import { GoogleAnalyticsService } from "src/app/services/google-analytics.service";

declare var gtag;

@Component({
  selector: "home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  fullPageConfig: any;
  isNavOpen: boolean = false;

  constructor(
    public reactiveService: ReactiveService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {
    this.fullPageConfig = {
      licenseKey: null,
      anchors: ["main", "information", "work", "contacts"],
      navigation: false,
      scrollOverflow: true,
      bigSectionsDestination: "top",
      onLeave: (index, nextIndex, direction) => {
        // gtag("config", "UA-68493987-2", {
        //   page_path: nextIndex.anchor,
        // });

        // gtag("send", "event", "UA-68493987-2", {
        //   eventCategory: "user_journey",
        //   eventLabel: "section",
        //   eventAction: "scroll",
        //   eventValue: nextIndex.anchor,
        // });

        // this.googleAnalyticsService.emitGoogleEvent(
        //   "change_section",
        //   "user_journey",
        //   null,
        //   "scroll",
        //   nextIndex.anchor
        // );

        // this.googleAnalyticsService.sendGoogleEvent(
        //   "change_section",
        //   "user_journey",
        //   null,
        //   "scroll",
        //   nextIndex.anchor
        // );

        localStorage.setItem("headerLogoAnimationTriggred", "true");
        this.reactiveService.firstLoad.next(false);
        if (
          (index.anchor === "information" && direction === "up") ||
          nextIndex.anchor === "main"
        ) {
          this.reactiveService.isHeaderSticky.next(false);
        } else {
          this.reactiveService.isHeaderSticky.next(true);
        }
      },
    };
  }

  ngOnInit() {
    this.reactiveService.isNavOpen.subscribe((val) => (this.isNavOpen = val));
  }

  getRef(fullPageRef) {
    this.reactiveService.fullPageApi.next(fullPageRef);
  }
}
