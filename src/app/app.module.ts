import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveService } from "./services/reactive.service";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFullpageModule } from "@fullpage/angular-fullpage";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactsPageComponent } from "./components/contacts-page/contacts-page.component";
import { InformationComponent } from "./components/information/information.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ProjectComponent } from "./components/project/project.component";

import { PortfolioComponent } from "./components/portfolio/portfolio.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsPageComponent,
    InformationComponent,
    HomePageComponent,
    ProjectComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AngularFullpageModule
  ],
  providers: [ReactiveService],
  bootstrap: [AppComponent]
})
export class AppModule {}
