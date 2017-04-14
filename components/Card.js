import React from 'react';
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

const Card = React.createClass({
  render(){
    return (
      <View style={globalStyles.container}>
        <View elevation={4} style={[theme.cardStyle, styles.card]}>
          <FlatButton style={styles.topLeft} onPress={this.props.onPressUndo}>
            <Text>Undo</Text>
          </FlatButton>
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
