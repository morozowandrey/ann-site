import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  HostListener
} from "@angular/core";
import { painter } from "../../helpers/painter";

@Component({
  selector: "information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"]
})
export class InformationComponent implements OnInit {
  @Input("isHeaderFixed") isHeaderFixed: boolean = false;
  @ViewChild("activeLink1") activeLink1: ElementRef;
  @ViewChild("activeLink2") activeLink2: ElementRef;
  @ViewChild("activeLink3") activeLink3: ElementRef;

  @ViewChild("followImage") followImage: ElementRef;

  showCv: boolean = false;
  showAnna: boolean = false;
  showProjects: boolean = false;

  mouseX: string = "";
  mouseY: string = "";

  elementSegmentWidth: number = null;

  hotImageSrc: string = "";
  hotImageAlt: string = "";

  cvImages: Array<any> = [
    {
      src: "../../../assets/images/information-ann.png",
      alt: "Annas cv image"
    },
    {
      src: "../../../assets/images/information-cv.png",
      alt: "collage about Anna"
    }
  ];

  constructor() {}

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    if (this.showCv) {
      this.followImage.nativeElement.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
    }
  }

  ngOnInit() {}

  mouseenter(e) {
    painter(e.target, "mouseenter", "#a7a59e");

    let elementWidth = e.target.offsetWidth;
    this.elementSegmentWidth = elementWidth / this.cvImages.length;

    if (e.target === this.activeLink1.nativeElement) {
      this.showCv = true;
    } else if (e.target === this.activeLink2.nativeElement) {
      this.showAnna = true;
    } else if (e.target === this.activeLink3.nativeElement) {
      this.showProjects = true;
    }
  }

  mouseleave(e) {
    painter(e.target, "mouseleave", "#a7a59e");

    if (e.target === this.activeLink1.nativeElement) {
      this.showCv = false;
    } else if (e.target === this.activeLink2.nativeElement) {
      this.showAnna = false;
    } else if (e.target === this.activeLink3.nativeElement) {
      this.showProjects = false;
    }
  }
}
