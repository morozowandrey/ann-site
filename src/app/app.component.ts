import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
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
  @ViewChild("modalContent") modalContent: ElementRef;
  @ViewChild("backdrop") backdrop: ElementRef;

  title = "ann-site";
  top: any;
  left: any;
  isHeaderFixed: boolean = false;
  outsideClickIterator: number = 0;

  modalOpen: boolean = false;
  modalImgSrc: string = "";

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

    this.reactiveService.isModalOpen.subscribe(val => {
      if (val) {
        val.switch ? (this.isHeaderFixed = false) : (this.isHeaderFixed = true);
        this.modalOpen = val.switch;
        this.modalImgSrc = val.imgSrc;
      }
    });
  }

  ngAfterViewInit(): void {
    this.reactiveService.fullPageApi.subscribe(api => {
      if (api) {
        if (api.getActiveSection().anchor === "main")
          this.isHeaderFixed = false;
      }
    });
  }

  outsideClick(e) {
    this.backdrop.nativeElement.focus();
    this.outsideClickIterator++;

    if (
      this.outsideClickIterator > 1 &&
      e.target === this.backdrop.nativeElement
    ) {
      this.reactiveService.isModalOpen.next({
        switch: false,
        imgSrc: ""
      });
      this.reactiveService.isNavOpen.next(false);
      this.outsideClickIterator = 0;
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
