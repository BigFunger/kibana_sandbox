import { connect } from 'react-redux';
import { PageContentHeader as PresentationComponent } from './page_content_header';
import { getCategoryById } from '../../../../store/reducers/app';

const mapStateToProps = (state, props) => {
  const category = getCategoryById(state, props.categoryId);
  const categoryDisplay = category ? category.display : '';

  return {
    categoryDisplay
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
}

export const PageContentHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
