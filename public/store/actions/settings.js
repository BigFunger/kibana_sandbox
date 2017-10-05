import { createAction } from 'redux-actions';
import { createThunk } from 'redux-thunks';
import { configService } from '../../services/config';

export const formChanged =
  createAction('ADVANCED_SETTINGS_FORM_CHANGED');

export const loadSettingsSuccess =
createAction('ADVANCED_SETTINGS_LOAD_SETTINGS_SUCCESS', ({ settings }) => ({ settings }));

export const loadSettingsError =
createAction('ADVANCED_SETTINGS_LOAD_SETTINGS_ERROR', ({ error }) => ({ error }));

export const loadSettings = createThunk('ADVANCED_SETTINGS_LOAD_SETTINGS',
({ dispatch, type }) => {
  dispatch(createAction(type)());

  let settings;
  try {
    settings = configService.loadSettings();
  } catch (error) {
    return dispatch(loadSettingsError({ error }));
  }
  dispatch(loadSettingsSuccess({ settings }));
});

export const saveSettingsSuccess =
  createAction('ADVANCED_SETTINGS_SAVE_SETTINGS_SUCCESS');

export const saveSettingsError =
  createAction('ADVANCED_SETTINGS_SAVE_SETTINGS_ERROR', ({ error }) => ({ error }));

export const saveSettings = createThunk('ADVANCED_SETTINGS_SAVE_SETTINGS',
({ dispatch, type }) => {
  dispatch(createAction(type)());

  dispatch(saveSettingsSuccess());
  // let settings;
  // try {
  //   settings = configService.loadSettings();
  // } catch (error) {
  //   return dispatch(loadSettingsError({ error }));
  // }
  // dispatch(loadSettingsSuccess({ settings }));
});
