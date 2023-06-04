import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ExploreComponent } from './explore.component'

export const routes: Routes = [
  {
    path: '',
    component: ExploreComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class ExploreRoutingModule {}
