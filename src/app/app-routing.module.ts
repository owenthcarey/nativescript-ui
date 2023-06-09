import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
    outlet: 'homeTab',
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./features/explore/explore.module').then((m) => m.ExploreModule),
    outlet: 'exploreTab',
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./features/notifications/notifications.module').then(
        (m) => m.NotificationsModule
      ),
    outlet: 'notificationsTab',
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
    outlet: 'profileTab',
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
