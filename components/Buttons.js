import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import globalStyles from './globalStyles';
import Button from './Button.js';

const DELAY_TIME = 900;

const styles = Object.assign({}, globalStyles, StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

class Buttons extends Component {
  state = {
    addend: 0,
  };

  handlePress = addend => {
    this.setState({
      addend: this.state.addend + addend,
    });

    window.clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.props.onScore(this.state.addend);
      this.setState({
        addend: 0,
      });
    }, DELAY_TIME);
  };

  render() {
    const {onPressMinus1} = this.props;
    return (
      <View style={styles.buttonRow}>
        <Button amount={-1} addend={this.state.addend} onPress={this.handlePress} />
        <Button amount={-5} addend={this.state.addend} onPress={this.handlePress} />
        <Button amount={5} addend={this.state.addend} onPress={this.handlePress} />
        <Button amount={1} addend={this.state.addend} onPress={this.handlePress} />
      </View>
    );
  }
}

module.exports = Buttons;
