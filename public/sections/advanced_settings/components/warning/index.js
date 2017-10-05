import { connect } from 'react-redux';
import { Warning as PresentationComponent } from './warning';

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
}

export const Warning = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
