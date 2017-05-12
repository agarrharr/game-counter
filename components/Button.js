import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import globalStyles from './globalStyles';
import {COLORS} from '../constants';
import {MKButton} from 'react-native-material-kit';

const FlatButton = MKButton.flatButton().build();

const styles = Object.assign({}, globalStyles, StyleSheet.create({
  buttonView: {
    flex: 1,
    alignItems: 'stretch',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.PRIMARY_20,
    height: 55,
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

class Button extends Component {
  constructor() {
    super(...arguments);

  }

  render() {
    return (
      <View style={styles.buttonView}>
        <FlatButton
          style={styles.button}
          onPress={() => {this.props.onPress(this.props.amount)}}
        >
          <Text style={styles.buttonText}>
            {this.props.amount}
          </Text>
        </FlatButton>
      </View>
    );
  }
}

module.exports = Button;
