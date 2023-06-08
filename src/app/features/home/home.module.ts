import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CollectionViewModule } from '@nativescript-community/ui-collectionview/angular';

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule, CollectionViewModule],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
