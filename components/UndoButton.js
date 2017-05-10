import React, {Component} from 'react';
import {Text} from 'react-native';
import {
  getTheme,
  MKButton,
} from 'react-native-material-kit';
import {COLORS} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = (<Icon name="ios-undo" size={30} color={COLORS.PRIMARY} />)

const FlatButton = MKButton.flatButton().build();

const theme = getTheme();
const styles = {
  topLeft: {
    position: 'absolute',
    width: 50,
    padding: 10,
    left: 0,
    top: 0,
  },
};

export default class UndoButton extends Component {
  render(){
    return (
      <FlatButton style={styles.topLeft} onPress={this.props.onPress}>
        {myIcon}
      </FlatButton>
    )
  }
};

module.exports = UndoButton;
