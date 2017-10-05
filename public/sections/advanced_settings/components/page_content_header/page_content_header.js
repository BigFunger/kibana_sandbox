import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiPageContentHeader,
  KuiPageContentHeaderSection,
  KuiTitle,
  KuiLink
} from 'ui_framework/components';

export class PageContentHeader extends React.Component {
  render = () => {
    const { categoryDisplay } = this.props;

    return (
      <KuiPageContentHeader>
        <KuiPageContentHeaderSection>
          <KuiTitle>
            <span>
              <KuiLink href="#/management/kibana/settingz">Advanced settings</KuiLink>
              <span>: { categoryDisplay }</span>
            </span>
          </KuiTitle>
        </KuiPageContentHeaderSection>
      </KuiPageContentHeader>
    );
  }
}