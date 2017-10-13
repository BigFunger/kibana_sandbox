import { connect } from 'react-redux';
import { SettingsSidebar as PresentationComponent } from './settings_sidebar';
import { getCategories, getCategoryId } from '../../../../store/reducers/app';
import { setCategory } from '../../../../store/actions/ui_state';

const mapStateToProps = (state) => {
  const categories = getCategories(state);
  const currentId = getCategoryId(state);

  return {
    currentId,
    categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryChanged: (categoryId) => {
      dispatch(setCategory({ categoryId }));
    }
  };
};

export const SettingsSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
