import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveService } from "./services/reactive.service";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFullpageModule } from "@fullpage/angular-fullpage";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { InformationComponent } from "./components/information/information.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactsPageComponent } from "./components/contacts-page/contacts-page.component";
import { GoogleAnalyticsService } from "./services/google-analytics.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent,
    HomePageComponent,
    ContactsPageComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AngularFullpageModule,
  ],
  providers: [ReactiveService, GoogleAnalyticsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
