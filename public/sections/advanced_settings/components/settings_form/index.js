import { connect } from 'react-redux';
import { SettingsForm as PresentationComponent } from './settings_form';
import { getSettingsByCategoryId } from '../../../../store/reducers/app';
import { formDirtied } from '../../../../store/actions/settings';

const mapStateToProps = (state, props) => {
  const settings = getSettingsByCategoryId(state, props.categoryId);

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
