import { connect } from 'react-redux';
import { Page as PresentationComponent } from './page';
import {
  loadSettings,
  formChanged
} from '../../../../store/actions/settings';
import { getShowBottomBar } from '../../../../store/reducers/app';

const mapStateToProps = (state) => {
  const showBottomBar = getShowBottomBar(state);

  return {
    showBottomBar
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFormChange: () => {
      dispatch(formChanged());
    },
    onLoadSettings: () => {
      dispatch(loadSettings());
    }
  };
};

export const Page = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
