import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { InformationComponent } from './components/information/information.component';
import { RoutingPageComponent } from './components/routing-page/routing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsPageComponent,
    InformationComponent,
    RoutingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
