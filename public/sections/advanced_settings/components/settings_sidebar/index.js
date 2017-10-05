import { connect } from 'react-redux';
import { SettingsSidebar as PresentationComponent } from './settings_sidebar';
import {
  getAllCategories
} from '../../../../store/reducers/app';

const mapStateToProps = (state) => {
  const categories = getAllCategories(state);

  return {
    categories
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
}

export const SettingsSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
