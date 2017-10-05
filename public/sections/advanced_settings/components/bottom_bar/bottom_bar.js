import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiBottomBar,
  KuiFlexGroup,
  KuiFlexItem,
  KuiText,
  KuiButtonEmpty,
  KuiTextColor
} from 'ui_framework/components';

export class BottomBar extends React.Component {
  render = () => {
    const {
      onSave,
      onDiscard
    } = this.props;

    return (
      <KuiBottomBar>
        <KuiFlexGroup
          justifyContent="spaceBetween"
          alignItems="center"
        >
          <KuiFlexItem grow={false}>
            <KuiText>
              <p>
                <KuiTextColor color="ghost">
                  You have unsaved changes in your form.
                </KuiTextColor>
              </p>
            </KuiText>
          </KuiFlexItem>
          <KuiFlexItem grow={false}>
            <KuiFlexGroup
              justifyContent="flexEnd"
              gutterSize="small"
            >
              <KuiFlexItem grow={false}>
                <KuiButtonEmpty
                  type="ghost"
                  size="small"
                  iconType="check"
                  onClick={onSave}
                >Save</KuiButtonEmpty>
              </KuiFlexItem>
              <KuiFlexItem grow={false}>
                <KuiButtonEmpty
                  type="ghost"
                  size="small"
                  iconType="cross"
                  onClick={onDiscard}
                >Discard</KuiButtonEmpty>
              </KuiFlexItem>
            </KuiFlexGroup>
          </KuiFlexItem>
        </KuiFlexGroup>
      </KuiBottomBar>
    );
  }
}
