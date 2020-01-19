import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const defaultStyles = StyleSheet.create({
  key: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    // backgroundColor: '#f0f',
  },
  letter: {
    fontFamily: 'Quicksand-Bold',
    color: '#fff',
    textAlignVertical: 'center'
  }
});

const Key = ({ size, letter, keyStyles, letterStyles }) => {
  const _size = size ? size : 34;
  const _letter = letter ? letter : '?';

  return (
    <View
      style={{ ...defaultStyles.key, height: _size, width: _size, borderRadius: _size / 2, borderWidth: _size / 11, ...keyStyles }}
    >
      <Text style={{ ...defaultStyles.letter, lineHeight: _size / 1.8, fontSize: _size / 2, ...letterStyles }}>{_letter}</Text>
    </View>
  );
}

export default Key;
