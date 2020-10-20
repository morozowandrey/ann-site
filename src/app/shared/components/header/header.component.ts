import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from "@angular/core";
import { ReactiveService } from "src/app/services/reactive.service";
import {
  trigger,
  style,
  animate,
  transition,
  state,
} from "@angular/animations";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("headerSwitchAnimation", [
      state("open", style({ opacity: 1 })),
      state("closed", style({ opacity: 0 })),
      transition(
        "open => closed",
        [animate("{{animation}}", style({ opacity: 0 }))],
        { params: { animation: "0ms" } }
      ),
      transition(
        "closed => open",
        [animate("{{animation}}", style({ opacity: 1 }))],
        { params: { animation: "0ms" } }
      ),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  navOpen: boolean = false;
  fullpage_api: any;
  isHeaderFixed: boolean = false;
  hideDelay: boolean = false;
  disableNavAnimation: boolean = false;
  animateLogo: boolean = true;
  navState: string = "close";

  showNawSwitch: boolean = false;
  transitionConfigOpen = "";
  transitionConfigClosed = "";

  @ViewChild("fullpageRef") fp_directive: ElementRef;

  constructor(
    public reactiveService: ReactiveService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.reactiveService.fullPageApi.subscribe((api) => {
      this.fullpage_api = api;
    });

    this.reactiveService.isHeaderSticky.subscribe((val) => {
      this.isHeaderFixed = val;

      this.showNawSwitch = this.checKshowNawSwitch("subscribe");

      if (this.isHeaderFixed) {
        setTimeout(() => {
          this.hideDelay = true;
          this.cdr.detectChanges();
        }, 500);
      } else {
        this.hideDelay = false;
        this.cdr.detectChanges();
      }
    });

    this.reactiveService.firstLoad.subscribe((val) => {
      if (val === false) this.animateLogo = false;
    });
  }

  toggleNav(section) {
    this.navOpen = !this.navOpen;
    this.showNawSwitch = this.checKshowNawSwitch("toggleNav");
    this.disableNavAnimation = !this.disableNavAnimation;

    this.navOpen ? (this.navState = "open") : (this.navState = "close");
    // console.log(this.disableNavAnimation);

    this.fullpage_api.setAllowScrolling(!this.navOpen);
    this.fullpage_api.setKeyboardScrolling(!this.navOpen);
    this.reactiveService.isNavOpen.next(this.navOpen);

    if (section === false) return;
    this.fullpage_api.moveTo(section);
    this.reactiveService.fullPageApi.next(this.fullpage_api);
  }

  moveToSection(section) {
    this.fullpage_api.moveTo(section);
  }

  checKshowNawSwitch(method) {
    if (this.isHeaderFixed && !this.navOpen) {
      this.transitionConfigOpen = method == "toggleNav" ? "0ms" : "500ms 500ms";

      this.cdr.detectChanges();
      return true;
    } else {
      this.transitionConfigClosed = method == "toggleNav" ? "0ms" : "500ms";

      this.cdr.detectChanges();
      return false;
    }
  }
}
