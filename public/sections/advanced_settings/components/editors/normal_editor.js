import React from 'react';
import {
  KuiFieldText
} from 'ui_framework/components';

export class NormalEditor extends React.PureComponent {
  onChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render = () => {
    const {
      value
    } = this.props;

    return (
      <KuiFieldText
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
