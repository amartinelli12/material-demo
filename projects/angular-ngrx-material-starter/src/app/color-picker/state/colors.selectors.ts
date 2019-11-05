import { createSelector } from '@ngrx/store';
import { selectColorsState } from '../../core/core.state';
import { ColorState } from './color.models';

export const selectColors = createSelector(
  selectColorsState,
  (state: ColorState) => state
);

export const selectAllColor = createSelector(
  selectColors,
  (state: ColorState) => state.colors
);

export const selectChosenColor = createSelector(
  selectColors,
  (state: ColorState) => state.selectedColor
);
