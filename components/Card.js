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
  topBar: {
    flex: 1,
  },
  scoreView: {
    flex: 3,
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
  constructor() {
    super(...arguments);

    this.state = {
      score: STARTING_SCORE,
      previousScores: [],
      fadeAnimation: new Animated.Value(1),
    };

    this.handleUndo = this.handleUndo.bind(this);
    this.handleScore = this.handleScore.bind(this);
  }

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

  handleUndo() {
    window.clearTimeout(this.fadeTimeout);

    const score = this.state.previousScores.length > 0
        ? this.state.previousScores[this.state.previousScores.length - 1]
        : this.state.score;

    this.setState({
      score,
      previousScores: this.state.previousScores.slice(0, this.state.previousScores.length - 1),
    });
  }

  handleScore(addend) {
    const score = this.state.score + addend;
    this.setState({
      score,
      previousScores: [...this.state.previousScores, score],
    });

    this.fadeScore();
  }

  render(){
    return (
      <View style={globalStyles.container}>
        <View elevation={4} style={[theme.cardStyle, styles.card]}>
          <View style={styles.topBar}>
            <UndoButton onPress={this.handleUndo} />
          </View>
          <Animated.View style={{...styles.scoreView, opacity: this.state.fadeAnimation}}>
            <Text style={styles.score}>
              {this.state.score}
            </Text>
          </Animated.View>
          <Buttons onScore={this.handleScore} />
        </View>
      </View>
    )
  }
};

module.exports = Card;
