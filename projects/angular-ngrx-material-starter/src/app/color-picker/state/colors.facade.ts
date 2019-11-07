import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../core/core.state';
import { Observable } from 'rxjs';
import { Color, MatColor, ColorRank } from './color.models';
import * as fromSelectors from './colors.selectors';
import * as fromActions from './colors.actions';
import { map } from 'rxjs/operators';

const tinycolor = require("tinycolor2");

@Injectable({
  providedIn: 'root'
})
export class ColorsFacade {
  colors$: Observable<Color[]>;
  primaryColors$: Observable<MatColor[]>;
  secondaryColors$: Observable<MatColor[]>;

  constructor(private store$: Store<AppState>) {
    this.colors$ = this.store$.pipe(
      select(fromSelectors.selectAllColor),
      map((colors: Color[]) => {
        const length = colors.length;
        return colors.map((color: Color, index: number) => ({
          ...color,
          degree: this.setDegrees(index, length)
        }));
      })
    );
    this.primaryColors$ = this.store$.pipe(
      select(fromSelectors.selectPrimaryColors)
    );
    this.secondaryColors$ = this.store$.pipe(
      select(fromSelectors.selectSecondaryColors)
    );
  }

  pickPrimaryColor(selectedColorHex: string) {
    const colors: MatColor[] = this.computeColors(selectedColorHex);
    this.store$.dispatch(
      fromActions.actionColorsSelectPrimaryColor({ primaryColors: colors })
    );
    this.buildPalette(colors, ColorRank.PRIMARY);
  }

  pickSecondaryColor(selectedColorHex: string) {
    this.store$.dispatch(
      fromActions.actionColorsSelectSecondayColor({ secondaryColors: this.computeColors(selectedColorHex) })
    );
  }

  private buildPalette(colors: MatColor[], colorRank: ColorRank) {
    for (const color of colors) {
      const key1 = `--theme-${colorRank}-${color.name}`;
      const value1 = color.hex;
      const key2 = `--theme-${colorRank}-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      document.documentElement.style.setProperty(key1, value1);
      document.documentElement.style.setProperty(key2, value2);
    }
  }

  private setDegrees(index: number, length: number) {
    return `rotate(${(index * 360) / length}deg)`;
  }

  private computeColors(hex: string): MatColor[] {
    return [
      this.getColorObject(tinycolor(hex).lighten(52), '50'),
      this.getColorObject(tinycolor(hex).lighten(37), '100'),
      this.getColorObject(tinycolor(hex).lighten(26), '200'),
      this.getColorObject(tinycolor(hex).lighten(12), '300'),
      this.getColorObject(tinycolor(hex).lighten(6), '400'),
      this.getColorObject(tinycolor(hex), '500'),
      this.getColorObject(tinycolor(hex).darken(6), '600'),
      this.getColorObject(tinycolor(hex).darken(12), '700'),
      this.getColorObject(tinycolor(hex).darken(18), '800'),
      this.getColorObject(tinycolor(hex).darken(24), '900'),
      this.getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
      this.getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
      this.getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
      this.getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
    ];
  }

  private getColorObject(value, name): MatColor {
    const c = tinycolor(value);
    return {
      name: name,
      hex: c.toHexString(),
      darkContrast: c.isLight()
    };
  }
}
