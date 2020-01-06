import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ReactiveService {
  public isHeaderSticky: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public isNavOpen: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public isModalOpen: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  public fullPageApi: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  // public isCursorHovered: BehaviorSubject<any> = new BehaviorSubject<any>(
  //   false
  // );

  constructor() {}
}
