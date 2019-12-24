import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"]
})
export class InformationComponent implements OnInit {
  @Input("isHeaderFixed") isHeaderFixed: boolean = false;
  cvImg: boolean = false;
  projectsImg: boolean = false;

  constructor() {}

  ngOnInit() {}
}
