import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { CollectionViewModule } from '@nativescript-community/ui-collectionview/angular';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ProfileRoutingModule,
    CollectionViewModule,
  ],
  declarations: [ProfileComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProfileModule {}
