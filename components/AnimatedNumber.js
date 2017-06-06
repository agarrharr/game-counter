import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import globalStyles from './globalStyles';
import {COLORS} from '../constants';

const BUTTON_HEIGHT = 50;
const NUMBER_WIDTH = 50;
const ANIMATION_DURATION = 600;
const ANIMATION_MOVEMENT_DURATION = ANIMATION_DURATION * 1;
const ANIMATION_FADE_DURATION = ANIMATION_DURATION * 0.3;
const ANIMATION_FADE_DELAY = ANIMATION_DURATION * 0.7;

const styles = Object.assign({}, globalStyles, StyleSheet.create({
  container: {
    position: 'relative',
  },
  animatedNumber: {
    position: 'absolute',
    height: BUTTON_HEIGHT,
    width: NUMBER_WIDTH,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.PRIMARY,
  },
}));

export default class AnimatedNumber extends Component {
  state = {
    buttonWidth: 0,
    topAnimation: new Animated.Value(0),
    opacityAnimation: new Animated.Value(0),
  };

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    Animated.sequence([
      Animated.timing(
        this.state.topAnimation,
        {
          toValue: 0,
          duration: 0,
        }
      ),
      Animated.timing(
        this.state.opacityAnimation,
        {
          toValue: 1,
          duration: 0,
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.state.topAnimation,
          {
            toValue: -BUTTON_HEIGHT,
            duration: ANIMATION_MOVEMENT_DURATION,
          }
        ),
        Animated.timing(
          this.state.opacityAnimation,
          {
            toValue: 0,
            duration: ANIMATION_FADE_DURATION,
            delay: ANIMATION_FADE_DELAY,
          }
        ),
      ]),
    ])
    .start(this.handleAnimationComplete);
  };

  handleAnimationComplete = () => {
    this.props.onAnimationComplete();
  }

  render(){
    const animatedNumberStyles = StyleSheet.flatten([
      styles.animatedNumber,
      {
        left: (this.props.width - NUMBER_WIDTH) / 2,
        top: this.state.topAnimation,
        opacity: this.state.opacityAnimation,
      }
    ]);

    return (
      <View style={styles.container}>
        <Animated.View style={animatedNumberStyles}>
        <Text style={styles.buttonText}>
          {this.props.addend > 0
              ? `+${this.props.addend}`
              : this.props.addend
          }
        </Text>
        </Animated.View>
      </View>
    );
  }
};

module.exports = AnimatedNumber;
