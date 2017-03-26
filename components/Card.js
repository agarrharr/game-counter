import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  getTheme,
} from 'react-native-material-kit';
import {COLORS} from '../constants';
import Buttons from './Buttons';

const theme = getTheme();
const globalStyles = require('./globalStyles');
const styles = {
  score: {
    color: COLORS.PRIMARY,
    fontSize: 50,
  },
  scoreView: {
    alignItems: 'center',
  },
}

const Card = React.createClass({
  render(){
    return (
      <View style={globalStyles.container}>
        <View elevation={4} style={theme.cardStyle}>
          <View style={styles.scoreView}>
            <Text style={styles.score}>
              {this.props.score}
            </Text>
          </View>
          <View>
            <Buttons
              onPressMinus1={this.props.onPressMinus1}
              onPressMinus5={this.props.onPressMinus5}
              onPressPlus5={this.props.onPressPlus5}
              onPressPlus1={this.props.onPressPlus1}
            />
          </View>
        </View>
      </View>
    )
  }
});

module.exports = Card;
