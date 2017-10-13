import { combineReducers } from 'redux';
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
