import { Component } from '@angular/core';
import { Color } from '~/app/core/models/color.model';
import { ColorService } from '~/app/core/services/color.service';

@Component({
  moduleId: module.id,
  selector: 'ns-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  colors: Color[];

  constructor(private colorService: ColorService) {
    this.colors = this.colorService.generateRandomColors(50);
  }
}
