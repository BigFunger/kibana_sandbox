import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { loadSettingsSuccess } from '../actions/settings';
import { sortByOrder } from 'lodash';

const byId = handleActions({
  [loadSettingsSuccess](state, action) {
    const { settings } = action.payload;
    const categories = {};

    Object.keys(settings).forEach(settingId => {
      const setting = settings[settingId];
      categories[setting.category] = categories[setting.category] || {
        id: setting.category,
        display: setting.categoryDisplay
      };
    });

    return {
      ...categories
    };
  }
}, {});

const allIds = handleActions({
  [loadSettingsSuccess](state, action) {
    const { settings } = action.payload;
    const categoryIds = new Set();

    Object.keys(settings).forEach(settingId => {
      const setting = settings[settingId];
      categoryIds.add(setting.category);
    });

    const ids = Array.from(categoryIds);
    return sortByOrder(ids, 'display');
  }
}, []);

export const categories = combineReducers({
  byId,
  allIds
});

// Selectors
export const getCategoriesById = state => state.byId;
export const getSortedCategoryIds = state => state.allIds;
