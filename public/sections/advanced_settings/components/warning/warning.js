import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiCallOut
} from 'ui_framework/components';

export class Warning extends React.Component {
  render = () => {
    return (
      <KuiCallOut
        title="Proceed with caution!"
        type="warning"
      >
        <p>
          Tweaks you make here can break Kibana if you do not know what you are doing.
        </p>
      </KuiCallOut>
    );
  }
}