import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { CollectionViewModule } from '@nativescript-community/ui-collectionview/angular';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NotificationsRoutingModule,
    CollectionViewModule,
  ],
  declarations: [NotificationsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NotificationsModule {}
