import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from "./components/home/home.component";
import { ContactsPageComponent } from "./components/contacts-page/contacts-page.component";
import { InformationComponent } from "./components/information/information.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProjectComponent } from "./components/project/project.component";
import { AngularFullpageModule } from "@fullpage/angular-fullpage";

import { ReactiveService } from "./services/reactive.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsPageComponent,
    InformationComponent,
    HomePageComponent,
    ProjectComponent
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
