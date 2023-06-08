import { Component } from '@angular/core';
import { Color } from '~/app/core/models/color.model';
import { ColorService } from '~/app/core/services/color.service';

@Component({
  moduleId: module.id,
  selector: 'ns-explore',
  templateUrl: 'explore.component.html',
})
export class ExploreComponent {
  colors: Color[];

  constructor(private colorService: ColorService) {
    this.colors = this.colorService.generateRandomColors(100);
    this.colors.forEach((color) => {
      color.subColors = this.colorService.generateRandomColors(100);
    });
  }
}
