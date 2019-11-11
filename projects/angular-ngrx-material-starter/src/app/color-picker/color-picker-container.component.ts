import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ColorsFacade } from './state/colors.facade';
import { Color, MatColor } from './state/color.models';

@Component({
  selector: 'app-color-picker-container',
  templateUrl: './color-picker-container.component.html',
  styleUrls: ['./color-picker-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerContainerComponent implements OnInit {
  colors$: Observable<Color[]>;
  primaryColors$: Observable<MatColor[]>;
  wheelRadius: string = '100px';
  wheelSliceHeight: string = '1px';
  wheelHoverHeight: string = '5px';
  constructor(private facade: ColorsFacade) {}

  ngOnInit() {
    this.colors$ = this.facade.colors$;
    this.primaryColors$ = this.facade.primaryColors$;
  }

  trackByFunc(index: number, color: Color) {
    return color.colorId;
  }

  invertColor(color: Color) {
    const MAX = 255;
    const red = this.rgbToHex(MAX - color.rgb.r);
    const green = this.rgbToHex(MAX - color.rgb.g);
    const blue = this.rgbToHex(MAX - color.rgb.b);
    return `#${red}${green}${blue}`;
  }

  rgbToHex(val: number) {
    const convertedHex = Number(val).toString(16);
    return convertedHex.length < 2 ? `0${convertedHex}` : convertedHex;
  }

  selectPrimaryColor(color: Color) {
    this.facade.pickPrimaryColor(color.hexString);
  }
}
