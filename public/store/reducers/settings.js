import { sortByOrder } from 'lodash';
import { handleActions } from 'redux-actions';
import {
  loadSettingsSuccess
} from '../actions/settings';

export const settings = handleActions({
  [loadSettingsSuccess](state, action) {
    const { settings } = action.payload;

    return {
      ...settings
    };
  }
}, {});

// Selectors
export const getSettingsByCategoryId = (state, categoryId) => {
  const settings = [];

  Object.keys(state).forEach(id => {
    const setting = state[id];
    if (setting.category === categoryId) {
      settings.push({ ...setting, id });
    }
  });
  return sortByOrder(settings, 'display');
};

export const getAllCategories = (state) => {
  const categories = {};

  Object.keys(state).forEach(id => {
    const setting = state[id];
    categories[setting.category] = { id: setting.category, display: setting.categoryDisplay };
  });

  const unsorted = Object.keys(categories).map(key => categories[key]);
  return sortByOrder(unsorted, 'display');
};

export const getCategoryById = (state, id) => {
  const categories = {};

  Object.keys(state).forEach(id => {
    const setting = state[id];
    categories[setting.category] = { id: setting.category, display: setting.categoryDisplay };
  });

  return categories[id];
};
