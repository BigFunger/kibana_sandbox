import { connect } from 'react-redux';
import { SettingsForm as PresentationComponent } from './settings_form';
import { getCurrentSettings } from '../../../../store/reducers/app';
import { formDirtied } from '../../../../store/actions/settings';

const mapStateToProps = (state) => {
  const settings = getCurrentSettings(state);

  return {
    settings
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: () => {
      dispatch(formDirtied());
    }
  };
};

export const SettingsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
