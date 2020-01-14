import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  HostListener
} from "@angular/core";
import { painter } from "../../helpers/painter";
import { slideshow } from "../../helpers/slideshow";

@Component({
  selector: "information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"]
})
export class InformationComponent implements OnInit {
  @Input("isHeaderFixed") isHeaderFixed: boolean = false;
  @ViewChild("cvNode") cvNode: ElementRef;
  @ViewChild("annaNode") annaNode: ElementRef;
  @ViewChild("projectsNode") projectsNode: ElementRef;

  @ViewChild("followImage") followImage: ElementRef;
  @ViewChild("followImageBox1") followImageBox1: ElementRef;
  @ViewChild("followImageBox2") followImageBox2: ElementRef;
  @ViewChild("followImageBox3") followImageBox3: ElementRef;

  showCv: boolean = false;
  showAnna: boolean = false;
  showProjects: boolean = false;

  mouseX: string = "";
  mouseY: string = "";

  elementSegmentWidth: number = null;

  hotImageSrc: string = "";
  hotImageAlt: string = "";

  imagesNodesArr;

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

  annaImages: Array<any> = [
    {
      src: "../../../assets/images/information-ann.png",
      alt: "Annas cv image"
    }
  ];

  projectsImages: Array<any> = [
    {
      src: "../../../assets/images/information-projects/1.png",
      alt: "Annas cv image"
    },
    {
      src: "../../../assets/images/information-projects/2.png",
      alt: "collage about Anna"
    },
    {
      src: "../../../assets/images/information-projects/3.png",
      alt: "Annas cv image"
    },
    {
      src: "../../../assets/images/information-projects/4.png",
      alt: "Annas cv image"
    },
    {
      src: "../../../assets/images/information-projects/5.png",
      alt: "Annas cv image"
    },
    {
      src: "../../../assets/images/information-projects/6.png",
      alt: "Annas cv image"
    },
    {
      src: "../../../assets/images/information-projects/7.png",
      alt: "Annas cv image"
    },
    {
      src: "../../../assets/images/information-projects/8.png",
      alt: "Annas cv image"
    },
    {
      src: "../../../assets/images/information-projects/9.png",
      alt: "Annas cv image"
    },
    {
      src: "../../../assets/images/information-projects/10.png",
      alt: "Annas cv image"
    }
  ];

  constructor() {}

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    if (this.showCv || this.showAnna || this.showProjects) {
      this.followImage.nativeElement.style.transform = `translate(${e.pageX +
        50}px, ${e.pageY + 35}px)`;
      slideshow(e, this.imagesNodesArr);
    }
  }

  ngOnInit() {}

  mouseenter(e) {
    painter(e.target, "mouseenter", "#a7a59e");

    if (e.target === this.cvNode.nativeElement) {
      this.showCv = true;
      this.imagesNodesArr = this.followImageBox1.nativeElement.querySelectorAll(
        "img"
      );
    } else if (e.target === this.annaNode.nativeElement) {
      this.showAnna = true;
      this.imagesNodesArr = this.followImageBox2.nativeElement.querySelectorAll(
        "img"
      );
    } else if (e.target === this.projectsNode.nativeElement) {
      this.showProjects = true;
      this.imagesNodesArr = this.followImageBox3.nativeElement.querySelectorAll(
        "img"
      );
    }
  }

  mouseleave(e) {
    painter(e.target, "mouseleave", "#a7a59e");

    if (e.target === this.cvNode.nativeElement) {
      this.showCv = false;
    } else if (e.target === this.annaNode.nativeElement) {
      this.showAnna = false;
    } else if (e.target === this.projectsNode.nativeElement) {
      this.showProjects = false;
    }

    this.imagesNodesArr.forEach(image => {
      image.classList.add("followImage__image_hide");
    });
  }
}
