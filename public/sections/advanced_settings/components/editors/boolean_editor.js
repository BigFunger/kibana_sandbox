import React from 'react';
import {
  KuiSwitch
} from 'ui_framework/components';

export class BooleanEditor extends React.PureComponent {
  onChange = (event) => {
    this.props.onChange(event.target.checked);
  }

  render = () => {
    const {
      value
    } = this.props;

    return (
      <KuiSwitch
        checked={!!value}
        onChange={this.onChange}
      />
    );
  }
}
