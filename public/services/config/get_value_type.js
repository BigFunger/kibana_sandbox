import { isArray } from 'lodash';

/**
 * @param {string} the type value from the advanced setting definition object
 * @param {?} current value of the setting, and default value if no custom value defined.
 * @returns {string} the type to use for determining the display and editor
 */
export function getValueType(type, value) {
  if (type) {
    return type;
  }

  if (isArray(value)) {
    return 'array';
  }

  return typeof value;
}
