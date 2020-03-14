import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { fader } from "./route-animations";
import { ReactiveService } from "./services/reactive.service";

import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fader]
})
export class AppComponent implements OnInit {
  @ViewChild("modalContent") modalContent: ElementRef;
  @ViewChild("backdrop") backdrop: ElementRef;

  slider: any;
  title = "ann-site";
  isHeaderFixed: boolean = false;
  isMobile: boolean = window.innerWidth < 768;
  outsideClickIterator: number = 0;
  modalOpen: boolean = false;
  modalImgsArr: any = [];

  constructor(
    public reactiveService: ReactiveService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.reactiveService.isHeaderSticky.subscribe(
      val => (this.isHeaderFixed = val)
    );

    this.reactiveService.isModalOpen.subscribe(val => {
      if (val) {
        val.switch ? (this.isHeaderFixed = false) : (this.isHeaderFixed = true);
        this.modalOpen = val.switch;
        this.modalImgsArr = val.imgsArr;

        if (this.modalOpen) {
          setTimeout(() => {
            this.slider = tns({
              container: ".modal-slider",
              items: 1,
              slideBy: 1,
              mode: "carousel",
              mouseDrag: true,
              swipeAngle: 45,
              nav: false,
              controls: false,
              loop: true,
              speed: 0
            });
          });
        }

        this.cdr.detectChanges();
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
