import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { CubeSticker } from '../atoms';

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
  }
});

const CubeFlat = ({ type, width, status, onStickerPress }) => {
  const _stickerSize = (2 / 9) * width;
  const _status = status ? status : 'active';
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

  useEffect(() => {
    const newStickers = _stickers.map(stickerCol => (stickerCol.map(sticker => (
      _chosenStickers.includes(sticker.color)
      ? { ...sticker, status: 'active' }
      :  { ...sticker, status: 'inactive' }
    ))));
    _setStickers([...newStickers]);
  }, [_chosenStickers]);

  const _handleStickerTap = (color) => {
    // const newStickers = _stickers;
    // var newChosenStickers = _chosenStickers;
    // const curStickerStatus = newStickers[yIndex][xIndex].status;
    // if (curStickerStatus === 'active') {
    //   newStickers[yIndex][xIndex].status = 'inactive';
    //   newChosenStickers = [ ...newChosenStickers.filter(chosen => chosen !== newStickers[yIndex][xIndex].color) ];
    // }
    // else {
    //   newStickers[yIndex][xIndex].status = 'active';
    //   newChosenStickers.push(newStickers[yIndex][xIndex].color);
    // }
    // // console.log(chosenStickers);
    // // newStickers[yIndex][xIndex].status = curStickerStatus === 'active' ? 'inactive' : 'active';
    // _setChosenStickers([...newChosenStickers]);
    // _setStickers([...newStickers]);
    // onStickerPress(_chosenStickers);

    var newChosenStickers = _chosenStickers;
    const index = _chosenStickers.indexOf(color);
    if (index > -1) {
      newChosenStickers.splice(index, 1);
    }
    else {
      newChosenStickers.push(color);
    }
    _setChosenStickers([...newChosenStickers]);
    onStickerPress(_chosenStickers);
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
            >
              <CubeSticker
                color={sticker.color}
                size={_stickerSize}
                style={{
                  margin: (_stickerSize / 8),
                  opacity: sticker.status === 'active' ? 1 : INACTIVE_OPACITY
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

export default CubeFlat;