import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
} from 'react-native';
import {
  getTheme,
  MKButton,
} from 'react-native-material-kit';
import globalStyles from './globalStyles';
import {COLORS} from '../constants';
import Buttons from './Buttons';
import UndoButton from './UndoButton';

const theme = getTheme();
const styles = {
  card: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topSection: {
    flex: 1,
    flexDirection: 'row',
  },
  sideBar: {
    flex: 1,
    maxWidth: 30,
  },
  scoreView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    color: COLORS.PRIMARY,
    fontSize: 136,
  },
};

const ANIMATION_DURATION = 600;
const STARTING_SCORE = 50;

export default class Card extends Component {
  state = {
    score: STARTING_SCORE,
    previousScores: [],
    fadeAnimation: new Animated.Value(1),
  };

  fadeScore() {
    Animated.sequence([
      Animated.timing(
        this.state.fadeAnimation,
        {
          toValue: 0,
          duration: ANIMATION_DURATION / 2,
        }
      ),
      Animated.timing(
        this.state.fadeAnimation,
        {
          toValue: 1,
          duration: ANIMATION_DURATION / 2,
        }
      ),
    ])
    .start();
  }

  handleUndo = () => {
    const score = this.state.previousScores.length > 0
        ? this.state.previousScores[this.state.previousScores.length - 1]
        : this.state.score;

    this.setState({
      score,
      previousScores: this.state.previousScores.slice(0, this.state.previousScores.length - 1),
    });
  };

  handleScore = addend => {
    const score = this.state.score + addend;
    this.setState({
      score,
      previousScores: [...this.state.previousScores, this.state.score],
    });

    this.fadeScore();
  };

  render(){
    return (
      <View style={globalStyles.container}>
        <View elevation={4} style={[theme.cardStyle, styles.card]}>
          <View style={styles.topSection}>
            <View style={styles.sideBar}>
              <UndoButton onPress={this.handleUndo} />
            </View>
            <Animated.View style={{...styles.scoreView, opacity: this.state.fadeAnimation}}>
              <Text style={styles.score}>
                {this.state.score}
              </Text>
            </Animated.View>
            <View style={styles.sideBar}></View>
          </View>
          <Buttons onScore={this.handleScore} />
        </View>
      </View>
    )
  }
};

module.exports = Card;
