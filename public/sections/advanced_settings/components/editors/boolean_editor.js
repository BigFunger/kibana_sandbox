import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiSwitch
} from 'ui_framework/components';

export class BooleanEditor extends React.PureComponent {
  getOnChangeHandler = () => (event) => {
    this.props.onChange(event.target.checked);
  }

  render = () => {
    const {
      value
    } = this.props;

    return (
      <KuiSwitch
        checked={!!this.props.value}
        onChange={this.getOnChangeHandler()}
      />
    );
  }
}