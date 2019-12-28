import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ReactiveService } from "src/app/services/reactive.service";

@Component({
  selector: "app-contacts-page",
  templateUrl: "./contacts-page.component.html",
  styleUrls: ["./contacts-page.component.scss"]
})
export class ContactsPageComponent implements OnInit {
  isHomePage: boolean = false;
  isNavOpen: boolean = false;
  constructor(public router: Router, public reactiveService: ReactiveService) {}

  ngOnInit() {
    if (this.router.url === "/" || this.router.url.indexOf("/#") > -1) {
      this.isHomePage = true;
    } else {
      this.isHomePage = false;
    }

    this.reactiveService.isNavOpen.subscribe(val => (this.isNavOpen = val));
  }
}
