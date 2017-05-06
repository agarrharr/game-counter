import React, {Component} from 'react';
import {
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

const FlatButton = MKButton.flatButton().build();

const theme = getTheme();
const styles = {
  card: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  score: {
    color: COLORS.PRIMARY,
    fontSize: 136,
  },
  scoreView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const DELAY_TIME = 1000;

export default class Card extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      score: 0,
      previousScore: [],
      timeLastButtonWasPressed: null,
    };

    this.handleUndo = this.handleUndo.bind(this);
  }

  handleUndo() {
    this.setState({
      score: this.state.previousScore.length > 0
        ? this.state.previousScore[this.state.previousScore.length - 1]
        : this.state.score,
      previousScore: this.state.previousScore.slice(0, this.state.previousScore.length - 1),
    });
  }

  handleScore(addend) {
    const currentTime = new Date().getTime();

    this.setState({
      score: this.state.score + addend,
      timeLastButtonWasPressed: currentTime,
      previousScore: currentTime - this.state.timeLastButtonWasPressed > DELAY_TIME
        ? [...this.state.previousScore, this.state.score]
        : this.state.previousScore,
    });
  }

  render(){
    return (
      <View style={globalStyles.container}>
        <View elevation={4} style={[theme.cardStyle, styles.card]}>
          <FlatButton style={styles.topLeft} onPress={this.handleUndo}>
            <Text>Undo</Text>
          </FlatButton>
          <View style={styles.scoreView}>
            <Text style={styles.score}>
              {this.state.score}
            </Text>
          </View>
          <View>
            <Buttons
              onPressMinus1={this.handleScore.bind(this, -1)}
              onPressMinus5={this.handleScore.bind(this, -5)}
              onPressPlus5={this.handleScore.bind(this, 5)}
              onPressPlus1={this.handleScore.bind(this, 1)}
            />
          </View>
        </View>
      </View>
    )
  }
};

module.exports = Card;
