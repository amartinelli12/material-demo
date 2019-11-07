import { createAction, props, ActionCreator } from '@ngrx/store';

import { Color, MatColor } from './color.models';
import { TypedAction } from '@ngrx/store/src/models';

const featureNameSpace: '[Colors]' = '[Colors]';

const featureNameSpacedActionCreator = (nameSpace: string) => <
  T extends object
>(
  actionDescriptor: string,
  withProps: boolean
) => {
  const action = withProps
    ? createAction(`${nameSpace} ${actionDescriptor}`, props<T>())
    : createAction(`${nameSpace} ${actionDescriptor}`);
  return action;
};

const colorsNamespacedActionCreator = featureNameSpacedActionCreator(
  featureNameSpace
);

export const actionColorsSelectPrimaryColor = createAction(
  `${featureNameSpace} Select Primary Color`,
  props<{ primaryColors: MatColor[] }>()
);

export const actionColorsSelectSecondayColor = createAction(
  `${featureNameSpace} Select Seconday Color`,
  props<{ secondaryColors: MatColor[] }>()
);