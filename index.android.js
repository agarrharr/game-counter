import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class gameCounter extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      score1: 0,
      score2: 0,
    };

    this.handleScore1Add5 = this.handleScore1Add5.bind(this);
  }

  handleScore(options) {
    console.log(options);
    const {player, add} = options;
    this.setState({
      score1: this.state.score1 + (player === 1 ? add : 0),
      score2: this.state.score2 + (player === 2 ? add : 0),
    });
  }

  handleScore1Add1(options) {
    console.log(options);
    this.setState({
      score1: this.state.score1 + 1,
    });
  }

  handleScore1Add5() {
    this.setState({
      score1: this.state.score1 + 5,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.score}>
          {this.state.score2}
        </Text>
        <View style={styles.buttons}>
          <TouchableHighlight style={styles.button} onPress={this.handleScore.bind(this, {player: 2, add: -1})}>
            <Text>-1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.handleScore.bind(this, {player: 2, add: -5})}>
            <Text>-5</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.handleScore.bind(this, {player: 2, add: 1})}>
            <Text>+1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.handleScore.bind(this, {player: 2, add: 5})}>
            <Text>+5</Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.score}>
          {this.state.score1}
        </Text>
        <View style={styles.buttons}>
          <TouchableHighlight style={styles.button} onPress={this.handleScore.bind(this, {player: 1, add: -1})}>
            <Text>-1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.handleScore.bind(this, {player: 1, add: -5})}>
            <Text>-5</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.handleScore.bind(this, {player: 1, add: 1})}>
            <Text>+1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.handleScore.bind(this, {player: 1, add: 5})}>
            <Text>+5</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  score: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttons: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('gameCounter', () => gameCounter);
