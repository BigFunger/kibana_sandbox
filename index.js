import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../../ui_framework/dist/ui_framework_theme_light.css';
import { createIntegratedStore } from './public/store';
import { Page } from './public/sections/advanced_settings/components';
import { setCategory } from './public/store/actions/ui_state';

const store = createIntegratedStore();
//TODO: Not sure how I feel about dispatching actions from the register route
store.dispatch(setCategory({ categoryId: 'kibana' }));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Page />
    </div>
  </Provider>,
  document.getElementById('pageRoot')
);
