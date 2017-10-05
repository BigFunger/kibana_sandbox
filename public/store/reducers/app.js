import { combineReducers } from 'redux';
import * as settings from './settings';
import * as uiState from './ui_state';

export const app = combineReducers({
  settings: settings.settings,
  uiState: uiState.uiState
});

// Selectors
export const getSettingsByCategoryId = (state, categoryId) => {
  return settings.getSettingsByCategoryId(state.settings, categoryId);
};

export const getAllCategories = (state) => {
  return settings.getAllCategories(state.settings);
};

export const getCategoryById = (state, id) => {
  return settings.getCategoryById(state.settings, id);
};

export const getShowBottomBar = (state) => {
  return uiState.getShowBottomBar(state.uiState);
};
