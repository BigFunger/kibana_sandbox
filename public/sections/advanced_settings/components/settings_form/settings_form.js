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

    //TODO: TEMP!
    const settingsObject = settings.reduce((acc, val) => {
      acc[val.id] = val;
      return acc;
    }, {});

    this.state = {
      settings: {
        ...settingsObject
      }
    };
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('settings_form.componentWillReceiveProps', nextProps, (this.props === nextProps));
    const { settings } = nextProps;
    const settingsObject = settings.reduce((acc, val) => {
      acc[val.id] = val;
      return acc;
    }, {});

    this.setState({
      settings: {
        ...settingsObject
      }
    });
  }

  onChange = (settingId, value) => {
    const { settings } = this.state;
    const setting = settings[settingId];
    const isCustom = setting.defaultValue !== value;

    this.setState({
      settings: {
        ...settings,
        [settingId]: {
          ...setting,
          value,
          isCustom
        }
      }
    });

    if (!this.props.showBottomBar) {
      this.props.onChange();
    }
  }

  onReset = (settingId) => {
    const { settings } = this.state;
    const setting = settings[settingId];
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
    const { settings } = this.state;

    return Object.keys(settings).map(key => {
      const setting = settings[key];

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
              {/* <br />
              <br />
              <pre>{JSON.stringify(setting)}</pre> */}
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
