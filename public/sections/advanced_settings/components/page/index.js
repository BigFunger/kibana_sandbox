import { connect } from 'react-redux';
import { Page as PresentationComponent } from './page';
import { loadSettings } from '../../../../store/actions/settings';

const mapStateToProps = () => {
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
