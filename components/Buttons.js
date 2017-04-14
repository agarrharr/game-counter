import React, {Component} from 'react';
const MK = require('react-native-material-kit');
const globalStyles = require('./globalStyles');
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
const {
  MKButton,
  MKColor,
} = MK;
import {COLORS} from '../constants';

const styles = Object.assign({}, globalStyles, StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonView: {
    flex: 1,
    alignItems: 'stretch',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.PRIMARY_20,
    height: 55,
  },
  buttonViewLast: {
    borderRightWidth: 0,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.PRIMARY,
  },
}));

const FlatButton = MKButton.flatButton()
  .build();

class Buttons extends Component {
  render() {
    const {onPressMinus1} = this.props;
    return (
      <View style={styles.buttonRow}>
        <View style={styles.buttonView}>
          <FlatButton style={styles.button} onPress={this.props.onPressMinus1}>
            <Text pointerEvents="none" style={styles.buttonText}>
              -1
            </Text>
          </FlatButton>
        </View>
        <View style={styles.buttonView}>
          <FlatButton style={styles.button} onPress={this.props.onPressMinus5}>
            <Text style={styles.buttonText}>
              -5
            </Text>
          </FlatButton>
        </View>
        <View style={styles.buttonView}>
          <FlatButton style={styles.button} onPress={this.props.onPressPlus5}>
            <Text style={styles.buttonText}>
              +5
            </Text>
          </FlatButton>
        </View>
        <View style={[styles.buttonView, styles.buttonViewLast]}>
          <FlatButton style={styles.button} onPress={this.props.onPressPlus1}>
            <Text style={styles.buttonText}>
              +1
            </Text>
          </FlatButton>
        </View>
      </View>
    );
  }
}

module.exports = Buttons;
