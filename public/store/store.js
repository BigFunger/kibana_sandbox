import { createStore, applyMiddleware, compose } from 'redux';
import { app } from './reducers/app';
import thunk from 'redux-thunk';
// import { loadState, saveState } from '../lib/local_storage';
// import { throttle } from 'lodash';
// import { kbnUrl } from './middleware/kbn_url';
// import { notifer } from './middleware/notifier';

let store;
export const createIntegratedStore = () => {
  if (store) {
    return store;
  }

  store = createStore(
    app,
    undefined,
    //loadState(),
    compose(
      applyMiddleware(
        thunk
        // kbnUrl($injector),
        // notifer($injector)
      ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  // store.subscribe(throttle(() => {
  //   //Note, you can filter which bits of state are stored in localStorage here, but that seems clunky.
  //   //W33ble had mentioned some additional structure that they were using to determine what would get
  //   //stored in localStorage and what wouldn't. Need to ask about it.
  //   saveState(store.getState());
  // }, 1000));

  return store;
};
