import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const defaultStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
    color: '#559300',
    textAlign: 'center'
  },
  subText: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    color: '#fff',
    textAlign: 'center'
  },
});

const FeedbackMessage = ({ type, mainText, subText, mainTextStyle, subTextStyle }) => {
  const _type = type ? type : 'success';
  const _mainText = mainText ? mainText : 'CORRECT';
  const _subText = subText ? subText : 'Good job fellow Crusader';
  const _mainTextStyle = mainTextStyle ? mainTextStyle : defaultStyles.mainText;
  const _subTextStyle = subTextStyle ? subTextStyle : defaultStyles.subText;

  return (
    <View style={defaultStyles.container}>
      <Text style={_mainTextStyle}>{_mainText}</Text>
      <Text style={_subTextStyle}>{_subText}</Text>
    </View>
  );
}

export default FeedbackMessage;