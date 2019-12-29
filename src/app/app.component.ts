import { Component, HostListener, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { fader } from "./route-animations";
import { ReactiveService } from "./services/reactive.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fader]
})
export class AppComponent implements OnInit {
  title = "ann-site";
  top: any;
  left: any;
  isHeaderFixed: boolean = false;

  constructor(public reactiveService: ReactiveService) {}

  // @HostListener("document:mousemove", ["$event"])
  // onMousemove($event) {
  //   this.top = $event.pageY - 85 + "px";
  //   this.left = $event.pageX - 85 + "px";
  // }

  ngOnInit(): void {
    this.reactiveService.isHeaderSticky.subscribe(
      val => (this.isHeaderFixed = val)
    );
  }

  ngAfterViewInit(): void {
    this.reactiveService.fullPageApi.subscribe(api => {
      if (api) {
        if (api.getActiveSection().anchor === "main")
          this.isHeaderFixed = false;
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
