import { connect } from 'react-redux';
import { SettingList as PresentationComponent } from './setting_list';
import {
  getCurrentSettingId,
  getAllSettings
} from '../../../../store/reducers/app';
import {
  loadSetting
} from '../../../../store/actions/app';


const mapStateToProps = (state) => {
  const currentSettingId = getCurrentSettingId(state);
  const settings = getAllSettings(state);

  return {
    currentSettingId,
    settings
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSettingClicked: (id) => {
      dispatch(loadSetting({ id }));
    }
  };
}

export const SettingList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
