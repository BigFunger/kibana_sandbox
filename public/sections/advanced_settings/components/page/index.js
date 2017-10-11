import { connect } from 'react-redux';
import { Page as PresentationComponent } from './page';
import { loadSettings } from '../../../../store/actions/settings';

const mapStateToProps = (state) => {
  return {};
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
