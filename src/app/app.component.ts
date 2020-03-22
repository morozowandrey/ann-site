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
import { Meta } from "@angular/platform-browser";

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
    private cdr: ChangeDetectorRef,
    private Meta: Meta
  ) {
    this.Meta.addTags([
      { name: "identifier-URL", content: "https://annayushch.com/" },
      { name: "url", content: "https://annayushch.com/" },
      { name: "subject", content: "design" },
      {
        name: "keywords",
        content:
          "web de, website, logo design, graphic design, website design, website builder, website templates, web development, web page, design, frontend, web designer"
      },
      { name: "author", content: "Anna Yushchenko and Andrey Morozow" },
      { name: "robots", content: "index,follow" },
      { name: "description", content: "design portfolio" },

      { name: "og:site_name", content: "Anna Yushchenko" },
      { name: "og:type", content: "website" },
      { name: "og:title", content: "Anna Yushchenko" },
      { name: "og:description", content: "design portfolio" },
      { name: "og:image", content: "../assets/images/site-link-image.png" },

      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "https://annayushch.com/" },
      {
        name: "twitter:description",
        content: "Anna Yushchenko design portfolio"
      }
    ]);
  }

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

  ngAfterViewInit(): void {}

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
