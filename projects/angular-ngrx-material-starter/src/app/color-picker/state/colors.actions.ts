import { createAction, props, ActionCreator } from '@ngrx/store';

import { Color } from './color.models';
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

export const actionColorsSelectColor = createAction(
  `Select Color`,
  props<{ selectedColor: Color }>()
);

export const actionColorsClearSelectedColor = createAction(
  `${featureNameSpace} Clear Selected Color`
);
