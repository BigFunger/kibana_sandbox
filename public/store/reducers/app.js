import { combineReducers } from 'redux';
import * as fromSettings from './settings';
import * as fromUiState from './ui_state';

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

export const getSettings = state => {
  const categoryId = getCategoryId(state);
  const settingIdsByCategory = fromSettings.getSettingIdsByCategoryId(state.settings);
  const settingsById = fromSettings.getSettingsById(state.settings);
  const settingIds = settingIdsByCategory[categoryId];

  return settingIds.reduce((acc, settingId) => {
    acc[settingId] = settingsById[settingId];
    return acc;
  }, {});
};
