import React, {Component} from 'react';
import {
  AppRegistry,
  StatusBar,
  ToolbarAndroid,
  View,
} from 'react-native';
import Card from './components/Card';
import {APP, COLORS} from './constants';

const DELAY_TIME = 1000;

export default class gameCounter extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      score1: 0,
      score2: 0,
      previousScore1: [],
      previousScore2: [],
      lastButtonPressed: null,
      timeLastButtonWasPressed: null,
    };
  }

  handleUndo({player}) {
    this.setState({
      score1: player === 1 && this.state.previousScore1.length > 0 ? this.state.previousScore1[this.state.previousScore1.length - 1] : this.state.score1,
      score2: player === 2 && this.state.previousScore2.length > 0 ? this.state.previousScore2[this.state.previousScore2.length - 1] : this.state.score2,
      previousScore1: player === 1 ? this.state.previousScore1.slice(0, this.state.previousScore1.length - 1) : this.state.previousScore1,
      previousScore2: player === 2 ? this.state.previousScore2.slice(0, this.state.previousScore2.length - 1) : this.state.previousScore2,
    });
  }

  handleScore({player, add}) {
    const currentTime = new Date().getTime();
    this.setState({
      score1: this.state.score1 + (player === 1 ? add : 0),
      score2: this.state.score2 + (player === 2 ? add : 0),
      lastButtonPressed: player,
      timeLastButtonWasPressed: currentTime,
      previousScore1: this.state.lastButtonPressed !== 1 || currentTime - this.state.timeLastButtonWasPressed > DELAY_TIME ? [...this.state.previousScore1, this.state.score1] : this.state.previousScore1,
      previousScore2: this.state.lastButtonPressed !== 2 || currentTime - this.state.timeLastButtonWasPressed > DELAY_TIME ? [...this.state.score2, this.state.score2] : this.state.previousScore2,
    });
  }

  render() {
    return (
      <View style={styles.page}>
        <StatusBar
           backgroundColor={COLORS.PRIMARY}
           barStyle="light-content"
         />
        <ToolbarAndroid
          style={styles.toolbar}
          title={APP.TITLE}
          titleColor={COLORS.WHITE}
        />
        <View style={styles.cardView}>
          <Card
            score={this.state.score1}
            onPressUndo={this.handleUndo.bind(this, {player: 1})}
            onPressMinus1={this.handleScore.bind(this, {player: 1, add: -1})}
            onPressMinus5={this.handleScore.bind(this, {player: 1, add: -5})}
            onPressPlus5={this.handleScore.bind(this, {player: 1, add: 5})}
            onPressPlus1={this.handleScore.bind(this, {player: 1, add: 1})}
          />
          <Card
            score={this.state.score2}
            onPressUndo={this.handleUndo.bind(this, {player: 2})}
            onPressMinus1={this.handleScore.bind(this, {player: 2, add: -1})}
            onPressMinus5={this.handleScore.bind(this, {player: 2, add: -5})}
            onPressPlus5={this.handleScore.bind(this, {player: 2, add: 5})}
            onPressPlus1={this.handleScore.bind(this, {player: 2, add: 1})}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  page: {
    flex: 1,
    alignItems: 'stretch',
  },
  toolbar: {
    height: 56,
    backgroundColor: COLORS.PRIMARY,
  },
  cardView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
};

AppRegistry.registerComponent('gameCounter', () => gameCounter);
