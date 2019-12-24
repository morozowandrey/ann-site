import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ReactiveService {
  public isHeaderSticky: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {}
}
