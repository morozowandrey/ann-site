import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener
} from "@angular/core";
import { TweenLite, Power2 } from "gsap";
import { SlowMo } from "gsap/dist/EasePack";
import { ReactiveService } from "src/app/services/reactive.service";
import { painter } from "../../helpers/painter";
import { slideshow } from "src/app/helpers/slideshow";

@Component({
  selector: "portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
  @ViewChild("modalContent") modalContent: ElementRef;
  @ViewChild("portfolioContainer") portfolioContainer;

  modalOpen: boolean = false;

  showProject: boolean = false;
  followImagesNodesArr: Array<any> = [];

  projects: Array<any> = [
    {
      title: "ARS data",
      subtitle: "Branding, website design & development",
      handle: "arsdataImages",
      images: [
        {
          src:
            "../../../assets/images/portfolio-assets/ars-data/ars-data-des.png",
          alt: "ARS data app desktop screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/ars-data/ars-data-des_1.png",
          alt: "ARS data app desktop screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/ars-data/ars-data-des_2.png",
          alt: "ARS data app desktop screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/ars-data/ars-data-des_3.png",
          alt: "ARS data app desktop screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/ars-data/ars-data-des_4.png",
          alt: "ARS data app desktop screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/ars-data/ars-data-mob_1.png",
          alt: "ARS data app mobile screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/ars-data/ars-data-mob_2.png",
          alt: "ARS data app mobile screen"
        }
      ]
    },
    {
      title: "BNN",
      subtitle: "Application design",
      handle: "bnnImages",
      images: [
        {
          src: "../../../assets/images/portfolio-assets/bnn/bnn-des_1.png",
          alt: "BNN app screen"
        },
        {
          src: "../../../assets/images/portfolio-assets/bnn/bnn-des_2.png",
          alt: "BNN app screen"
        },
        {
          src: "../../../assets/images/portfolio-assets/bnn/bnn-des_3.png",
          alt: "BNN app screen"
        },
        {
          src: "../../../assets/images/portfolio-assets/bnn/bnn-des_4.png",
          alt: "BNN app screen"
        },
        {
          src: "../../../assets/images/portfolio-assets/bnn/bnn-des_5.png",
          alt: "BNN app screen"
        },
        {
          src: "../../../assets/images/portfolio-assets/bnn/bnn-des_6.png",
          alt: "BNN app screen"
        }
      ]
    },
    {
      title: "Hong",
      subtitle: "Application design",
      handle: "hongImages",
      images: [
        {
          src:
            "../../../assets/images/portfolio-assets/hong/hong-app_mob_1.png",
          alt: "Hong mobile app screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/hong/hong-app_mob_2.png",
          alt: "Hong mobile app screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/hong/hong-app_mob_3.png",
          alt: "Hong mobile app screen"
        }
      ]
    },
    {
      title: "Lead Fuze",
      subtitle: "Website design & development support",
      handle: "leadFuzeImages",
      images: [
        {
          src:
            "../../../assets/images/portfolio-assets/leadfuze/leadfuze-des_1.png",
          alt: "Lead Fuze app screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/leadfuze/leadfuze-des_2.png",
          alt: "Lead Fuze app screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/leadfuze/leadfuze-des_3.png",
          alt: "Lead Fuze app screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/leadfuze/leadfuze-des_4.png",
          alt: "Lead Fuze app screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/leadfuze/leadfuze-des_5.png",
          alt: "Lead Fuze app screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/leadfuze/leadfuze-des_6.png",
          alt: "Lead Fuze app screen"
        }
      ]
    },
    {
      title: "Michelin",
      subtitle: "Application design",
      handle: "michelinImages",
      images: [
        {
          src:
            "../../../assets/images/portfolio-assets/guide-app/guide-app_mob_1.png",
          alt: "Michelin mobile app screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/guide-app/guide-app_mob_2.png",
          alt: "Michelin mobile app screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/guide-app/guide-app_mob_3.png",
          alt: "Michelin mobile app screen"
        }
      ]
    },
    {
      title: "Kultur Punkt",
      subtitle: "Application design",
      imgSrc: "../../../assets/images/information-projects.png",
      handle: "kulturPunktImages",
      images: [
        {
          src:
            "../../../assets/images/portfolio-assets/kulturpunkt/kulturpunkt-mob_1.png",
          alt: "Kultur Punkt mobile app screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/kulturpunkt/kulturpunkt-mob_2.png",
          alt: "Kultur Punkt mobile app screen"
        },
        {
          src:
            "../../../assets/images/portfolio-assets/kulturpunkt/kulturpunkt-mob_3.png",
          alt: "Kultur Punkt mobile app screen"
        }
      ]
    }
  ];

  constructor(public reactiveService: ReactiveService) {}

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    if (this.showProject && this.followImagesNodesArr.length) {
      slideshow(e, this.followImagesNodesArr);
    }
  }

  ngOnInit() {}

  toggleModal(projectImgSrc) {
    this.modalOpen = !this.modalOpen;
    this.reactiveService.isNavOpen.next(this.modalOpen);
    this.reactiveService.isModalOpen.next({
      switch: this.modalOpen,
      imgSrc: projectImgSrc
    });
  }

  mouseenter(e, index) {
    painter(e.target, e.type, "#a7a59e");
    this.toggleSlideshowBox(true, index);
    if (this.followImagesNodesArr.length) this.projectEnter(e);
  }

  mouseleave(e, index) {
    painter(e.target, e.type, "#a7a59e");
    this.toggleSlideshowBox(false, index);
    if (this.followImagesNodesArr.length) this.projectLeave(e);
  }

  toggleSlideshowBox(state, index) {
    if (state) {
      this.showProject = true;

      let targetParent = document.getElementById(`followImage${index + 1}`);
      let targetBox = document.getElementById(`followImage${index + 1}`);

      this.followImagesNodesArr = Array.prototype.slice.call(
        targetBox.querySelectorAll("img")
      );
      targetParent.classList.add("slideshow-show");
    } else {
      return;
      // this.followImagesNodesArr.forEach(image => {
      //   image.classList.add("slideshow__image_hide");
      // });
      // this.followImagesNodesArr = [];
    }
  }

  projectEnter(event) {
    if (window.innerWidth > 768) {
      let portfolioContainerRect = this.portfolioContainer.nativeElement.getBoundingClientRect();
      let target = event.target.nextSibling;
      let o = window.innerHeight / 2 - portfolioContainerRect.top - 300 / 2;

      target.style.visibility = "visible";

      TweenLite.fromTo(
        target,
        10,
        {
          top: o,
          x: "-100%",
          rotation: this.rand(-25, -20),
          force3D: !0
        },
        {
          top: o,
          x: "300%",
          rotation: this.rand(30, 35),
          force3D: !0,
          ease: SlowMo.ease.config(0.95, 0.72, false),
          onComplete: function() {
            // target.style.visibility = "hidden";
          }
        }
      );
    }
  }

  projectLeave(i) {
    if (window.innerWidth > 768) {
      let target = i.target.nextSibling;

      TweenLite.to(target, 0.4, {
        x: "310%",
        rotation: this.rand(30, 60),
        force3D: !0,
        ease: Power2.easeIn,
        onComplete: function() {
          target.style.visibility = "hidden";
          this.showProject = false;
          this.followImagesNodesArr = [];
        }
      });
    }
  }

  rand(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e);
  }
}
