import { connect } from 'react-redux';
import { PageContentHeader as PresentationComponent } from './page_content_header';
import { getCurrentCategory } from '../../../../store/reducers/app';

const mapStateToProps = (state) => {
  const category = getCurrentCategory(state);
  const categoryDisplay = category ? category.display : '';

  return {
    categoryDisplay
  };
};

const mapDispatchToProps = () => {
  return {};
};

export const PageContentHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
