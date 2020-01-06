import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { painter } from "../../helpers/painter";

@Component({
  selector: "information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"]
})
export class InformationComponent implements OnInit {
  @Input("isHeaderFixed") isHeaderFixed: boolean = false;
  @ViewChild("activeLink1") activeLink1: ElementRef;
  @ViewChild("activeLink2") activeLink2: ElementRef;
  @ViewChild("activeLink3") activeLink3: ElementRef;

  cvImg: boolean = false;
  projectsImg: boolean = false;

  constructor() {}

  ngOnInit() {}

  mouseenter(e) {
    painter(e.target, "mouseenter", "#a7a59e");
    if (e.target === this.activeLink1.nativeElement) {
      this.cvImg = true;
    } else if (e.target === this.activeLink2.nativeElement) {
      this.cvImg = true;
    } else if (e.target === this.activeLink3.nativeElement) {
      this.projectsImg = true;
    }
  }

  mouseleave(e) {
    painter(e.target, "mouseleave", "#a7a59e");
    if (e.target === this.activeLink1.nativeElement) {
      this.cvImg = false;
    } else if (e.target === this.activeLink2.nativeElement) {
      this.cvImg = false;
    } else if (e.target === this.activeLink3.nativeElement) {
      this.projectsImg = false;
    }
  }
}
