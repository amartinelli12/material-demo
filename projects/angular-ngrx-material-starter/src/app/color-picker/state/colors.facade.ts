import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../core/core.state';
import { Observable } from 'rxjs';
import { Color } from './color.models';
import * as fromSelectors from './colors.selectors';
import * as fromActions from './colors.actions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorsFacade {
  colors$: Observable<Color[]>;
  selectedColor$: Observable<Color>;

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
    this.selectedColor$ = this.store$.pipe(
      select(fromSelectors.selectChosenColor)
    );
  }

  pickColor(selectedColor: Color) {
    this.store$.dispatch(
      fromActions.actionColorsSelectColor({ selectedColor })
    );
  }

  clearSelectedColor() {
    this.store$.dispatch(fromActions.actionColorsClearSelectedColor());
  }

  private setDegrees(index: number, length: number) {
    return `rotate(${(index * 360) / length}deg)`;
  }
}
