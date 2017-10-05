import { getAriaName } from './get_aria_name';
import { getValueType } from './get_value_type';
import { getEditorType } from './get_editor_type';

function convertSetting(setting, id) {
  const defaultValue = setting.value;
  const value = setting.userValue || defaultValue;
  const ariaName = getAriaName(id);
  const isCustom = !(value === defaultValue); //Should be a value stored purely in the redux store. Calculated on edit.
  const readonly = !!setting.readonly;
  const category = setting.category;
  const categoryDisplay = setting.categoryDisplay;
  const description = setting.description;
  const options = setting.options;
  const valueType = getValueType(setting.type, value);
  const editorType = getEditorType(valueType);

  return {
    id,
    ariaName,
    value,
    defaultValue,
    category,
    categoryDisplay,
    isCustom,
    readonly,
    description,
    options,
    valueType,
    editorType
  };
}

/* settings is the response object from the kibana service
 * getAll() call.
 */
export const convertSettings = (settings) => {  
  const settingsMap = Object.keys(settings).map(id => {
    return convertSetting(settings[id], id);
  });
  const filteredMap = settingsMap.filter(setting => {
    return setting.readonly !== true
  });
  const result = filteredMap.reduce((acc, setting) => {
    acc[setting.id] = setting;
    return acc;
  }, {});

  return result;
}