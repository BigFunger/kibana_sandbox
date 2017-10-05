import { management } from 'ui/management';

management.getSection('kibana').register('advanced_settingz', {
  display: 'Advanced Settingz',
  order: 25,
  url: '#/management/kibana/settingz'
});
