import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CubeSticker } from '../atoms';

const EDGE_LETTER_TO_PIECE_DICT = {
  'A': { mainColor: 'white', subColor: 'blue' },
  'B': { mainColor: 'white', subColor: 'red' },
  'C': { mainColor: 'white', subColor: 'green' },
  'D': { mainColor: 'white', subColor: 'orange' },
  'E': { mainColor: 'orange', subColor: 'white' },
  'F': { mainColor: 'orange', subColor: 'green' },
  'G': { mainColor: 'orange', subColor: 'yellow' },
  'H': { mainColor: 'orange', subColor: 'blue' },
  'I': { mainColor: 'green', subColor: 'white' },
  'J': { mainColor: 'green', subColor: 'red' },
  'K': { mainColor: 'green', subColor: 'yellow' },
  'L': { mainColor: 'green', subColor: 'orange' },
  'M': { mainColor: 'red', subColor: 'white' },
  'N': { mainColor: 'red', subColor: 'blue' },
  'O': { mainColor: 'red', subColor: 'yellow' },
  'P': { mainColor: 'red', subColor: 'green' },
  'Q': { mainColor: 'blue', subColor: 'white' },
  'R': { mainColor: 'blue', subColor: 'orange' },
  'S': { mainColor: 'blue', subColor: 'yellow' },
  'T': { mainColor: 'blue', subColor: 'red' },
  'U': { mainColor: 'yellow', subColor: 'green' },
  'V': { mainColor: 'yellow', subColor: 'red' },
  'W': { mainColor: 'yellow', subColor: 'blue' },
  'X': { mainColor: 'yellow', subColor: 'orange' },
}

const defaultStyles = StyleSheet.create({
  piece: {
    // display: 'flex',
    // flex: 1,
    // backgroundColor: '#f00',
    // height: 200
  },
  columnFlex: {
    flexDirection: 'column',
  },
  rowFlex: {
    flexDirection: 'row',
  },
  sticker: {
    margin: 5
  }
});

const CubePiece = ({ type, letter, subPosition, stickerSize }) => {
  /*
    type: 'edge' || 'corner'
    letter: 'A' - 'Z', letter notation of piece using Speffz scheme
    subPosition: 'top' || 'right' || 'bottom' || 'left', position of sub sticker, if type is corner,
      this will be the position of the first suc sticker, the second one will be on the next edge 
      (clockwise) of the main sticker
    stickerSize: number
  */

  const _renderEdgePiece = (letter, subPosition, stickerSize) => {
    const pos = subPosition ? subPosition : [ 'top', 'right', 'bottom', 'left' ][Math.random() * 4];
    const size = stickerSize ? stickerSize : 50;
    if (pos === 'top') {
      return (
        <View style={{ ...defaultStyles.piece, ...defaultStyles.columnFlex }}>
          <CubeSticker
            color={EDGE_LETTER_TO_PIECE_DICT[letter].subColor}
            type='sub'
            rotation='horizontal'
            style={defaultStyles.sticker}
            size={size}
          />
          <CubeSticker
            color={EDGE_LETTER_TO_PIECE_DICT[letter].mainColor}
            type='main'
            style={{ ...defaultStyles.sticker }}
            size={size}
          />
        </View>
      );
    }
    else if (pos === 'bottom') {
      return (
        <View style={{ ...defaultStyles.piece, ...defaultStyles.columnFlex }}>
          <CubeSticker
            color={EDGE_LETTER_TO_PIECE_DICT[letter].mainColor}
            type='main'
            style={{ ...defaultStyles.sticker }}
            size={size}
          />
          <CubeSticker
            color={EDGE_LETTER_TO_PIECE_DICT[letter].subColor}
            type='sub'
            rotation='horizontal'
            style={defaultStyles.sticker}
            size={size}
          />
        </View>
      );
    }
    else if (pos === 'right') {
      return (
        <View style={{ ...defaultStyles.piece, ...defaultStyles.rowFlex }}>
          <CubeSticker
            color={EDGE_LETTER_TO_PIECE_DICT[letter].mainColor}
            type='main'
            style={{ ...defaultStyles.sticker }}
            size={size}
          />
          <CubeSticker
            color={EDGE_LETTER_TO_PIECE_DICT[letter].subColor}
            type='sub'
            rotation='vertical'
            style={defaultStyles.sticker}
            size={size}
          />
        </View>
      );
    }
    else if (pos === 'left') {
      return (
        <View style={{ ...defaultStyles.piece, ...defaultStyles.rowFlex }}>
          <CubeSticker
            color={EDGE_LETTER_TO_PIECE_DICT[letter].subColor}
            type='sub'
            rotation='vertical'
            style={defaultStyles.sticker}
            size={size}
          />
          <CubeSticker
            color={EDGE_LETTER_TO_PIECE_DICT[letter].mainColor}
            type='main'
            style={{ ...defaultStyles.sticker }}
            size={size}
          />
        </View>
      );
    }
  }

  return (
    _renderEdgePiece(letter.toUpperCase(), subPosition, stickerSize)
  );
}

export default CubePiece;