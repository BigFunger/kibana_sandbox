import React from 'react';
import {
  KuiTextArea
} from 'ui_framework/components';

export class JsonEditor extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onChange = (event) => {
      props.onChange(event.target.value);
    };
  }

  render = () => {
    const {
      value
    } = this.props;

    return (
      <div>
        <h1>version 6</h1>
        <KuiTextArea
          onChange={this.onChange}
          value={value}
        />
      </div>
    );
  }
}
