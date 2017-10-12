import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiSideNavItem
} from 'ui_framework/components';
import {
  ManagementSidebar
} from '../../../../components';

export class SettingsSidebar extends React.Component {
  static propTypes = {
    currentId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    categories: PropTypes.array
  }

  renderItems = () => {
    const {
      currentId,
      categories,
      onCategoryChanged
    } = this.props;

    return categories.map(category => {
      const isSelected = category.id === currentId;
      return (
        <KuiSideNavItem indent isSelected={isSelected} key={category.id}>
          <button onClick={() => onCategoryChanged(category.id)}>
            { category.display }
          </ button>
        </KuiSideNavItem>
      );
    });
  }

  render = () => {
    return (
      <ManagementSidebar
        currentId="advanced_settingz"
      >
        { this.renderItems() }
      </ManagementSidebar>
    );
  }
}
