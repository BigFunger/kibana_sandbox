import React from 'react';
import {
  KuiSelect
} from 'ui_framework/components';

export class SelectEditor extends React.PureComponent {
  onChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render = () => {
    const {
      value,
      options
    } = this.props;

    const selectOptions = options.map(option => ({ value: option, text: option }));

    return (
      <KuiSelect
        options={selectOptions}
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
