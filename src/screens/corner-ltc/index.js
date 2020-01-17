import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

import { Colors, Spacing, Typography } from '../../styles';
import { CubeFlat, FeedbackMessage } from '../../components/molecules';
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
    justifyContent: 'flex-end',
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

const CornerLTCScreen = () => {
  const [chosenStickers, setChosenStickers] = useState([]);
  const [letterToGuess, setLetterToGuess] = useState('');
  const [feedback, setFeedback] = useState('none');
  const [screenState, setScreenState] = useState('ready');
  const windowWidth = Dimensions.get('window').width;

  // useEffect(() => {
  //   // pickNextLetter();
  //   console.log('vo');
  // }, []);

  useEffect(() => {
    if (chosenStickers.length == 3) {
        checkUserAnswer();
    }
  }, [chosenStickers])

  const handleStickerTap = (color) => {
    if (chosenStickers.length == 3) {
      return;
    }
    const newChosenStickers = [ ...chosenStickers ];
    const index = newChosenStickers.indexOf(color);
    if (index > -1) {
      newChosenStickers.splice(index, 1);
    }
    else {
      newChosenStickers.push(color);
    }
    console.log(newChosenStickers.length);
    if (newChosenStickers.length <= 3) {
      setChosenStickers([ ...newChosenStickers ]);
    }
    else {
      // checkUserAnswer();
    }
    console.log(chosenStickers);
  }

  const checkUserAnswer = () => {
    if (chosenStickers.length != 3) {
      return;
    }
    // console.log('ayyy');
    if (chosenStickers[0] === CubeUtils.cornerLetterToPiece[letterToGuess].mainColor
        && (chosenStickers[1] === CubeUtils.cornerLetterToPiece[letterToGuess].subColor1
            || chosenStickers[1] === CubeUtils.cornerLetterToPiece[letterToGuess].subColor2)
        && (chosenStickers[2] === CubeUtils.cornerLetterToPiece[letterToGuess].subColor1
            || chosenStickers[2] === CubeUtils.cornerLetterToPiece[letterToGuess].subColor2)
      ) {
      setFeedback('correct');
      setScreenState('midQuestions');
    }
    else {
      setFeedback('incorrect');
      setScreenState('midQuestions');
    }
  }

  const pickNextLetter = () => {
    console.log(Helper.randomKey(CubeUtils.cornerLetterToPiece));
    // setLetterToGuess('A');
    setLetterToGuess(Helper.randomKey(CubeUtils.cornerLetterToPiece));
    setChosenStickers([]);
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
          onPress={() => { pickNextLetter(); }}
        >
          <Text style={styles.text}>Tap the screen when you're ready</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{ ...styles.screenOverlay, backgroundColor: 'rgba(0, 0, 0, 0)' }}
        onPress={() => { pickNextLetter(); }}
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
              <Text style={{ ...styles.text, ...styles.bigText }}>{letterToGuess}</Text>
            </View>
            <View style={styles.feedbackSection}>
              {renderFeedback()}
            </View>
          </View>
          <View style={styles.cubeSection}>
            <CubeFlat
              width={windowWidth / 1.35}
              status='inactive'
              onStickerPress={handleStickerTap}
              stickersStyle={{stickers: chosenStickers, style: { opacity: 1 }}}
              stickersOverlay={{stickers: [], overlay: renderStickerOverlay()}}
            />
          </View>
        </View>
      </View>
      {renderScreenOverlay()}
    </View>
  );
}

CornerLTCScreen.navigationOptions = ({ navigation }) => ({
  title: 'Corners',
});

export default CornerLTCScreen;