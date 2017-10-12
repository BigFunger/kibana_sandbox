import { combineReducers } from 'redux';
import * as fromSettings from './settings';
import * as fromUiState from './ui_state';
import { createSelector } from 'reselect';

const settings = fromSettings.settings;
const uiState = fromUiState.uiState;

export const app = combineReducers({
  settings,
  uiState
});

// Selectors
export const getAllCategories = state => fromSettings.getAllCategories(state.settings);
export const getCategoryById = (state, id) => fromSettings.getCategoryById(state.settings, id);
export const getCategoryId = state => fromUiState.getCategoryId(state.uiState);
export const getShowBottomBar = state => fromUiState.getShowBottomBar(state.uiState);

export const getSettingIdsByCategoryId = state => fromSettings.getSettingIdsByCategoryId(state.settings);
export const getSettingsById = state => fromSettings.getSettingsById(state.settings);

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

    console.log('recalculating', { categoryId, settingIdsByCategory, settingsById, settingIds, result });

    return result;
  }
);
