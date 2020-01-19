import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Key } from '../atoms';

const KEYBOARD_LAYOUT = [
  [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P' ],
  [ 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L' ],
  [ 'Z', 'X', 'C', 'V', 'B', 'N', 'M' ],
];

const defaultStyles = StyleSheet.create({
  keyboard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  keyRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  disabled: {
    opacity: 0.3,
  },
  active: {
    backgroundColor: '#eee',
    borderWidth: 0,
    color: '#262626'
  },

});

const Keyboard = ({ width, height, layout, disabledKeys, disabledStyle, activeKeys, activeStyle, keyboardStyle, keyStyle, onKeyPress }) => {
  const _width = width ? width : 394;
  const _height = height ? height : _width / 3;
  const _layout = layout ? layout : KEYBOARD_LAYOUT;
  const _keySize = Math.min(_width / 11.5, _height / 4);
  const _disabledKeys = disabledKeys ? disabledKeys : [];
  const _disableStyle = disabledStyle ? disabledStyle : defaultStyles.disabled;
  const _activeKeys = activeKeys ? activeKeys : [];
  const _activeStyle = activeStyle ? activeStyle : defaultStyles.active;

  const _getKeyStyle = (key) => {
    if (_disabledKeys.includes(key)) {
      return _disableStyle;
    }
    if (_activeKeys.includes(key)) {
      return _activeStyle;
    }
    return {};
  }

  const _getKeyLetterStyle = (key) => {
    var letterStyle = {};
    var keyStyle = {};

    if (_disabledKeys.includes(key)) {
      keyStyle = { ..._disableStyle };
    }
    else if (_activeKeys.includes(key)) {
      keyStyle = { ..._activeStyle };
    }

    // console.log(_activeStyle);

    if (keyStyle.hasOwnProperty('color')) {
      letterStyle = { ...letterStyle, color: keyStyle.color };
    }
    if (keyStyle.hasOwnProperty('fontSize')) {
      letterStyle = { ...letterStyle, fontSize: keyStyle.fontSize };
    }
    if (keyStyle.hasOwnProperty('fontFamily')) {
      letterStyle = { ...letterStyle, fontFamily: keyStyle.fontFamily };
    }
    // console.log(letterStyle);
    return letterStyle;
  }

  const _handleKeyPress = (key) => {
    if (_disabledKeys.includes(key)) {
      return;
    }
    onKeyPress(key);
  }

  return (
    <View
      style={{
        ...defaultStyles.keyboard,
        ...keyboardStyle,
        width: _width,
        height: _height,
      }}
    >
      {_layout.map(keyRow => (
        <View style={{ ...defaultStyles.keyRow, marginVertical: _keySize / 6.4 }}>
          {keyRow.map(key => (
            <TouchableOpacity
              onPress={() => { _handleKeyPress(key) }}
              activeOpacity={1}
            >
              <Key
                size={_keySize}
                letter={key}
                keyStyles={{ ..._getKeyStyle(key), marginHorizontal: _keySize / 11 }}
                letterStyles={_getKeyLetterStyle(key)}
              />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

export default Keyboard;