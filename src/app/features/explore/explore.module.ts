import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { CollectionViewModule } from '@nativescript-community/ui-collectionview/angular';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ExploreRoutingModule,
    CollectionViewModule,
  ],
  declarations: [ExploreComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ExploreModule {}
