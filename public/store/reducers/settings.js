import { combineReducers } from 'redux';
import { sortByOrder } from 'lodash';
import { handleActions } from 'redux-actions';
import {
  loadSettingsSuccess
} from '../actions/settings';

const byId = handleActions({
  [loadSettingsSuccess](state, action) {
    const { settings } = action.payload;

    return {
      ...settings
    };
  }
}, {});

const allIds = handleActions({
  [loadSettingsSuccess](state, action) {
    const { settings } = action.payload;
    return Object.keys(settings);
  }
}, []);

export const settings = combineReducers({
  byId,
  allIds
});

// Selectors
export const getAllSettings = (state) => {
  return state.allIds.map(id => ({ ...state.byId[id], id }));
}

export const getSettingsByCategoryId = (state, categoryId) => {
  const settings = [];
  state.allIds.forEach(id => {
    const setting = state.byId[id];
    if (setting.category === categoryId) {
      settings.push({ ...setting, id });
    }
  });
  return sortByOrder(settings, 'display');
}

export const getAllCategories = (state) => {
  const categories = {};
  state.allIds.forEach(id => {
    const setting = state.byId[id]
    categories[setting.category] = { id: setting.category, display: setting.categoryDisplay };
  });

  const unsorted = Object.keys(categories).map(key => categories[key]);
  return sortByOrder(unsorted, 'display')
}

export const getCategoryById = (state, id) => {
  const categories = {};
  state.allIds.forEach(id => {
    const setting = state.byId[id]
    categories[setting.category] = { id: setting.category, display: setting.categoryDisplay };
  });

  return categories[id];
}