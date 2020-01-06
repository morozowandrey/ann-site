import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
  // HostListener
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { fader } from "./route-animations";
import { ReactiveService } from "./services/reactive.service";

// import {
//   trigger,
//   style,
//   animate,
//   transition,
//   state
// } from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    fader
    // trigger("openClose", [
    //   state(
    //     "open",
    //     style({
    //       width: "40px",
    //       height: "40px"
    //     })
    //   ),
    //   state(
    //     "closed",
    //     style({
    //       opacity: 1,
    //       width: "170px",
    //       height: "170px"
    //     })
    //   ),
    //   transition("open => closed", [animate("1s")]),
    //   transition("closed => open", [animate("0.5s")])
    // ])
  ]
})
export class AppComponent implements OnInit {
  @ViewChild("modalContent") modalContent: ElementRef;
  @ViewChild("backdrop") backdrop: ElementRef;

  // @ViewChild("cursor") cursor: ElementRef;
  // cursorTop: any;
  // cursorLeft: any;
  // isCursorHovered: boolean = false;

  title = "ann-site";
  isHeaderFixed: boolean = false;
  isMobile: boolean = window.innerWidth < 768;
  outsideClickIterator: number = 0;
  modalOpen: boolean = false;
  modalImgSrc: string = "";

  constructor(public reactiveService: ReactiveService) {}

  // @HostListener("document:mousemove", ["$event"])
  // onMousemove($event) {
  //   this.cursor.nativeElement.style.transform = `translate(${$event.pageX}px, ${$event.pageY}px)`;
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

    // this.reactiveService.isCursorHovered.subscribe(val => {
    //   this.isCursorHovered = val;
    // });
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
