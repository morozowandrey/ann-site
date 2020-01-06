import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ReactiveService } from "src/app/services/reactive.service";
import { painter } from "../../helpers/painter";

@Component({
  selector: "app-contacts-page",
  templateUrl: "./contacts-page.component.html",
  styleUrls: ["./contacts-page.component.scss"]
})
export class ContactsPageComponent implements OnInit {
  isNavOpen: boolean = false;
  constructor(public router: Router, public reactiveService: ReactiveService) {}

  ngOnInit() {
    this.reactiveService.isNavOpen.subscribe(val => (this.isNavOpen = val));
  }

  mouseenter(e) {
    painter(e.target, "mouseenter", "#a7a59e");
  }

  mouseleave(e) {
    painter(e.target, "mouseleave", "#a7a59e");
  }
}
