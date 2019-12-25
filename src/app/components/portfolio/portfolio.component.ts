import { Component, OnInit } from "@angular/core";
import { TweenLite, Power2 } from "gsap";
import { SlowMo } from "gsap/dist/EasePack";

@Component({
  selector: "portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
  projects: Array<any> = [
    {
      title: "ARS data",
      subtitle: "Branding, website design & development",
      imgSrc: "../../../assets/images/project-image-2x.png"
    },
    {
      title: "Kultur Punkt",
      subtitle: "Application design",
      imgSrc: "../../../assets/images/project-image-2x.png"
    },
    {
      title: "Lead Fuze",
      subtitle: "Website design & development support",
      imgSrc: "../../../assets/images/project-image-2x.png"
    },
    {
      title: "Restaurant app",
      subtitle: "Application design",
      imgSrc: "../../../assets/images/project-image-2x.png"
    },
    {
      title: "ARS data",
      subtitle: "Branding, website design & development",
      imgSrc: "../../../assets/images/project-image-2x.png"
    }
  ];

  constructor() {}

  ngOnInit() {
    console.log(window.innerHeight);
  }

  projectEnter(i) {
    if (window.innerWidth >= 768) {
      let o = -100;
      let target = i.target.querySelector("img");
      target.style.visibility = "visible";
      i.target.classList.add("portfolio-list-item_hover");

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
    if (window.innerWidth >= 768) {
      let target = i.target.querySelector("img");
      i.target.classList.remove("portfolio-list-item_hover");

      TweenLite.to(target, 0.4, {
        x: "310%",
        rotation: this.rand(30, 60),
        force3D: !0,
        ease: Power2.easeIn,
        onComplete: function() {
          target.style.visibility = "hidden";
        }
      });
    }
  }

  rand(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e);
  }
}
