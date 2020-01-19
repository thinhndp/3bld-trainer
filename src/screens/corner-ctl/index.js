import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

import { Colors, Spacing, Typography } from '../../styles';
import { Key, CubeSticker } from '../../components/atoms';
import { CubeFlat, FeedbackMessage, CubePiece, Keyboard } from '../../components/molecules';
import { CubeUtils, Helper } from '../../utils';

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: Colors.BACKGROUND,
    color: Colors.WHITE,
    padding: Spacing.BASE,
  },
  flexColCenter: {
    display: 'flex',
    alignItems: 'center'
  },
  screenOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 255, 255, 0.1)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: Typography.FONT_SIZE_18,
    zIndex: 100
    // height: 100,
    // width: 100,
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
    fontSize: Dimensions.get('window').height / 4,
    // lineHeight: (Dimensions.get('window').height / 4) * (3 / 2),
    width: Dimensions.get('window').width / 2,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  questionSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#0f0',
  },
  timerSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: '#0f0'
  },
  bigTextSection: {
    flex: 4,
    // width: 200,
    // Dimensions.get('window').height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#00f',
    // textAlignVertical: 'center',
  },
  feedbackSection: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f00',
  },
  cubeSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    justifyContent: 'center'
    // flex: 1,
    // backgroundColor: '#00f'
  },
  guidingSticker: {
    borderColor: 'rgba(255,255,255, 1)',
    borderWidth: 6,
    flex: 1,
    borderRadius: 6
    // height: 100,
    // width: 100
    // opacity: 1,
  },
  feedbackCorrect: {
    fontSize: Typography.FONT_SIZE_24,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: '#559300',
    textAlign: 'center'
  },
  feedbackIncorrect: {
    fontSize: Typography.FONT_SIZE_24,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: '#EE4540',
    textAlign: 'center'
  },
  feedbackSubText: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: '#fff',
    textAlign: 'center'
  }
});

const CornerCTLScreen = () => {
  const [chosenLetters, setChosenLetters] = useState([]);
  const [pieceToGuess, setPieceToGuess] = useState('');
  const [feedback, setFeedback] = useState('none');
  const [screenState, setScreenState] = useState('ready');
  const [subStickerPostition, setSubStickerPosition] = useState('');
  const windowWidth = Dimensions.get('window').width;

  // useEffect(() => {
  //   pickNextPiece();
  // }, []);

  useEffect(() => {
    if (chosenLetters.length == 1) {
        checkUserAnswer();
    }
  }, [chosenLetters])

  // const handleStickerTap = (color) => {
  //   if (chosenLetters.length == 2) {
  //     return;
  //   }
  //   const newChosenLetters = [ ...chosenLetters ];
  //   const index = newChosenLetters.indexOf(color);
  //   if (index > -1) {
  //     newChosenLetters.splice(index, 1);
  //   }
  //   else {
  //     newChosenLetters.push(color);
  //   }
  //   console.log(newChosenLetters.length);
  //   if (newChosenLetters.length <= 2) {
  //     setChosenLetters([ ...newChosenLetters ]);
  //   }
  //   else {
  //     // checkUserAnswer();
  //   }
  //   console.log(chosenLetters);
  // }

  const handleKeyTap = (key) => {
    if (chosenLetters.length == 1) {
      return;
    }
    const newChosenLetters = [ ...chosenLetters ];
    const index = newChosenLetters.indexOf(key);
    if (index > -1) {
      newChosenLetters.splice(index, 1);
    }
    else {
      newChosenLetters.push(key);
    }
    console.log(newChosenLetters.length);
    if (newChosenLetters.length <= 1) {
      setChosenLetters([ ...newChosenLetters ]);
    }
    else {
      // checkUserAnswer();
    }
    console.log(chosenLetters);
  }

  const checkUserAnswer = () => {
    if (chosenLetters.length != 1) {
      return;
    }
    console.log('ayyy');
    if (chosenLetters[0] === pieceToGuess) {
      setFeedback('correct');
      setScreenState('midQuestions');
    }
    else {
      setFeedback('incorrect');
      setScreenState('midQuestions');
    }
  }

  const pickNextPiece = () => {
    console.log(Helper.randomKey(CubeUtils.cornerLetterToPiece));
    // setPieceToGuess('A');
    setPieceToGuess(Helper.randomKey(CubeUtils.cornerLetterToPiece));
    // setSubStickerPosition(['top', 'right', 'bottom', 'left'].[Math.floor(Math.random() * 4)])
    setSubStickerPosition(CubeUtils.directions[Math.floor(Math.random() * 4)])
    setChosenLetters([]);
    setScreenState('inQuestion');
    setFeedback('none');
  }

  const renderStickerOverlay = () => {
    return (
      <View style={styles.guidingSticker}>
      </View>
    )
  }

  const renderFeedback = () => {
    if (feedback === 'none') {
      return null;
    }
    if (feedback === 'correct') {
      return (
        <FeedbackMessage
          mainText={'CORRECT'}
          subText='Tap anywhere to continue'
          mainTextStyle={styles.feedbackCorrect}
          subTextStyle={styles.feedbackSubText}
        />
      );
    }
    return (
      <FeedbackMessage
        mainText={'INCORRECT'}
        subText='Tap the correct answer as shown to continue'
        mainTextStyle={styles.feedbackIncorrect}
        subTextStyle={styles.feedbackSubText}
      />
    );
  }

  const renderScreenOverlay = () => {
    if (screenState !== 'ready' && screenState !== 'midQuestions') {
      return null;
    }
    if (screenState === 'ready') {
      // return (
      //   <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: '#f00' }}>
      //     <Text style={styles.text}>Tap the screen when you're ready</Text>
      //   </TouchableOpacity>
      // );
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={{ ...styles.screenOverlay, backgroundColor: '#000' }}
          onPress={() => { pickNextPiece(); }}
        >
          <Text style={styles.text}>Tap the screen when you're ready</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{ ...styles.screenOverlay, backgroundColor: 'rgba(0, 0, 0, 0)' }}
        onPress={() => { pickNextPiece(); }}
      >
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <View style={{ ...styles.screen, ...styles.flexColCenter }}>
        <Text style={styles.text}>Letters to Colors</Text>
        <View style={styles.letterAndCube}>
          <View style={styles.questionSection}>
            <View style={styles.timerSection}>
              {/* <Text style={styles.text}>Timer not implemented</Text> */}
            </View>
            <View style={styles.bigTextSection}>
              {/* <Text style={{ ...styles.text, ...styles.bigText }}>{pieceToGuess}</Text> */}
              {/* <Key size={34} letter='A' /> */}
              <CubePiece
                type='corner'
                letter={pieceToGuess}
                stickerSize={ windowWidth / 4 }
                subPosition={subStickerPostition}
              />
            </View>
            <View style={styles.feedbackSection}>
              {renderFeedback()}
            </View>
          </View>
          {/* <Key size={34} letter='A' /> */}
          <View style={styles.cubeSection}>
            {/* <CubeFlat
              width={windowWidth / 1.35}
              status='inactive'
              onStickerPress={handleStickerTap}
              stickersStyle={{stickers: chosenLetters, style: { opacity: 1 }}}
              stickersOverlay={{stickers: [], overlay: renderStickerOverlay()}}
            /> */}
            {/* <Key
              size={34}
              letter='B'
              letterStyles={{ fontFamily: Typography.FONT_FAMILY_BOLD }}

            /> */}
            <Keyboard
              width={windowWidth - windowWidth / 30}
              onKeyPress={handleKeyTap}
              disabledKeys={[ 'Y', 'Z' ]}
              activeKeys={chosenLetters}
            />
            {/* <View styles={{ width: 500, height: 500, backgroundColor: '#f0f', flex: 1 }}></View> */}
          </View>
        </View>
      </View>
      {renderScreenOverlay()}
    </View>
  );
}

CornerCTLScreen.navigationOptions = ({ navigation }) => ({
  title: 'Corners',
});

export default CornerCTLScreen;