import React, {Component} from 'react';
import {MKButton} from 'react-native-material-kit';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import globalStyles from './globalStyles';
import {COLORS} from '../constants';
import AnimatedNumber from './AnimatedNumber';

const FlatButton = MKButton.flatButton().build();

// TODO: remove BUTTON_HEIGHT
const BUTTON_HEIGHT = 50;
const DELAY_TIME = 900;

const styles = Object.assign({}, globalStyles, StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: 'column',
    height: BUTTON_HEIGHT,
  },
  buttonView: {
    position: 'relative',
    flex: 1,
    alignItems: 'stretch',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.PRIMARY_20,
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

    this.state = {
      addends: [],
      nextAddend: this.props.amount,
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const currentTime = new Date().getTime();
    this.props.onPress(this.props.amount);

    this.setState({
      addends: [
        ...this.state.addends,
        this.state.nextAddend,
      ],
      nextAddend: this.state.nextAddend + this.props.amount,
    });
  }

  render() {
    return (
      <View style={styles.containerView}>
        {this.state.addends.map((addend) => (
          <AnimatedNumber addend={addend} key={addend} />
        ))}
        <View style={styles.buttonView}>
          <FlatButton
            style={styles.button}
            onPress={this.handlePress}
          >
            <Text style={styles.buttonText}>
              {this.props.amount > 0
                  ? `+${this.props.amount}`
                  : this.props.amount
              }
            </Text>
          </FlatButton>
        </View>
      </View>
    );
  }
}

module.exports = Button;
