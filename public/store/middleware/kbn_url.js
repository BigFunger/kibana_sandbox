
import { kibanaIntegrationUrlChange } from '../actions/kibana_integration';

export const kbnUrl = $injector => {
  const $rootScope = $injector.get('$rootScope');
  const kbnUrl = $injector.get('kbnUrl');
  
  return store => next => action => {
    if (action.type === kibanaIntegrationUrlChange.toString()) {
      kbnUrl.change(action.payload.url, {});
      $rootScope.$digest();
    }

    return next(action);
  }
}