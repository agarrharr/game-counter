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
  constructor() {
    super(...arguments);

    this.state = {
      addend: 0,
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(addend) {
    this.setState({addend});

    // window.clearTimeout(this.timer);

    // this.timer = setTimeout(() => {
    //   this.props.onScore(this.state.addend);
    // }, DELAY_TIME);
  }

  render() {
    const {onPressMinus1} = this.props;
    return (
      <View style={styles.buttonRow}>
        <Button amount={-1} onPress={this.handlePress} />
        <Button amount={-5} onPress={this.handlePress} />
        <Button amount={5} onPress={this.handlePress} />
        <Button amount={1} onPress={this.handlePress} />
      </View>
    );
  }
}

module.exports = Buttons;
