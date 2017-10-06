import { connect } from 'react-redux';
import { Page as PresentationComponent } from './page';
import { loadSettings } from '../../../../store/actions/settings';
import { getShowBottomBar } from '../../../../store/reducers/app';

const mapStateToProps = (state) => {
  const showBottomBar = getShowBottomBar(state);

  return {
    showBottomBar
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadSettings: () => {
      dispatch(loadSettings());
    }
  };
};

export const Page = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
