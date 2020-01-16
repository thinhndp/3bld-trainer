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

const CORNER_LETTER_TO_PIECE_DICT = {
  'A': { mainColor: 'white', subColor1: 'orange', subColor2: 'blue' },
  'B': { mainColor: 'white', subColor1: 'blue', subColor2: 'red' },
  'C': { mainColor: 'white', subColor1: 'red', subColor2: 'green' },
  'D': { mainColor: 'white', subColor1: 'green', subColor2: 'orange' },
  'E': { mainColor: 'orange', subColor1: 'blue', subColor2: 'white' },
  'F': { mainColor: 'orange', subColor1: 'white', subColor2: 'green' },
  'G': { mainColor: 'orange', subColor1: 'green', subColor2: 'yellow' },
  'H': { mainColor: 'orange', subColor1: 'yellow', subColor2: 'blue' },
  'I': { mainColor: 'green', subColor1: 'orange', subColor2: 'white' },
  'J': { mainColor: 'green', subColor1: 'white', subColor2: 'red' },
  'K': { mainColor: 'green', subColor1: 'red', subColor2: 'yellow' },
  'L': { mainColor: 'green', subColor1: 'yellow', subColor2: 'orange' },
  'M': { mainColor: 'red', subColor1: 'green', subColor2: 'white' },
  'N': { mainColor: 'red', subColor1: 'white', subColor2: 'blue' },
  'O': { mainColor: 'red', subColor1: 'blue', subColor2: 'yellow' },
  'P': { mainColor: 'red', subColor1: 'yellow', subColor2: 'green' },
  'Q': { mainColor: 'blue', subColor1: 'red', subColor2: 'white' },
  'R': { mainColor: 'blue', subColor1: 'white', subColor2: 'orange' },
  'S': { mainColor: 'blue', subColor1: 'orange', subColor2: 'yellow' },
  'T': { mainColor: 'blue', subColor1: 'yellow', subColor2: 'red' },
  'U': { mainColor: 'yellow', subColor1: 'orange', subColor2: 'green' },
  'V': { mainColor: 'yellow', subColor1: 'green', subColor2: 'red' },
  'W': { mainColor: 'yellow', subColor1: 'red', subColor2: 'blue' },
  'X': { mainColor: 'yellow', subColor1: 'blue', subColor2: 'orange' },
}

const NOTATIONS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X'
];

const DIRECTIONS = [
  'top', 'right', 'bottom', 'left'
];

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
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
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
      this will be the position of the first sub sticker, the second one will be on the next edge 
      (clockwise) of the main sticker
    stickerSize: number
  */

  const _renderCornerPiece = (userLetter, subPosition, stickerSize) => {
    const letter = NOTATIONS.includes(userLetter) ? userLetter : NOTATIONS[Math.floor(Math.random() * 23)];
    const pos = DIRECTIONS.includes(subPosition) ? subPosition : DIRECTIONS[Math.floor(Math.random() * 4)];
    const size = stickerSize ? stickerSize : 50;

    if (pos === 'top') {
      return (
        <View style={{ ...defaultStyles.piece, ...defaultStyles.rowFlex, ...defaultStyles.alignEnd }}>
          <View style={{ ...defaultStyles.piece, ...defaultStyles.columnFlex }}>
            <CubeSticker
              color={CORNER_LETTER_TO_PIECE_DICT[letter].subColor1}
              type='sub'
              rotation='horizontal'
              style={defaultStyles.sticker}
              size={size}
            />
            <CubeSticker
              color={CORNER_LETTER_TO_PIECE_DICT[letter].mainColor}
              type='main'
              style={{ ...defaultStyles.sticker }}
              size={size}
            />
          </View>
          <CubeSticker
            color={CORNER_LETTER_TO_PIECE_DICT[letter].subColor2}
            type='sub'
            rotation='vertical'
            style={defaultStyles.sticker}
            size={size}
          />
        </View>
      );
    }
    else if (pos === 'bottom') {
      return (
        <View style={{ ...defaultStyles.piece, ...defaultStyles.rowFlex, ...defaultStyles.alignStart }}>
          <CubeSticker
            color={CORNER_LETTER_TO_PIECE_DICT[letter].subColor2}
            type='sub'
            rotation='vertical'
            style={defaultStyles.sticker}
            size={size}
          />
          <View style={{ ...defaultStyles.piece, ...defaultStyles.columnFlex }}>
            <CubeSticker
              color={CORNER_LETTER_TO_PIECE_DICT[letter].mainColor}
              type='main'
              style={{ ...defaultStyles.sticker }}
              size={size}
            />
            <CubeSticker
              color={CORNER_LETTER_TO_PIECE_DICT[letter].subColor1}
              type='sub'
              rotation='horizontal'
              style={defaultStyles.sticker}
              size={size}
            />
          </View>
        </View>
      );
    }
    else if (pos === 'right') {
      return (
        <View style={{ ...defaultStyles.piece, ...defaultStyles.columnFlex, ...defaultStyles.alignStart }}>
          <View style={{ ...defaultStyles.piece, ...defaultStyles.rowFlex }}>
            <CubeSticker
              color={CORNER_LETTER_TO_PIECE_DICT[letter].mainColor}
              type='main'
              style={{ ...defaultStyles.sticker }}
              size={size}
            />
            <CubeSticker
              color={CORNER_LETTER_TO_PIECE_DICT[letter].subColor1}
              type='sub'
              rotation='vertical'
              style={defaultStyles.sticker}
              size={size}
            />
          </View>
          <CubeSticker
            color={CORNER_LETTER_TO_PIECE_DICT[letter].subColor2}
            type='sub'
            rotation='horizontal'
            style={defaultStyles.sticker}
            size={size}
          />
        </View>
      );
    }
    else if (pos === 'left') {
      return (
        <View style={{ ...defaultStyles.piece, ...defaultStyles.columnFlex, ...defaultStyles.alignEnd }}>
          <CubeSticker
            color={CORNER_LETTER_TO_PIECE_DICT[letter].subColor2}
            type='sub'
            rotation='horizontal'
            style={defaultStyles.sticker}
            size={size}
          />
          <View style={{ ...defaultStyles.piece, ...defaultStyles.rowFlex }}>
            <CubeSticker
              color={CORNER_LETTER_TO_PIECE_DICT[letter].subColor1}
              type='sub'
              rotation='vertical'
              style={defaultStyles.sticker}
              size={size}
            />
            <CubeSticker
              color={CORNER_LETTER_TO_PIECE_DICT[letter].mainColor}
              type='main'
              style={{ ...defaultStyles.sticker }}
              size={size}
            />
          </View>
        </View>
      );
    }
  }

  const _renderEdgePiece = (userLetter, subPosition, stickerSize) => {
    const letter = NOTATIONS.includes(userLetter) ? userLetter : NOTATIONS[Math.floor(Math.random() * 23)];
    const pos = DIRECTIONS.includes(subPosition) ? subPosition : DIRECTIONS[Math.floor(Math.random() * 4)];
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
    type === 'edge'
    ? _renderEdgePiece(letter, subPosition, stickerSize)
    : _renderCornerPiece(letter, subPosition, stickerSize)
  );
}

export default CubePiece;