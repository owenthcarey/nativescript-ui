import { Component } from '@angular/core'
import {Color} from "~/app/core/models/color.model";
import {ColorService} from "~/app/core/services/color.service";

@Component({
  moduleId: module.id,
  selector: 'ns-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
  colors: Color[];

  constructor(private colorService: ColorService) {
    this.colors = this.colorService.generateRandomColors(50);
  }

  templateSelector(item: Color, index: number, items: Color[]) {
    return index === 0 ? 'header' : 'item';
  }

  spanSize(index: number) {
    return index === 0 ? 3 : 1; // Return 3 for the first item and 1 for the rest
  }
}
