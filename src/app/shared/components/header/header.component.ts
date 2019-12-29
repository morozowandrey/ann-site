import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ReactiveService } from "src/app/services/reactive.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  navOpen: boolean = false;
  fullpage_api: any;
  @ViewChild("fullpageRef") fp_directive: ElementRef;

  constructor(public reactiveService: ReactiveService) {}

  ngOnInit() {
    this.reactiveService.fullPageApi.subscribe(api => {
      this.fullpage_api = api;
    });
  }

  toggleNav(section) {
    this.navOpen = !this.navOpen;
    this.fullpage_api.setAllowScrolling(!this.navOpen);
    this.fullpage_api.setKeyboardScrolling(!this.navOpen);
    this.reactiveService.isNavOpen.next(this.navOpen);

    if (section === false) return;
    this.fullpage_api.moveTo(section);
    this.reactiveService.fullPageApi.next(this.fullpage_api);
  }

  moveToSection(section) {
    this.fullpage_api.moveTo(section);
  }
}
