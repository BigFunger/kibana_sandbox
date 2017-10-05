import { connect } from 'react-redux';
import { SettingsForm as PresentationComponent } from './settings_form';
import { getSettingsByCategoryId } from '../../../../store/reducers/app';

const mapStateToProps = (state, props) => {
  const settings = getSettingsByCategoryId(state, props.categoryId);

  return {
    settings
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
}

export const SettingsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
