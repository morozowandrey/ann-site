import { Component, OnInit } from "@angular/core";
import { scrollTo } from "../../../helpers/scrollTo";
import { ReactiveService } from "src/app/services/reactive.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  navOpen: boolean = false;

  constructor(public reactiveService: ReactiveService) {}

  ngOnInit() {}

  scrollTo(target) {
    scrollTo(target);
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.reactiveService.isNavOpen.next(this.navOpen);
  }
}
