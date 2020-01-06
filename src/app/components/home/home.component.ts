import { Component, OnInit } from "@angular/core";
import { painter } from "../../helpers/painter";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isMobileSize: boolean = false;

  constructor() {}

  ngOnInit() {
    window.screen.availWidth <= 768
      ? (this.isMobileSize = true)
      : (this.isMobileSize = false);
  }

  mouseenter(e) {
    painter(e.target, "mouseenter", "#a7a59e");
  }

  mouseleave(e) {
    painter(e.target, "mouseleave", "#a7a59e");
  }
}
