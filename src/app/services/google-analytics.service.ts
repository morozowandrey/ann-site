import { Injectable } from "@angular/core";
// declare let ga: Function;

@Injectable({
  providedIn: "root",
})
export class GoogleAnalyticsService {
  dataLayer: any = [];

  constructor() {
    this.dataLayer = window["dataLayer"] || [];
  }

  // public emitGoogleEvent(
  //   eventName: string,
  //   eventCategory: string,
  //   eventAction: string,
  //   eventLabel: string = null,
  //   eventValue: number = null
  // ) {
  //   ga("send", "event", {
  //     eventName,
  //     eventCategory,
  //     eventLabel,
  //     eventAction,
  //     eventValue,
  //   });
  // }

  public sendGoogleEvent(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null
  ) {
    this.dataLayer.push({
      event: `${event} - site trigger`,
      eventModel: {
        eventName,
        eventCategory,
        eventLabel,
        eventAction,
        eventValue,
      },
    });
  }
}
