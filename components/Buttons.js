import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import globalStyles from './globalStyles';
import Button from './Button.js';

const styles = Object.assign({}, globalStyles, StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

class Buttons extends Component {
  render() {
    const {onPressMinus1} = this.props;
    return (
      <View style={styles.buttonRow}>
        <Button amount={-1} onPress={this.props.onPress} />
        <Button amount={-5} onPress={this.props.onPress} />
        <Button amount={5} onPress={this.props.onPress} />
        <Button amount={1} onPress={this.props.onPress} rightBorder={false} />
      </View>
    );
  }
}

module.exports = Buttons;
