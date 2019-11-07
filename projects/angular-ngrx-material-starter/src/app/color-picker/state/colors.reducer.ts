import { ColorState } from './color.models';
import { colors } from './colors';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from './colors.actions';

export const initialState: ColorState = {
  colors,
  primaryColors: [],
  secondaryColors: []
};

const reducer = createReducer(
  initialState,
  on(fromActions.actionColorsSelectPrimaryColor, (state, action) => ({
    ...state,
    primaryColors: action.primaryColors
  })),
  on(fromActions.actionColorsSelectSecondayColor, (state, action) => ({
    ...state,
    secondaryColors: action.secondaryColors
  }))
);

export function colorsReducer(state: ColorState | undefined, action: Action) {
  return reducer(state, action);
}
