import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ReactiveService } from "src/app/services/reactive.service";

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
}
