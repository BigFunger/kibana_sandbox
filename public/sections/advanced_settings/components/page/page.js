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
    return (
      <KuiPage>
        <KuiPageHeader>
          <KuiPageHeaderSection>
            <KuiTitle size="large">
              <h1>Management 23</h1>
            </KuiTitle>
          </KuiPageHeaderSection>
        </KuiPageHeader>
        <KuiPageBody>
          <SettingsSidebar />
          <KuiPageContent>
            <PageContentHeader />
            <KuiPageContentBody>
              <Warning />
              <KuiSpacer size="l" />
              <SettingsForm />
            </KuiPageContentBody>
          </KuiPageContent>
        </KuiPageBody>
        <BottomBar />
      </KuiPage>
    );
  }
}
