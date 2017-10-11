import { connect } from 'react-redux';
import { BottomBar as PresentationComponent } from './bottom_bar';
import { saveSettings, loadSettings } from '../../../../store/actions/settings';
import { getShowBottomBar } from '../../../../store/reducers/app';


const mapStateToProps = (state) => {
  const showBottomBar = getShowBottomBar(state);

  return {
    showBottomBar
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: () => {
      dispatch(saveSettings());
    },
    onDiscard: () => {
      dispatch(loadSettings());
    }
  };
};

export const BottomBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
