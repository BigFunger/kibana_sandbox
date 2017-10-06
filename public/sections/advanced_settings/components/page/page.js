import React from 'react';
import {
  KuiPage,
  KuiPageHeader,
  KuiPageHeaderSection,
  KuiPageBody,
  KuiPageContent,
  KuiTitle,
  KuiPageContentBody,
  KuiSpacer
} from 'ui_framework/components';
import {
  BottomBar,
  SettingsSidebar,
  PageContentHeader,
  Warning,
  SettingsForm
} from '../../components';

export class Page extends React.Component {
  componentWillMount = () => {
    const {
      onLoadSettings
    } = this.props;
    onLoadSettings();
  }

  render = () => {
    const {
      categoryId
    } = this.props;
    const {
      showBottomBar
    } = this.state;
    return (
      <KuiPage>
        <KuiPageHeader>
          <KuiPageHeaderSection>
            <KuiTitle size="large">
              <h1>Management 10</h1>
            </KuiTitle>
          </KuiPageHeaderSection>
        </KuiPageHeader>
        <KuiPageBody>
          <SettingsSidebar currentId={categoryId} />
          <KuiPageContent>
            <PageContentHeader categoryId={categoryId} />
            <KuiPageContentBody>
              <Warning />
              <KuiSpacer size="l" />
              <SettingsForm
                categoryId={categoryId}
              />
            </KuiPageContentBody>
          </KuiPageContent>
        </KuiPageBody>
        { showBottomBar && <BottomBar /> }
      </KuiPage>
    );
  }
}
