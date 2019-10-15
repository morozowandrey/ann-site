import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { RoutingPageComponent } from './components/routing-page/routing-page.component';

const routes: Routes = [
  {
    path: '',
    component: RoutingPageComponent
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
