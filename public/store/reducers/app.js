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
export const getSettingsByCategoryId = (state, categoryId) => fromSettings.getSettingsByCategoryId(state.settings, categoryId);
export const getAllCategories = state => fromSettings.getAllCategories(state.settings);
export const getCategoryById = (state, id) => fromSettings.getCategoryById(state.settings, id);
export const getShowBottomBar = state => fromUiState.getShowBottomBar(state.uiState);
