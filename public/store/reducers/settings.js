import { combineReducers } from 'redux';
import { sortByOrder } from 'lodash';
import { handleActions } from 'redux-actions';
import {
  loadSettingsSuccess,
  saveSettingsSuccess
} from '../actions/settings';

const byId = handleActions({
  [loadSettingsSuccess](state, action) {
    const { settings } = action.payload;

    return {
      ...settings
    };
  },
  [saveSettingsSuccess](state) {
    return {
      ...state
    };
  }
}, {});

const allIds = handleActions({
  [loadSettingsSuccess](state, action) {
    const { settings } = action.payload;
    return Object.keys(settings);
  }
}, []);

const idsByCategory = handleActions({
  [loadSettingsSuccess](state, action) {
    const { settings } = action.payload;
    const result = {};

    Object.keys(settings).forEach(key => {
      const { id, category } = settings[key];
      result[category] = result[category] || [];
      result[category].push(id);
    });

    return result;
  }
}, {});

export const settings = combineReducers({
  byId,
  allIds,
  idsByCategory
});

// Selectors
export const getSettingIdsByCategoryId = state => state.idsByCategory;
export const getSettingsById = state => state.byId;

export const getAllCategories = (state) => {
  const categories = {};

  state.allIds.forEach(id => {
    const setting = state.byId[id];
    categories[setting.category] = { id: setting.category, display: setting.categoryDisplay };
  });

  const unsorted = Object.keys(categories).map(key => categories[key]);
  return sortByOrder(unsorted, 'display');
};

export const getCategoryById = (state, id) => {
  const categories = {};

  state.allIds.forEach(id => {
    const setting = state.byId[id];
    categories[setting.category] = { id: setting.category, display: setting.categoryDisplay };
  });

  return categories[id];
};
