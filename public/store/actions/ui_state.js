import { createAction } from 'redux-actions';

export const setCategory =
  createAction('ADVANCED_SETTINGS_SET_CATEGORY', ({ categoryId }) => ({ categoryId }));
