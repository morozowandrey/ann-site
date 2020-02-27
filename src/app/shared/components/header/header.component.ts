import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef
} from "@angular/core";
import { ReactiveService } from "src/app/services/reactive.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  navOpen: boolean = false;
  fullpage_api: any;
  showSlogan: boolean = true;
  isHeaderFixed: boolean = false;

  @ViewChild("fullpageRef") fp_directive: ElementRef;

  constructor(
    public reactiveService: ReactiveService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.reactiveService.fullPageApi.subscribe(api => {
      this.fullpage_api = api;
    });

    this.reactiveService.leaveSection.subscribe(val => {
      this.showSlogan = val;
      this.cdr.detectChanges();
    });

    this.reactiveService.isHeaderSticky.subscribe(
      val => (this.isHeaderFixed = val)
    );
  }

  toggleNav(section) {
    this.navOpen = !this.navOpen;
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
}
