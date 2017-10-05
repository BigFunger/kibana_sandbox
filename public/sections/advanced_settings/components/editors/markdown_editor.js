import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiTextArea
} from 'ui_framework/components';

export class MarkdownEditor extends React.PureComponent {
  getOnChangeHandler = () => (event) => {
    this.props.onChange(event.target.value);
  }

  render = () => {
    const {
      value
    } = this.props;

    return (
      <KuiTextArea
        onChange={this.getOnChangeHandler()}
        value={value}
      />
    );
  }
}