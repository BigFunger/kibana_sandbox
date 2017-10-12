import { handleActions } from 'redux-actions';
import {
  loadSettings,
  loadSettingsSuccess,
  loadSettingsError,
  saveSettings,
  saveSettingsSuccess,
  saveSettingsError,
  formDirtied
} from '../actions/settings';

const defaultState = {
  categoryId: 'kibana',
  loading: false,
  error: null,
  requestStart: null,
  requestEnd: null,
  showBottomBar: false
};

export const uiState = handleActions({
  [formDirtied](state) {
    return {
      ...state,
      showBottomBar: true
    };
  },
  [loadSettings](state) {
    return {
      ...state,
      loading: true,
      requestStart: Date.now()
    };
  },
  [loadSettingsSuccess](state) {
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
  [saveSettings](state) {
    return {
      ...state,
      loading: true,
      requestStart: Date.now()
    };
  },
  [saveSettingsSuccess](state) {
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

export const getShowBottomBar = state => state.showBottomBar;
