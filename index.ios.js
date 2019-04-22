import React, {Component} from 'react';
import {
  AppRegistry,
  StatusBar,
  ToolbarAndroid,
  View,
} from 'react-native';
import Card from './components/Card';
import {APP, COLORS} from './constants';

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

export default class gameCounter extends Component {
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
          <Card />
          <Card />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('gameCounter', () => gameCounter);
