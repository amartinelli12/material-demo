import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ColorsFacade } from './state/colors.facade';
import { Color } from './state/color.models';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerContainerComponent implements OnInit {
  colors$: Observable<Color[]>;
  selectedColor$: Observable<Color>;
  constructor(private facade: ColorsFacade) {}

  ngOnInit() {
    this.colors$ = this.facade.colors$;
    this.selectedColor$ = this.facade.selectedColor$;
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
}
