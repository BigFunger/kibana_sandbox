import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiSideNav,
  KuiSideNavItem,
  KuiSideNavTitle,
} from 'ui_framework/components';

export class SettingList extends React.Component {
  static propTypes = {
    currentSettingId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    settings : PropTypes.array,
    onSettingClicked: PropTypes.func
  }
  
  render = () => {
    const {
      currentSettingId,
      settings,
      onSettingClicked
    } = this.props;

    const listItems = settings.map((setting) => {
      return (
        <KuiSideNavItem
          key={setting.id}
          isSelected={setting.id === currentSettingId}
        >
          <button onClick={() => onSettingClicked(setting.id)}>
            {setting.name}
          </button>
        </KuiSideNavItem>
      );
    });

    return (
      <KuiSideNav
        mobileTitle="Settings"
        style={{height: '100%'}}>
        {listItems}
      </KuiSideNav>
    );
  }
}