import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  loadSettings,
  loadSettingsSuccess,
  loadSettingsError,
  saveSettings,
  saveSettingsSuccess,
  saveSettingsError,
  formChanged
} from '../actions/settings';

const defaultState = {
  loading: false,
  error: null,
  requestStart: null,
  requestEnd: null,
  showBottomBar: false
};

export const uiState = handleActions({
  [formChanged](state, action) {
    return {
      ...state,
      showBottomBar: true
    };
  },
  [loadSettings](state, action) {
    return {
      ...state,
      loading: true,
      requestStart: Date.now()
    };
  },
  [loadSettingsSuccess](state, action) {
    return {
      ...state,
      error: null,
      loading: false,
      requestEnd: Date.now(),
      showBottomBar: false
    };
  },
  [loadSettingsError](state, action) {
    const { error } = action.payload;
    return {
      ...state,
      error,
      loading: false,
      requestEnd: Date.now()
    };
  },
  [saveSettings](state, action) {
    return {
      ...state,
      loading: true,
      requestStart: Date.now()
    };
  },
  [saveSettingsSuccess](state, action) {
    return {
      ...state,
      error: null,
      loading: false,
      requestEnd: Date.now(),
      showBottomBar: false
    };
  },
  [saveSettingsError](state, action) {
    const { error } = action.payload;
    return {
      ...state,
      error,
      loading: false,
      requestEnd: Date.now()
    };
  }
}, defaultState);

export const getShowBottomBar = (state) => {
  return state.showBottomBar;
};
