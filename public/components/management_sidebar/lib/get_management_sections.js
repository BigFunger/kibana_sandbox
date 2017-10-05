// import { management } from 'ui/management';
// import { sortByOrder } from 'lodash';

// export const getManagementSections = () => {
//   const sections = sortByOrder(management.items.raw, 'order');
//   return sections.map(section => {
//     return {
//       ...section,
//       items: sortByOrder(section.items.raw, 'order')
//     };
//   });
// };

import { sortByOrder } from 'lodash';
import sections from './sections.json';

export const getManagementSections = () => {
  return sections.map(section => {
    return {
      ...section,
      items: sortByOrder(section.items.raw, 'order')
    };
  });
};
