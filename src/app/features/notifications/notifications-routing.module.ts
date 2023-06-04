import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { NotificationsComponent } from './notifications.component'

export const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class NotificationsRoutingModule {}
