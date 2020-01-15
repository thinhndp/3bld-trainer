import React from 'react';
import { View, StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
  sticker: {
    // borderRadius: 10,
    // flex: 1,
    // aspectRatio: 1,
  }
});

const CubeSticker = ({ color, type, rotation, style, size }) => {
  /*
    color: 'red' | 'green' | 'blue' | 'orange' | 'white'
    type: 'main' | 'sub'
    rotation: 'horizontal' | 'vertical', rotation if type is sub
    style: user's customization
  */
  const _getColor = (color) => {
    switch (color) {
      case 'red':
        return '#FF0000';
      case 'blue':
        return '#1CB0F6';
      case 'orange':
        return '#FF8800';
      case 'green':
        return '#00FF00';
      case 'white':
        return '#FFFFFF';
      case 'yellow':
        return '#FFFF00';
      default:
        return '#aaa';
    }
  }

  const _getRatio = (type, rotation) => {
    switch (type) {
      case 'main':
        return 1;
      case 'sub':
        return rotation === 'horizontal' ? 5 : 0.2;
      default:
        return 1;
    }
  }

  const _getSizes = (type, rotation, size) => {
    switch (type) {
      case 'main':
        return { width: size, height: size };
      case 'sub':
        return rotation === 'horizontal' ? { width: size, height: size / 5 } : { width: size / 5, height: size };
      default:
        return { width: size, height: size };
    }
  }

  return (
    <View style={{
      ...defaultStyles.sticker,
      ..._getSizes(type, rotation, size),
      backgroundColor: _getColor(color),
      borderRadius: size * 0.1,
      ...style
    }}></View>
  );
}

export default CubeSticker;