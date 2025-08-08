import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { greeting: 'Welcome...' },
  },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id/:name', component: UserComponent },

  // lazy loading
  {
    path: 'lazyloading',
    loadComponent: () =>
      import('./lazyloading/lazyloading.component').then(
        (c) => c.LazyloadingComponent
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];
