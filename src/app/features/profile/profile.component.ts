import { Component } from '@angular/core';
import { Color } from '~/app/core/models/color.model';
import { ColorService } from '~/app/core/services/color.service';
import { Screen } from '@nativescript/core/platform';

@Component({
  moduleId: module.id,
  selector: 'ns-profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent {
  cellSize: number;
  cellsPerRow = 3;
  colors: Color[];
  headerHeight: number;

  constructor(private colorService: ColorService) {
    this.colors = this.colorService.generateRandomColors(50);
    this.cellSize = Screen.mainScreen.widthDIPs / this.cellsPerRow;
    this.headerHeight = (Screen.mainScreen.widthDIPs * 2) / this.cellsPerRow;
  }

  templateSelector = (item: Color, index: number, items: Color[]): string => {
    return index === 0 ? 'header' : 'item';
  };

  spanSize = (item: Color, index: number, items: Color[]): number => {
    return index === 0 ? this.cellsPerRow : 1;
  };
}
