import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contacts',
    component: ContactsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
