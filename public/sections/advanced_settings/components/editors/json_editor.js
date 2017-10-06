import React from 'react';
import {
  KuiTextArea
} from 'ui_framework/components';

export class JsonEditor extends React.PureComponent {
  onChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render = () => {
    const {
      value
    } = this.props;

    return (
      <KuiTextArea
        onChange={this.onChange}
        value={value}
      />
    );
  }
}
