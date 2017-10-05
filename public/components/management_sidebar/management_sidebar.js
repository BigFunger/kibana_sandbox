import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiPageSideBar,
  KuiSideNav,
  KuiSideNavTitle,
  KuiSideNavItem
} from 'ui_framework/components';

export class ManagementSidebar extends React.Component {
  static propTypes = {
    currentId: PropTypes.string,
    management: PropTypes.object,
    sections: PropTypes.array.isRequired
  }

  state = {
    isSideNavOpenOnMobile: false
  };

  toggleSideNavOpenOnMobile = () => {
    this.setState({
      isSideNavOpenOnMobile: !this.state.isSideNavOpenOnMobile
    });
  }

  renderSectionItems = (section) => {
    const {
      currentId,
      children
    } = this.props;

    return section.items.map(item => (
      <div key={item.id}>
        {item.id === currentId ? (
          <KuiSideNavItem isSelected>
            <span>{ item.display }</span>
          </KuiSideNavItem>
        ) : (
          <KuiSideNavItem>
            <a href={ item.url }>
              { item.display }
            </a>
          </KuiSideNavItem>
        )}
        { item.id === currentId && children }
      </div>
    ));
  }

  renderSections = () => {
    const { sections } = this.props;

    return sections.map(section => {
      if (!section.visible || section.items.length === 0) {
        return null;
      }
      return (
        <div key={section.id}>
          <KuiSideNavTitle>
            { section.display }
          </KuiSideNavTitle>
          { this.renderSectionItems(section) }
        </div>
      )
    });
  }

  render = () => {
    const { isSideNavOpenOnMobile } = this.state;

    return (
      <KuiPageSideBar>
        <KuiSideNav
          mobileTitle="Navigate within Management"
          toggleOpenOnMobile={ this.toggleSideNavOpenOnMobile }
          isOpenOnMobile={ isSideNavOpenOnMobile }
        >
          { this.renderSections() }
        </KuiSideNav>
      </KuiPageSideBar>
    );
  }
}