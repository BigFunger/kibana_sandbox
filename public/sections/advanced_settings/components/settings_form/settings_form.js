import React from 'react';
import {
  KuiForm,
  KuiFormRow,
  KuiLink
} from 'ui_framework/components';
import {
  ArrayEditor,
  BooleanEditor,
  JsonEditor,
  MarkdownEditor,
  NormalEditor,
  SelectEditor
} from '../editors';

export class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    const { settings } = props;

    this.state = {
      ...settings
    };
  }

  componentWillReceiveProps = (nextProps) => {
    const { settings } = nextProps;

    this.setState({
      ...settings
    });
  }

  onChange = (settingId, value) => {
    const setting = this.state[settingId];
    const isCustom = setting.defaultValue !== value;

    this.setState({
      [settingId]: {
        ...setting,
        value,
        isCustom
      }
    });

    if (!this.props.showBottomBar) {
      this.props.onChange();
    }
  }

  onReset = (settingId) => {
    const setting = this.state[settingId];
    this.onChange(settingId, setting.defaultValue);
  }

  getEditor = (setting) => {
    switch(setting.editorType) {
      case 'boolean':
        return BooleanEditor;
      case 'markdown':
        return MarkdownEditor;
      case 'json':
        return JsonEditor;
      case 'array':
        return ArrayEditor;
      case 'select':
        return SelectEditor;
      default:
        return NormalEditor;
    }
  }

  renderSetting = (setting) => {
    const Editor = this.getEditor(setting);

    return (
      <Editor
        onChange={(value) => { this.onChange(setting.id, value); }}
        options={setting.options}
        value={setting.value}
      />
    );
  }

  renderSettings = () => {
    return Object.keys(this.state).map(key => {
      const setting = this.state[key];

      return (
        <KuiFormRow
          id={setting.id}
          label={setting.id}
          key={setting.id}
          helpText={
            <div>
              <span dangerouslySetInnerHTML={{ __html: setting.description }} />
              { !setting.isCustom || (
                <KuiLink
                  onClick={() => {
                    this.onReset(setting.id);
                  }}
                  style={{ marginLeft: '5px' }}
                >
                  Reset
                </KuiLink>
              )}
            </div>
          }
        >
          { this.renderSetting(setting) }
        </KuiFormRow>
      );
    });
  }

  render = () => {
    return (
      <KuiForm>
        { this.renderSettings() }
      </KuiForm>
    );
  }
}
