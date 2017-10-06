import { connect } from 'react-redux';
import { BottomBar as PresentationComponent } from './bottom_bar';
import { saveSettings } from '../../../../store/actions/settings';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: () => {
      dispatch(saveSettings());
    }
  };
};

export const BottomBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
