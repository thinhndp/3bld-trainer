import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors, Spacing, Typography } from '../../styles';
import { CubeFlat } from '../../components/molecules';

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: Colors.BACKGROUND,
    color: Colors.WHITE,
    padding: Spacing.BASE
  },
  flexColCenter: {
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_20,
    fontFamily: Typography.FONT_FAMILY_BOLD
  },
  letterAndCube: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: '#f00',
  },
  bigText: {
    fontSize: 200
  },
  letterSection: {
    flex: 1,
    // backgroundColor: '#0f0',

  },
  cubeSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // flex: 1,
    // backgroundColor: '#00f'
  }
});

const EdgeLTCScreen = () => {
  const chosenStickers = [];

  const handleStickerTap = (chosenStickers) => {
    // const index = chosenStickers.findIndex(chosen => chosen === tappedSticker);
    // console.log(index);
    // if (index > -1) {
    //   chosenStickers = chosenStickers.filter(chosen => chosen !== tappedSticker);
    // }
    // else {
    //   chosenStickers.push(tappedSticker);
    // }
    console.log(chosenStickers);
  }

  return (
    <View style={{ ...styles.screen, ...styles.flexColCenter }}>
      <Text style={styles.text}>Letters to Colors</Text>
      <View style={styles.letterAndCube}>
        <View style={styles.letterSection}>
          <Text style={{ ...styles.text, ...styles.bigText }}>A</Text>
        </View>
        <View style={styles.cubeSection}>
          <CubeFlat width={280} status='inactive' onStickerPress={handleStickerTap}/>
        </View>
      </View>
    </View>
  );
}

EdgeLTCScreen.navigationOptions = ({ navigation }) => ({
  title: 'Edges',
});

export default EdgeLTCScreen;