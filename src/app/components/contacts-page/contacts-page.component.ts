import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-contacts-page",
  templateUrl: "./contacts-page.component.html",
  styleUrls: ["./contacts-page.component.scss"]
})
export class ContactsPageComponent implements OnInit {
  isHomePage: boolean = false;
  constructor(public router: Router) {}

  ngOnInit() {
    if (this.router.url === "/" || this.router.url.indexOf("/#") > -1) {
      this.isHomePage = true;
    } else {
      this.isHomePage = false;
    }
  }
}
