import React, { Children } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const defaultStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center'
  },
  cardInfo: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    // backgroundColor: '#0f0'
  },
  title: {
    color: '#262626',
    fontSize: 24,
    fontFamily: 'Quicksand-Bold'
  },
  desc: {
    color: '#262626',
    fontSize: 18,
    fontFamily: 'Quicksand-Medium'
  },
  rightElement: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#00f',
  }
});

const NavCard = ({ title, desc, children }) => {
  return (
    <View style={defaultStyles.cardContainer}>
      <View style={defaultStyles.cardInfo}>
        <Text style={defaultStyles.title}>{ title ? title : 'Card Title' }</Text>
        <Text style={defaultStyles.desc}>{ desc ? desc : 'Card Description' }</Text>
      </View>
      <View style={defaultStyles.rightElement}>
        { children }
      </View>
    </View>
  );
}

export default NavCard;