import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { CubeSticker } from '../atoms';
import { padding } from '_styles';

const COLORS = [['orange'], ['white', 'green', 'yellow'], ['red'], ['blue']];
const INACTIVE_OPACITY = 0.4;

const defaultStyles = StyleSheet.create({
  cubeFlat: {

  },
  flexCol: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  stickerContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
  }
});

const CubeFlat = ({ type, width, status, onStickerPress, stickersStyle, stickersOverlay }) => {
  /*
    type: 'full' | 'center-only', not yet implemented
    width: number, component width
    status: 'active' | 'inactive', stickers opacities change accordingly
    onStickerPress: func, parent function to call
    stickersStyle: Obj(stickers: Arr, style: StyleObj), style for stickers with color in Arr
    stickersOverlay: Obj(stickers: Arr, overlay: Component), overlay component for stickers with color in Arr
  */
  const _stickerSize = (2 / 9) * width;
  const _status = status ? status : 'active';
  const _stickersStyle = stickersStyle ? stickersStyle : {stickers: [], style: null};
  const _stickersOverlay = stickersOverlay ? stickersOverlay : {stickers: [], overlay: null};
  const [_chosenStickers, _setChosenStickers] = useState([]);
  const [_stickers, _setStickers] = useState(
    COLORS.map(stickerCol => (stickerCol.map(sticker => ({ 
      color: sticker,
      status: _status,
    }))))
  );
  // const _stickers = COLORS.map(stickerCol => (stickerCol.map(sticker => ({ 
  //   color: sticker,
  //   status: _status,
  //  }))));

  // useEffect(() => {
  //   const newStickers = _stickers.map(stickerCol => (stickerCol.map(sticker => (
  //     _chosenStickers.includes(sticker.color)
  //     ? { ...sticker, status: 'active' }
  //     :  { ...sticker, status: 'inactive' }
  //   ))));
  //   _setStickers([...newStickers]);
  // }, [_chosenStickers]);



  const _handleStickerTap = (color) => {
    // var newChosenStickers = _chosenStickers;
    // const index = _chosenStickers.indexOf(color);
    // if (index > -1) {
    //   newChosenStickers.splice(index, 1);
    // }
    // else {
    //   newChosenStickers.push(color);
    // }
    // _setChosenStickers([...newChosenStickers]);
    // onStickerPress(_chosenStickers);
    onStickerPress(color);
  }

  const _getStickerStyle = (sticker) => {
    if (_stickersStyle.stickers.includes(sticker.color)) {
      return {
        margin: (_stickerSize / 8),
        opacity: sticker.status === 'active' ? 1 : INACTIVE_OPACITY,
        ..._stickersStyle.style
      };
    }
    return {
      margin: (_stickerSize / 8),
      opacity: sticker.status === 'active' ? 1 : INACTIVE_OPACITY,
    };
  }

  return (
    <View style={{ ...defaultStyles.cubeFlat, ...defaultStyles.flexRow }}>
      {_stickers.map((stickerCol, yIndex) => (
        <View key={'sc' + yIndex.toString()} style={{ ...defaultStyles.flexCol, ...defaultStyles.justifyCenter }}>
          {stickerCol.map((sticker, xIndex) => (
            <TouchableOpacity
              key={'s' + xIndex.toString()}
              onPress={() => {_handleStickerTap(sticker.color)}}
              activeOpacity={1}
              style={defaultStyles.stickerContainer}
            >
              <CubeSticker
                color={sticker.color}
                size={_stickerSize}
                style={_getStickerStyle(sticker)}
              >
              </CubeSticker>
              {
                _stickersOverlay.stickers.includes(sticker.color)
                ? (
                  <View
                    style={{
                      ...defaultStyles.overlay,
                      width: _stickerSize,
                      height: _stickerSize,
                    }}
                  >{_stickersOverlay.overlay}</View>
                )
                : null
              }
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

export default CubeFlat;