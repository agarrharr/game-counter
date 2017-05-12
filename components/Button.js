import React, {Component} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import globalStyles from './globalStyles';
import {COLORS} from '../constants';
import {MKButton} from 'react-native-material-kit';

const FlatButton = MKButton.flatButton().build();

const styles = Object.assign({}, globalStyles, StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: 'column',
    height: 50,
  },
  animatedNumber: {
    position: 'absolute',
    top: 0,
    left: '50%',
  },
  buttonView: {
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
      topAnimation: new Animated.Value(1),
      opacityAnimation: new Animated.Value(0),
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.props.onPress(this.props.amount);

    Animated.sequence([
      Animated.timing(
        this.state.opacityAnimation,
        {
          toValue: 0,
          duration: 300,
        }
      ),
      Animated.timing(
        this.state.topAnimation,
        {
          toValue: 0,
          duration: 0,
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.state.topAnimation,
          {
            toValue: -30,
            duration: 300,
            ease: Easing.easeOutIn,
          }
        ),
        Animated.timing(
          this.state.opacityAnimation,
          {
            toValue: 1,
            duration: 300,
          }
        ),
      ]),
      Animated.timing(
        this.state.opacityAnimation,
        {
          toValue: 0,
          duration: 300,
        }
      ),
      Animated.timing(
        this.state.topAnimation,
        {
          toValue: 0,
          duration: 0,
        }
      ),
    ])
    .start();
  }

  render() {
    const animatedNumberStyles = StyleSheet.flatten([
      styles.animatedNumber,
      {
        top: this.state.topAnimation,
        opacity: this.state.opacityAnimation,
      }
    ]);

    return (
      <View style={styles.containerView}>
        <Animated.View style={animatedNumberStyles}
        >
          <Text style={styles.buttonText}>
            {this.props.amount > 0
                ? `+${this.props.amount}`
                : this.props.amount
            }
          </Text>
        </Animated.View>
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
