import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    data: { animation: 'fader' }
  },
  {
    path: 'project',
    component: ProjectComponent,
    data: { animation: 'fader' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
