import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../../ui_framework/dist/ui_framework_theme_light.css';
import { createIntegratedStore } from './public/store';
import { Page } from './public/sections/advanced_settings/components';

const store = createIntegratedStore();
const categoryId = 'kibana';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Page categoryId={categoryId} />
    </div>
  </Provider>,
  document.getElementById('pageRoot')
);
