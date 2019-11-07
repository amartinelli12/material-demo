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

export const selectPrimaryColors = createSelector(
  selectColors,
  (state: ColorState) => state.primaryColors
);

export const selectSecondaryColors = createSelector(
  selectColors,
  (state: ColorState) => state.secondaryColors
);
