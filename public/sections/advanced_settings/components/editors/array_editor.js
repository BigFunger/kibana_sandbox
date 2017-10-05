import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiFieldText
} from 'ui_framework/components';

export class ArrayEditor extends React.PureComponent {
  getOnChangeHandler = () => (event) => {
    this.props.onChange(event.target.value);
  }

  render = () => {
    const {
      value,
      onChange
    } = this.props;

    return (
      <KuiFieldText
        onChange={this.getOnChangeHandler()}
        value={value}
      />
    );
  }
}
