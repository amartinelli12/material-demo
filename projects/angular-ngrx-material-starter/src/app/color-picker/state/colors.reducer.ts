import { ColorState } from './color.models';
import { colors } from './colors';
import { Action, createReducer, on } from '@ngrx/store';
import {
  actionColorsSelectColor,
  actionColorsClearSelectedColor
} from './colors.actions';

export const initialState: ColorState = {
  colors,
  selectedColor: null
};

const reducer = createReducer(
  initialState,
  on(actionColorsSelectColor, (state, action) => ({
    ...state,
    selectedColor: action.selectedColor
  })),
  on(actionColorsClearSelectedColor, (state, action) => ({
    ...state,
    selectedColor: null
  }))
);

export function colorsReducer(state: ColorState | undefined, action: Action) {
  return reducer(state, action);
}
