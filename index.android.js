import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native';
import Card from './components/Card';

export default class gameCounter extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      score1: 0,
      score2: 0,
    };
    console.log('hi');

    this.handleMinus1 = this.handleMinus1.bind(this);
  }

  handleScore(options) {
    console.log(options);
    const {player, add} = options;
    this.setState({
      score1: this.state.score1 + (player === 1 ? add : 0),
      score2: this.state.score2 + (player === 2 ? add : 0),
    });
  }

  handleMinus1() {
    console.log('handleMinus1');
    this.handleScore({player: 1, add: -1});
  }

  render() {
    return (
      <Card
        score={this.state.score1}
        onPressMinus1={this.handleScore.bind(this, {player: 1, add: -1})}
        onPressMinus5={this.handleScore.bind(this, {player: 1, add: -5})}
        onPressPlus5={this.handleScore.bind(this, {player: 1, add: 5})}
        onPressPlus1={this.handleScore.bind(this, {player: 1, add: 1})}
      />
    );
  }
}

AppRegistry.registerComponent('gameCounter', () => gameCounter);
