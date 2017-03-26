import React, {Component} from 'react';
import {
  AppRegistry,
  StatusBar,
  ToolbarAndroid,
  View,
} from 'react-native';
import Card from './components/Card';
import {APP, COLORS} from './constants';

export default class gameCounter extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      score1: 0,
      score2: 0,
    };

    this.handleMinus1 = this.handleMinus1.bind(this);
  }

  handleScore(options) {
    const {player, add} = options;
    this.setState({
      score1: this.state.score1 + (player === 1 ? add : 0),
      score2: this.state.score2 + (player === 2 ? add : 0),
    });
  }

  handleMinus1() {
    this.handleScore({player: 1, add: -1});
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
        <Card
          score={this.state.score1}
          onPressMinus1={this.handleScore.bind(this, {player: 1, add: -1})}
          onPressMinus5={this.handleScore.bind(this, {player: 1, add: -5})}
          onPressPlus5={this.handleScore.bind(this, {player: 1, add: 5})}
          onPressPlus1={this.handleScore.bind(this, {player: 1, add: 1})}
        />
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
};

AppRegistry.registerComponent('gameCounter', () => gameCounter);
