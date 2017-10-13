import { combineReducers } from 'redux';
import * as fromCategories from './categories';
import * as fromSettings from './settings';
import * as fromUiState from './ui_state';
import { createSelector } from 'reselect';

const categories = fromCategories.categories;
const settings = fromSettings.settings;
const uiState = fromUiState.uiState;

export const app = combineReducers({
  categories,
  settings,
  uiState
});

// Selectors
export const getCategoriesById = state => fromCategories.getCategoriesById(state.categories);
export const getSortedCategoryIds = state => fromCategories.getSortedCategoryIds(state.categories);
export const getCategoryId = state => fromUiState.getCategoryId(state.uiState);
export const getShowBottomBar = state => fromUiState.getShowBottomBar(state.uiState);

export const getSettingIdsByCategoryId = state => fromSettings.getSettingIdsByCategoryId(state.settings);
export const getSettingsById = state => fromSettings.getSettingsById(state.settings);

export const getCategories = createSelector(
  getSortedCategoryIds,
  getCategoriesById,
  (ids, categories) => {
    return getSortedCategoryIds.map(id => categories[id]);
  }
);

export const getCurrentCategory = createSelector(
  getCategoryId,
  getCategoriesById,
  (categoryId, categories) => {
    return categories[categoryId];
  }
);

export const getCurrentSettings = createSelector(
  getCategoryId,
  getSettingIdsByCategoryId,
  getSettingsById,
  (categoryId, settingIdsByCategory, settingsById) => {
    const settingIds = settingIdsByCategory[categoryId];

    const result = settingIds.reduce((acc, settingId) => {
      acc[settingId] = settingsById[settingId];
      return acc;
    }, {});

    return result;
  }
);
