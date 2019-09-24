import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactsComponent
  ]
})
export class SharedModule { }
