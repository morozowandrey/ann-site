import {
  Component,
  OnInit,
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

  followImagesNodesArr: Array<any> = [];

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
      if (e.pageX > 1100) {
        this.followImage.nativeElement.style.transform = `translate(${e.pageX -
          285}px, ${e.pageY + 20}px)`;
        slideshow(e, this.followImagesNodesArr);
      } else {
        this.followImage.nativeElement.style.transform = `translate(${e.pageX +
          30}px, ${e.pageY + 20}px)`;
        slideshow(e, this.followImagesNodesArr);
      }
    }
  }

  ngOnInit() {}

  mouseenter(e) {
    painter(e.target, "mouseenter", "#a7a59e");

    if (e.target === this.cvNode.nativeElement) {
      this.showCv = true;
      this.followImagesNodesArr = this.followImageBox1.nativeElement.querySelectorAll(
        "img"
      );
    } else if (e.target === this.annaNode.nativeElement) {
      this.showAnna = true;
      this.followImagesNodesArr = this.followImageBox2.nativeElement.querySelectorAll(
        "img"
      );
    } else if (e.target === this.projectsNode.nativeElement) {
      this.showProjects = true;
      this.followImagesNodesArr = this.followImageBox3.nativeElement.querySelectorAll(
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

    this.followImagesNodesArr.forEach(image => {
      image.classList.add("slideshow__image_hide");
    });
  }
}
