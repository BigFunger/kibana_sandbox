import { kibanaIntegrationNotify } from '../actions/kibana_integration';
import { Notifier } from 'ui/notify/notifier';

export const notifer = $injector => {
  const $rootScope = $injector.get('$rootScope');
  const notifier = new Notifier({ location: 'Datagen' });
  
  return store => next => action => {
    if (action.type === kibanaIntegrationNotify.toString()) {
      notifier.info(action.payload.message);
      $rootScope.$digest();
    }

    return next(action);
  }
}