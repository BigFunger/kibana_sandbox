import routes from 'ui/routes';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Page } from './components/page';
import { Provider } from 'react-redux';
import { createIntegratedStore } from '../../store';
import { configService } from '../../services/config';

const template = '<div id="pageRoot"></div>';

routes
.when('/management/kibana/settingz', {
  redirectTo: '/management/kibana/settingz/kibana'
});

routes
.when('/management/kibana/settingz/:categoryId', {
  template,
  controller: ($injector, $scope) => {
    const rootElement = document.getElementById('pageRoot');
    const store = createIntegratedStore($injector);

    const $route = $injector.get('$route');
    const categoryId = $route.current.params.categoryId;

    configService.init($injector.get('config'));
  
    $scope.$on('$destroy', () => {
      rootElement && unmountComponentAtNode(rootElement);
    });

    render(
      <Provider store={store}>
        <Page categoryId={categoryId} />
      </Provider>,
      rootElement
    );
  }
});
