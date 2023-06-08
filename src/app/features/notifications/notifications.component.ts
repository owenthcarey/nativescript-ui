import { Component } from '@angular/core';
import { Color } from '~/app/core/models/color.model';
import { ColorService } from '~/app/core/services/color.service';

@Component({
  moduleId: module.id,
  selector: 'ns-notifications',
  templateUrl: 'notifications.component.html',
})
export class NotificationsComponent {
  colors: Color[];

  constructor(private colorService: ColorService) {
    this.colors = this.colorService.generateRandomColors(50);
  }
}
