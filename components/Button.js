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

const BUTTON_HEIGHT = 100;
const ANIMATION_DURATION = 600;
const ANIMATION_MOVEMENT_DURATION = ANIMATION_DURATION * 0.8;
const ANIMATION_FADE_DURATION = ANIMATION_DURATION * 0.2;

const styles = Object.assign({}, globalStyles, StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: 'column',
    height: BUTTON_HEIGHT,
  },
  animatedNumber: {
    flex: 1,
    alignItems: 'center',
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
      topAnimation: new Animated.Value(BUTTON_HEIGHT / 2),
      opacityAnimation: new Animated.Value(0),
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.props.onPress(this.props.amount);

    Animated.sequence([
      Animated.timing(
        this.state.topAnimation,
        {
          toValue: BUTTON_HEIGHT / 2,
          duration: 0,
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.state.topAnimation,
          {
            toValue: 0,
            duration: ANIMATION_MOVEMENT_DURATION,
            ease: Easing.easeOutIn,
          }
        ),
        Animated.timing(
          this.state.opacityAnimation,
          {
            toValue: 1,
            duration: ANIMATION_MOVEMENT_DURATION,
          }
        ),
      ]),
      Animated.timing(
        this.state.opacityAnimation,
        {
          toValue: 0,
          duration: ANIMATION_FADE_DURATION,
        }
      ),
    ])
    .start();
  }

  render() {
    const animatedNumberStyles = StyleSheet.flatten([
      styles.animatedNumber,
      {
        transform: [{translateY: this.state.topAnimation}],
        opacity: this.state.opacityAnimation,
      }
    ]);

    return (
      <View style={styles.containerView}>
        <Animated.View style={animatedNumberStyles}
        >
          <Text style={styles.buttonText}>
            {this.props.addend > 0
                ? `+${this.props.addend}`
                : this.props.addend
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
