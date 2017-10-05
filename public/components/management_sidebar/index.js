import { connect } from 'react-redux';
import { ManagementSidebar as PresentationComponent } from './management_sidebar';
import { getManagementSections } from './lib/get_management_sections';

const mapStateToProps = () => {
  const sections = getManagementSections();

  return { sections };
};

const mapDispatchToProps = () => {
  return {};
};

export const ManagementSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
