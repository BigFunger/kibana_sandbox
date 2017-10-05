const NAMED_EDITORS = ['json', 'array', 'boolean', 'select', 'markdown'];
const NORMAL_EDITOR = ['number', 'string', 'null', 'undefined'];

/**
 * @param {string} type response from call to getValueType
 * @returns {string} the editor type to use when editing value
 */
export function getEditorType(type) {
  if (NAMED_EDITORS.includes(type)) {
    return type;
  }
  if (NORMAL_EDITOR.includes(type)) {
    return 'normal';
  }
  return 'unknown';
}
