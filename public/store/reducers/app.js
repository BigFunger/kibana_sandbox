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
export const getSettingsByCategoryId = (state, categoryId) => {
  return fromSettings.getSettingsByCategoryId(state.settings, categoryId);
};

export const getAllCategories = (state) => {
  return fromSettings.getAllCategories(state.settings);
};

export const getCategoryById = (state, id) => {
  return fromSettings.getCategoryById(state.settings, id);
};

export const getShowBottomBar = (state) => {
  return fromUiState.getShowBottomBar(state.uiState);
};
